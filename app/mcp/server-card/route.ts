import { getMcpServerCard } from "@/lib/mcp";

export function GET() {
  return Response.json(getMcpServerCard(), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=300",
    },
  });
}
