import {
  isMarkdownPath,
  markdownDocument,
  normalizeContentPath,
  plainText,
  ABOUT_PARAGRAPHS,
  PUBLIC_EMAIL,
} from "@/lib/agent-content";
import { getSiteUrl } from "@/lib/site";
import { parseAccept } from "@/lib/negotiate";

export const MCP_PROTOCOL_VERSIONS = ["2025-03-26", "2025-06-18"] as const;
export const MCP_SERVER_NAME = "io.github.SouravBandyopadhyay/portfolio";
export const MCP_SERVER_VERSION = "1.0.0";
export const MCP_SERVER_TITLE = "Sourav Bandyopadhyay portfolio";

const MCP_INSTRUCTIONS = [
  "Use this server for public facts about Sourav Bandyopadhyay's portfolio.",
  "Call get_profile for the biography and contact email, list_pages for canonical paths, and get_page for one page of Markdown.",
  "Do not use it for Vercel platform APIs, employment verification beyond the published About text, or sending email.",
].join(" ");

type JsonRpcId = string | number | null;

type JsonRpcRequest = {
  jsonrpc?: string;
  id?: JsonRpcId;
  method?: string;
  params?: Record<string, unknown>;
};

export type McpHttpResult = {
  status: number;
  body: unknown;
  contentType: string;
};

function tool(name: string, description: string, properties: Record<string, unknown>, required: string[]) {
  return {
    name,
    description,
    inputSchema: {
      type: "object",
      properties,
      required,
      additionalProperties: false,
    },
  };
}

export function mcpTools() {
  return [
    tool(
      "get_profile",
      "Return Sourav Bandyopadhyay's public profile: role, location, stack, and contact email.",
      {},
      []
    ),
    tool(
      "list_pages",
      "List public portfolio paths an agent can request.",
      {},
      []
    ),
    tool(
      "get_page",
      "Return the Markdown body for a public portfolio path such as /, /about, /contact, /privacy, /docs, or /writing.",
      {
        path: {
          type: "string",
          description: "Site path, for example /about",
        },
      },
      ["path"]
    ),
  ];
}

function acceptsStreamableHttp(accept: string | null): boolean {
  if (!accept) return false;
  const ranges = parseAccept(accept).filter((range) => range.q > 0);
  const allows = (concrete: string) =>
    ranges.some((range) => {
      if (range.type === "*/*") return true;
      if (range.type.endsWith("/*")) return concrete.startsWith(range.type.slice(0, -1));
      return range.type === concrete;
    });
  return allows("application/json") && allows("text/event-stream");
}

function profileText(baseUrl: string): string {
  return [
    plainText(ABOUT_PARAGRAPHS),
    "",
    `Email: ${PUBLIC_EMAIL}`,
    `Site: ${baseUrl}/`,
    `Developer resources: ${baseUrl}/docs`,
  ].join("\n");
}

function callTool(name: string, args: Record<string, unknown>, baseUrl: string) {
  if (name === "get_profile") {
    return { content: [{ type: "text", text: profileText(baseUrl) }], isError: false };
  }
  if (name === "list_pages") {
    const pages = ["/", "/about", "/contact", "/privacy", "/writing", "/docs", "/llms.txt", "/openapi.json", "/mcp"];
    const text = pages.map((path) => `${baseUrl}${path === "/" ? "/" : path}`).join("\n");
    return { content: [{ type: "text", text }], isError: false };
  }
  if (name === "get_page") {
    const path = typeof args.path === "string" ? normalizeContentPath(args.path) : "";
    if (!isMarkdownPath(path)) {
      return {
        content: [
          {
            type: "text",
            text: `No public Markdown page at ${path || "(missing path)"}. See ${baseUrl}/docs.`,
          },
        ],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: markdownDocument(path, baseUrl) ?? "" }],
      isError: false,
    };
  }
  return null;
}

function rpcError(id: JsonRpcId | undefined, code: number, message: string): McpHttpResult {
  return {
    status: 200,
    contentType: "application/json",
    body: {
      jsonrpc: "2.0",
      id: id ?? null,
      error: { code, message },
    },
  };
}

