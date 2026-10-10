import { handleMcpPost } from "@/lib/mcp";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, MCP-Protocol-Version, Mcp-Session-Id",
  "Access-Control-Expose-Headers": "MCP-Protocol-Version",
};

function withCors(response: Response) {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(CORS)) {
    headers.set(key, value);
  }
  return new Response(response.body, { status: response.status, headers });
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS });
}

export function GET() {
  return new Response("Method Not Allowed\n", {
    status: 405,
    headers: { Allow: "POST", "Content-Type": "text/plain; charset=utf-8", ...CORS },
  });
}

export function DELETE() {
  return GET();
}

export async function POST(request: Request) {
  let body: unknown = null;
  try {
    const text = await request.text();
    body = text ? JSON.parse(text) : null;
  } catch {
    return withCors(
      new Response("Invalid JSON\n", {
        status: 400,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      })
    );
  }

  const result = handleMcpPost({
    accept: request.headers.get("accept"),
    protocolVersionHeader: request.headers.get("mcp-protocol-version"),
    body,
  });

  if (result.status === 202) {
    return new Response(null, { status: 202, headers: CORS });
  }

  const payload = typeof result.body === "string" ? result.body : JSON.stringify(result.body);
  return withCors(
    new Response(payload, {
      status: result.status,
      headers: { "Content-Type": result.contentType },
    })
  );
}
