import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  ABOUT_PARAGRAPHS,
  CONTACT_PARAGRAPHS,
  PRIVACY_PARAGRAPHS,
  buildMarkdownHttpResponse,
  plainText,
} from "../lib/agent-content";
import { getJsonLdGraph } from "../lib/jsonld";
import {
  getMcpCatalog,
  getMcpDiscovery,
  getMcpServerCard,
  handleMcpPost,
} from "../lib/mcp";
import { negotiateAccept } from "../lib/negotiate";
import { getApiCatalog, getOpenApiDocument } from "../lib/openapi";

const BASE = "https://portfolio.example";
const CHROME_ACCEPT =
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8";
const MCP_ACCEPT = "application/json, text/event-stream";

test("Accept negotiation prefers markdown only when it outranks HTML", () => {
  assert.equal(negotiateAccept(null), "html");
  assert.equal(negotiateAccept("text/html"), "html");
  assert.equal(negotiateAccept("*/*"), "html");
  assert.equal(negotiateAccept(CHROME_ACCEPT), "html");
  assert.equal(negotiateAccept("text/markdown;q=0, text/html"), "html");
  assert.equal(negotiateAccept("text/markdown"), "markdown");
  assert.equal(negotiateAccept("text/markdown, text/html;q=0.8"), "markdown");
  assert.equal(negotiateAccept("text/markdown;q=0"), "not-acceptable");
  assert.equal(negotiateAccept("text/html;q=0, text/markdown;q=0"), "not-acceptable");
});

test("homepage markdown is nonempty and HTML selection stays separate", () => {
  const markdown = buildMarkdownHttpResponse("/", BASE);
  assert.equal(markdown.status, 200);
  assert.equal(markdown.headers["Content-Type"], "text/markdown; charset=utf-8");
  assert.equal(markdown.headers.Vary, "Accept");
  assert.ok(markdown.body.length > 20);
  assert.match(markdown.body, /Sourav Bandyopadhyay/);
  assert.equal(negotiateAccept("text/html"), "html");
});

test("unknown paths return a markdown 404 with a recovery link", () => {
  const missing = buildMarkdownHttpResponse("/__ora-404-probe", BASE);
  assert.equal(missing.status, 404);
  assert.equal(missing.headers["Content-Type"], "text/markdown; charset=utf-8");
  assert.equal(missing.headers.Vary, "Accept");
  assert.ok(missing.body.length >= 20);
  assert.match(missing.body, /\/llms\.txt/);
  assert.match(missing.body, /\/sitemap\.xml/);
  assert.match(missing.body, /\/docs/);
});

test("trust pages each contain at least 500 characters", () => {
  for (const paragraphs of [ABOUT_PARAGRAPHS, CONTACT_PARAGRAPHS, PRIVACY_PARAGRAPHS]) {
    assert.ok(plainText(paragraphs).length >= 500);
  }
});

test("llms.txt names when to use this site", () => {
  const llms = readFileSync(new URL("../public/llms.txt", import.meta.url), "utf8");
  assert.match(llms, /When to use this/);
  assert.match(llms, /get_profile/);
  assert.match(llms, /Do not use this site for Vercel platform/);
  assert.match(llms, /Sourav Bandyopadhyay developer resources/);
});

test("Person JSON-LD includes a description", () => {
  const [person] = getJsonLdGraph();
  assert.equal(person["@type"], "Person");
  assert.equal(typeof person.description, "string");
  assert.ok(person.description.length > 20);
});

test("OpenAPI and API catalog point at developer resources", () => {
  const spec = getOpenApiDocument(BASE);
  assert.equal(spec.openapi, "3.1.0");
  assert.match(spec.info.title, /Sourav Bandyopadhyay/);
  assert.ok(spec.paths["/docs"]);
  assert.ok(spec.paths["/api/send"]);

  const catalog = getApiCatalog(BASE);
  const desc = catalog.linkset[0]["service-desc"][0];
  assert.equal(desc.href, `${BASE}/openapi.json`);
  assert.equal(catalog.linkset[0]["service-doc"][0].href, `${BASE}/docs`);
});

test("MCP discovery advertises streamable HTTP and initialize lists tools", () => {
  const discovery = getMcpDiscovery(BASE);
  assert.equal(discovery.transport.type, "streamable-http");
  assert.equal(discovery.transport.url, `${BASE}/mcp`);

  const card = getMcpServerCard(BASE);
  assert.equal(card.remotes[0].type, "streamable-http");
  assert.equal(card.remotes[0].url, `${BASE}/mcp`);
  assert.equal(getMcpCatalog(BASE).servers[0].url, `${BASE}/.well-known/mcp/server-card.json`);

  const initialized = handleMcpPost({
    accept: MCP_ACCEPT,
    baseUrl: BASE,
    body: {
      jsonrpc: "2.0",
      id: 1,
      method: "initialize",
      params: {
        protocolVersion: "2025-03-26",
        capabilities: {},
        clientInfo: { name: "test", version: "1.0.0" },
      },
    },
  });
  assert.equal(initialized.status, 200);
  const initBody = initialized.body as {
    result: { protocolVersion: string; serverInfo: { name: string }; capabilities: { tools: unknown } };
  };
  assert.equal(initBody.result.protocolVersion, "2025-03-26");
  assert.equal(initBody.result.serverInfo.name, "io.github.SouravBandyopadhyay/portfolio");
  assert.ok(initBody.result.capabilities.tools);
  assert.equal("mcp-session-id" in initialized, false);

  const listed = handleMcpPost({
    accept: MCP_ACCEPT,
    baseUrl: BASE,
    body: { jsonrpc: "2.0", id: 2, method: "tools/list" },
  });
  const tools = (listed.body as { result: { tools: { name: string }[] } }).result.tools.map(
    (item) => item.name
  );
  assert.deepEqual(tools, ["get_profile", "list_pages", "get_page"]);

  const page = handleMcpPost({
    accept: MCP_ACCEPT,
    baseUrl: BASE,
    body: {
      jsonrpc: "2.0",
      id: 3,
      method: "tools/call",
      params: { name: "get_page", arguments: { path: "/about" } },
    },
  });
  const text = (page.body as { result: { content: { text: string }[]; isError: boolean } }).result;
  assert.equal(text.isError, false);
  assert.match(text.content[0].text, /Detroit Software Consultant India/);
});
