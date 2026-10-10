export type Negotiation = "markdown" | "html" | "not-acceptable";

type MediaRange = {
  type: string;
  q: number;
  specificity: number;
  index: number;
};

const MARKDOWN = "text/markdown";
const HTML = "text/html";

function specificity(type: string): number {
  if (type === "*/*") return 0;
  if (type.endsWith("/*")) return 1;
  return 2;
}

function rangeMatches(rangeType: string, concrete: string): boolean {
  if (rangeType === "*/*") return true;
  if (rangeType.endsWith("/*")) {
    return concrete.startsWith(rangeType.slice(0, -1));
  }
  return rangeType === concrete;
}

function clampQ(value: number): number {
  if (Number.isNaN(value)) return 1;
  if (value < 0) return 0;
  if (value > 1) return 1;
  return value;
}

export function parseAccept(header: string): MediaRange[] {
  const ranges: MediaRange[] = [];

  header.split(",").forEach((part, index) => {
    const pieces = part.split(";").map((piece) => piece.trim()).filter(Boolean);
    const type = pieces[0]?.toLowerCase();
    if (!type || !type.includes("/")) return;

    let q = 1;
    for (const piece of pieces.slice(1)) {
      const [rawName, rawValue] = piece.split("=").map((item) => item.trim());
      if (rawName?.toLowerCase() !== "q" || rawValue == null) continue;
      q = clampQ(Number(rawValue));
    }

    ranges.push({ type, q, specificity: specificity(type), index });
  });

  return ranges;
}

function qualityFor(concrete: string, ranges: MediaRange[]) {
  let best: MediaRange | null = null;

  for (const range of ranges) {
    if (!rangeMatches(range.type, concrete)) continue;
    if (
      !best ||
      range.specificity > best.specificity ||
      (range.specificity === best.specificity && range.index < best.index)
    ) {
      best = range;
    }
  }

  return best;
}

/**
 * Pick a representation for a public HTML page.
 * Missing Accept and wildcard requests stay HTML. Explicit q=0 for every
 * supported type is 406.
 */
export function negotiateAccept(header: string | null | undefined): Negotiation {
  if (header == null || header.trim() === "") return "html";

  const ranges = parseAccept(header);
  if (ranges.length === 0) return "html";

  const markdown = qualityFor(MARKDOWN, ranges);
  const html = qualityFor(HTML, ranges);
  const markdownQ = markdown?.q ?? 0;
  const htmlQ = html?.q ?? 0;

  if (markdownQ <= 0 && htmlQ <= 0) return "not-acceptable";

  if (markdownQ > htmlQ) return "markdown";
  if (htmlQ > markdownQ) return "html";

  const markdownSpecificity = markdown?.specificity ?? -1;
  const htmlSpecificity = html?.specificity ?? -1;
  if (markdownSpecificity > htmlSpecificity) return "markdown";
  if (htmlSpecificity > markdownSpecificity) return "html";

  const markdownIndex = markdown?.index ?? Number.POSITIVE_INFINITY;
  const htmlIndex = html?.index ?? Number.POSITIVE_INFINITY;
  if (markdownIndex < htmlIndex) return "markdown";
  return "html";
}

export function isNextDataRequest(headers: {
  get(name: string): string | null;
}): boolean {
  if (headers.get("rsc") === "1") return true;
  if (headers.get("next-router-prefetch")) return true;
  if (headers.get("next-router-state-tree")) return true;
  const accept = headers.get("accept") ?? "";
  return accept.toLowerCase().includes("text/x-component");
}

export function shouldSkipNegotiation(pathname: string): boolean {
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/api")) return true;
  if (pathname === "/mcp" || pathname.startsWith("/mcp/")) return true;
  if (pathname.startsWith("/.well-known")) return true;
  return pathname.includes(".");
}
