import { NextRequest } from "next/server";
import { buildMarkdownHttpResponse } from "@/lib/agent-content";

function markdownResponse(request: NextRequest, includeBody: boolean) {
  const pathname = request.nextUrl.searchParams.get("path") ?? "/";
  const result = buildMarkdownHttpResponse(pathname);
  return new Response(includeBody ? result.body : null, {
    status: result.status,
    headers: result.headers,
  });
}

export function GET(request: NextRequest) {
  return markdownResponse(request, true);
}

export function HEAD(request: NextRequest) {
  return markdownResponse(request, false);
}
