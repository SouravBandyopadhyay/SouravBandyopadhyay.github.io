import { getApiCatalog } from "@/lib/openapi";

export function GET() {
  return new Response(JSON.stringify(getApiCatalog()), {
    headers: {
      "Content-Type": "application/linkset+json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=300",
    },
  });
}
