import { getOpenApiDocument } from "@/lib/openapi";

export function GET() {
  return Response.json(getOpenApiDocument(), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=300",
    },
  });
}
