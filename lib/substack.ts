export const SUBSTACK = {
  name: "Core Craft",
  url: "https://corecraft.substack.com",
  feedUrl: "https://corecraft.substack.com/feed",
  subscribeUrl: "https://corecraft.substack.com/subscribe",
  description:
    "Practical guides and real-world code to help you build better, scale smarter, and ship products that work.",
} as const;

export type SubstackPost = {
  id: string;
  title: string;
  link: string;
  summary: string;
  publishedAt: string;
  image?: string;
};

function stripHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8212;/g, "—")
    .replace(/&#8217;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function decodeCdata(value: string) {
  return value.replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/, "$1").trim();
}

function firstMatch(block: string, pattern: RegExp) {
  const match = block.match(pattern);
  return match?.[1]?.trim() ?? "";
}

function parseItems(xml: string): SubstackPost[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  const posts: SubstackPost[] = [];

  for (const block of items) {
    const title = decodeCdata(firstMatch(block, /<title>([\s\S]*?)<\/title>/));
    const link = firstMatch(block, /<link>([\s\S]*?)<\/link>/);
    const guid =
      firstMatch(block, /<guid[^>]*>([\s\S]*?)<\/guid>/) || link;
    const pubDate = firstMatch(block, /<pubDate>([\s\S]*?)<\/pubDate>/);
    const description = decodeCdata(
      firstMatch(block, /<description>([\s\S]*?)<\/description>/)
    );
    const enclosure = firstMatch(
      block,
      /<enclosure[^>]*url="([^"]+)"[^>]*\/?>/
    );

    if (!title || !link) continue;

    posts.push({
      id: guid,
      title,
      link,
      summary: stripHtml(description).slice(0, 220),
      publishedAt: pubDate
        ? new Date(pubDate).toISOString()
        : new Date(0).toISOString(),
      image: enclosure || undefined,
    });
  }

  return posts;
}

export async function getSubstackPosts(): Promise<{
  posts: SubstackPost[];
  error?: string;
}> {
  try {
    const response = await fetch(SUBSTACK.feedUrl, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
      },
    });

    if (!response.ok) {
      return {
        posts: [],
        error: `Feed returned ${response.status}`,
      };
    }

    const xml = await response.text();
    const posts = parseItems(xml).sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return { posts };
  } catch (error) {
    return {
      posts: [],
      error: error instanceof Error ? error.message : "Failed to load feed",
    };
  }
}

export function formatPostDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}
