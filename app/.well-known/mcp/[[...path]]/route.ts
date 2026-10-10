import { getMcpCatalog, getMcpDiscovery, getMcpServerCard } from "@/lib/mcp";

export function GET(
  _request: Request,
  context: { params: { path?: string[] } }
) {
  const path = context.params.path ?? [];
  const key = path.join("/");

  if (key === "") {
    return Response.json(getMcpDiscovery(), {
      headers: cors(),
    });
  }
  if (key === "server-card.json") {
    return Response.json(getMcpServerCard(), { headers: cors() });
  }
  if (key === "catalog.json") {
    return Response.json(getMcpCatalog(), { headers: cors() });
  }

  return Response.json({ error: "Not found" }, { status: 404, headers: cors() });
}

function cors() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "public, max-age=300",
  };
}
