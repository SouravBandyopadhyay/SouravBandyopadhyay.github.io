import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  isMarkdownPath,
  normalizeContentPath,
  notFoundMarkdown,
} from "@/lib/agent-content";
import { getSiteUrl } from "@/lib/site";
import {
  isNextDataRequest,
  negotiateAccept,
  shouldSkipNegotiation,
} from "@/lib/negotiate";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (shouldSkipNegotiation(pathname) || isNextDataRequest(request.headers)) {
    return NextResponse.next();
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next();
  }

  const decision = negotiateAccept(request.headers.get("accept"));
  if (decision === "not-acceptable") {
    return new NextResponse("Not Acceptable\n", {
      status: 406,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        Vary: "Accept",
      },
    });
  }

  if (decision !== "markdown") {
    return NextResponse.next();
  }

  // Next.js drops a rewritten 404 and serves another page instead. Return the
  // Markdown error from middleware so the public status stays 404.
  const contentPath = normalizeContentPath(pathname);
  if (!isMarkdownPath(contentPath)) {
    return new NextResponse(request.method === "HEAD" ? null : notFoundMarkdown(getSiteUrl()), {
      status: 404,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        Vary: "Accept",
        "Cache-Control": "no-store",
      },
    });
  }

  const url = request.nextUrl.clone();
  url.pathname = "/api/content-markdown";
  url.search = "";
  url.searchParams.set("path", pathname);
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