export function handleMcpPost(input: {
  accept: string | null;
  protocolVersionHeader?: string | null;
  body: unknown;
  baseUrl?: string;
}): McpHttpResult {
  const baseUrl = input.baseUrl ?? getSiteUrl();

  if (!acceptsStreamableHttp(input.accept)) {
    return {
      status: 400,
      contentType: "text/plain; charset=utf-8",
      body: "Accept must include application/json and text/event-stream\n",
    };
  }

  const headerVersion = input.protocolVersionHeader?.trim();
  if (
    headerVersion &&
    !MCP_PROTOCOL_VERSIONS.includes(headerVersion as (typeof MCP_PROTOCOL_VERSIONS)[number])
  ) {
    return {
      status: 400,
      contentType: "text/plain; charset=utf-8",
      body: `Unsupported MCP-Protocol-Version. Supported versions: ${MCP_PROTOCOL_VERSIONS.join(", ")}\n`,
    };
  }

  if (input.body == null || typeof input.body !== "object" || Array.isArray(input.body)) {
    return {
      status: 400,
      contentType: "text/plain; charset=utf-8",
      body: "JSON-RPC batching is not supported\n",
    };
  }

  const message = input.body as JsonRpcRequest;
  if (message.jsonrpc !== "2.0" || typeof message.method !== "string") {
    return rpcError(message.id, -32600, "Invalid Request");
  }

  const isNotification = message.id === undefined || message.method.startsWith("notifications/");
  if (message.method === "notifications/initialized" || (isNotification && message.method.startsWith("notifications/"))) {
    return { status: 202, contentType: "application/json", body: null };
  }

  if (message.method === "initialize") {
    const requested = String(message.params?.protocolVersion ?? "");
    const protocolVersion = MCP_PROTOCOL_VERSIONS.includes(
      requested as (typeof MCP_PROTOCOL_VERSIONS)[number]
    )
      ? requested
      : MCP_PROTOCOL_VERSIONS[0];
    return {
      status: 200,
      contentType: "application/json",
      body: {
        jsonrpc: "2.0",
        id: message.id ?? null,
        result: {
          protocolVersion,
          capabilities: { tools: { listChanged: false } },
          serverInfo: {
            name: MCP_SERVER_NAME,
            version: MCP_SERVER_VERSION,
            title: MCP_SERVER_TITLE,
          },
          instructions: MCP_INSTRUCTIONS,
        },
      },
    };
  }

  if (message.method === "ping") {
    return {
      status: 200,
      contentType: "application/json",
      body: { jsonrpc: "2.0", id: message.id ?? null, result: {} },
    };
  }

  if (message.method === "tools/list") {
    return {
      status: 200,
      contentType: "application/json",
      body: {
        jsonrpc: "2.0",
        id: message.id ?? null,
        result: { tools: mcpTools() },
      },
    };
  }

  if (message.method === "tools/call") {
    const params = message.params ?? {};
    const name = typeof params.name === "string" ? params.name : "";
    const args =
      params.arguments && typeof params.arguments === "object" && !Array.isArray(params.arguments)
        ? (params.arguments as Record<string, unknown>)
        : {};
    const result = callTool(name, args, baseUrl);
    if (!result) {
      return rpcError(message.id, -32602, `Unknown tool: ${name}`);
    }
    return {
      status: 200,
      contentType: "application/json",
      body: { jsonrpc: "2.0", id: message.id ?? null, result },
    };
  }

  return rpcError(message.id, -32601, `Method not found: ${message.method}`);
}

export function getMcpDiscovery(baseUrl = getSiteUrl()) {
  return {
    name: MCP_SERVER_NAME,
    title: MCP_SERVER_TITLE,
    transport: {
      type: "streamable-http",
      url: `${baseUrl}/mcp`,
    },
    serverCard: `${baseUrl}/.well-known/mcp/server-card.json`,
  };
}

export function getMcpServerCard(baseUrl = getSiteUrl()) {
  return {
    $schema: "https://static.modelcontextprotocol.io/schemas/v1/server-card.schema.json",
    name: MCP_SERVER_NAME,
    version: MCP_SERVER_VERSION,
    title: MCP_SERVER_TITLE,
    description: MCP_INSTRUCTIONS,
    websiteUrl: `${baseUrl}/`,
    remotes: [
      {
        type: "streamable-http",
        url: `${baseUrl}/mcp`,
        supportedProtocolVersions: [...MCP_PROTOCOL_VERSIONS],
      },
    ],
  };
}

export function getMcpCatalog(baseUrl = getSiteUrl()) {
  return {
    servers: [
      {
        name: MCP_SERVER_NAME,
        title: MCP_SERVER_TITLE,
        url: `${baseUrl}/.well-known/mcp/server-card.json`,
        transport: {
          type: "streamable-http",
          url: `${baseUrl}/mcp`,
        },
      },
    ],
  };
}

