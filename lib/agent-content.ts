import { getSiteUrl } from "@/lib/site";

export const PERSON_DESCRIPTION =
  "Portfolio of Sourav Bandyopadhyay, a full-stack software developer based in India building modern web products with React, Next.js, TypeScript, Node.js, and Python.";

export const PUBLIC_EMAIL = "souravb.1998@gmail.com";

export const ABOUT_PARAGRAPHS = [
  "Sourav Bandyopadhyay is a software developer based in India. Since August 2026 he has been an Associate at Bain & Company in Gurugram, Haryana, collaborating with customer teams on a data product. He has more than three years of experience building React and Node.js products in JavaScript, TypeScript, and Python.",
  "He cares about creating useful, well-crafted digital experiences. His training started with programming and problem-solving at Masai School, and his work now focuses on thoughtful web products. He works across frontend and backend systems, from REST APIs and data models to full-stack Next.js applications, translating requirements into software that feels clear to use.",
  "At Bain & Company he works with customer teams on a tool for data cleaning and transformation, so raw inputs become clearer and more meaningful. The product includes a data chat, where people can ask questions about their data in plain language, and a PowerPoint download so those results can be shared as a presentation.",
  "Before Bain, he worked at Detroit Software Consultant India in Gurugram from April 2023 to August 2026. From April 2026 to August 2026 he was Associate Team Lead, leading delivery and mentoring developers. From June 2024 to May 2026 he was a Software Developer, building full-stack solutions, including LLM projects with LangChain, FastAPI, and Next.js, and hosting applications on AWS ECS. From April 2023 to June 2024 he was an Associate Software Developer, building prototypes, web applications, and proof-of-concepts.",
  "Selected public work includes The Daily Commit (https://thedailycommit.com), Link-Trim (https://link-trim.in), and Personacraft (https://personacraft.app). Writing is published as Core Craft at https://corecraft.substack.com. The public contact address is souravb.1998@gmail.com.",
];

export const CONTACT_PARAGRAPHS = [
  "You can reach Sourav Bandyopadhyay, a software developer based in India, through the form on this page or by email at souravb.1998@gmail.com. The form asks for your name, your email address, and a message. Use it for a project conversation, collaboration, or a question about the work shown on this portfolio.",
  "The same form is also on the homepage at /#contact. Professional profiles listed on the site are GitHub at https://github.com/SouravBandyopadhyay, LinkedIn at https://www.linkedin.com/in/souravbandyopadhyay/, Core Craft at https://corecraft.substack.com/, LeetCode at https://leetcode.com/u/Sourav_280598/, and UiVerse at https://uiverse.io/profile/SouravBandyopadhyay.",
  "Please write about a real project or question. This page is for people who want to talk with Sourav about software work. It is not a support channel for the Vercel platform, and it cannot verify employment beyond what the About page already states.",
];

export const PRIVACY_PARAGRAPHS = [
  "This privacy page describes how the public portfolio of Sourav Bandyopadhyay handles information you send through the site. The site is a personal portfolio. It does not sell personal information, and it does not set analytics cookies.",
  "The contact form at /contact and on the homepage collects three fields: your name, your email address, and your message. When you submit the form, the browser sends those fields to the same-origin path POST /api/send. That route uses Resend to send an email. The recipient of that email is the address you typed into the form, and the message includes the name and message you submitted. You can also write directly to souravb.1998@gmail.com.",
  "Do not submit passwords, payment card numbers, or other people's private data in the form. If you want a message deleted, email souravb.1998@gmail.com and say which address you used and roughly when you wrote.",
  "Pages you request are ordinary web requests. The host may keep standard server logs, such as the URL, time, and user agent, to operate the site. Public pages can also be fetched by AI agents. Those requests receive the same public content as a browser, or a Markdown copy when the client sends Accept: text/markdown. Agent requests do not receive extra personal data.",
  "Profile links on the site point to GitHub, LinkedIn, Core Craft on Substack, LeetCode, and UiVerse. Those sites have their own privacy practices. This page covers only this portfolio and the contact form described above.",
];

export const DOCS_PARAGRAPHS = [
  "These are the developer resources for Sourav Bandyopadhyay's portfolio. Use them to read the public site, find machine-readable files, and call the read-only MCP server. This host is a personal portfolio. It does not publish Vercel platform documentation, the Vercel API, or Vercel support.",
  "No authentication is required. Do not send API keys, OAuth tokens, or passwords. The contact route POST /api/send accepts a JSON body with name, email, and message, then uses Resend to email the address you submitted. The MCP endpoint is public and read-only. It cannot send email.",
  "Request any public page with Accept: text/markdown to receive a Markdown body, Content-Type: text/markdown, and Vary: Accept. Browsers that send Accept: text/html still receive HTML. A missing path returns HTTP 404. With Accept: text/markdown, that 404 body is Markdown and links here, to the sitemap, and to llms.txt.",
];

export function plainText(paragraphs: string[]): string {
  return paragraphs.join("\n\n");
}

export function normalizeContentPath(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return "/";
  const withSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  let pathname: string;
  try {
    pathname = new URL(withSlash, "https://portfolio.local").pathname;
  } catch {
    return "/";
  }
  if (pathname.length > 1 && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }
  return pathname;
}

const MARKDOWN_PATHS = ["/", "/writing", "/about", "/contact", "/privacy", "/docs"] as const;

export type MarkdownPath = (typeof MARKDOWN_PATHS)[number];

export function isMarkdownPath(pathname: string): pathname is MarkdownPath {
  return (MARKDOWN_PATHS as readonly string[]).includes(pathname);
}

function abs(baseUrl: string, path: string): string {
  if (path === "/") return `${baseUrl}/`;
  return `${baseUrl}${path}`;
}

export function notFoundMarkdown(baseUrl: string): string {
  return [
    "# Page not found",
    "",
    "This path is not published on Sourav Bandyopadhyay's portfolio. The server did not find a page for the URL you requested.",
    "",
    "Try one of these recovery links:",
    "",
    `- [llms.txt](${abs(baseUrl, "/llms.txt")})`,
    `- [Sitemap](${abs(baseUrl, "/sitemap.xml")})`,
    `- [Sourav Bandyopadhyay developer resources](${abs(baseUrl, "/docs")})`,
    "",
  ].join("\n");
}

export function markdownDocument(pathname: string, baseUrl: string): string | null {
  const path = normalizeContentPath(pathname);
  switch (path) {
    case "/":
      return homepageMarkdown(baseUrl);
    case "/writing":
      return writingMarkdown(baseUrl);
    case "/about":
      return pageMarkdown("About Sourav Bandyopadhyay", ABOUT_PARAGRAPHS, baseUrl);
    case "/contact":
      return pageMarkdown("Contact Sourav Bandyopadhyay", CONTACT_PARAGRAPHS, baseUrl);
    case "/privacy":
      return pageMarkdown("Privacy", PRIVACY_PARAGRAPHS, baseUrl);
    case "/docs":
      return docsMarkdown(baseUrl);
    default:
      return null;
  }
}

function pageMarkdown(title: string, paragraphs: string[], baseUrl: string): string {
  return [
    `# ${title}`,
    "",
    ...paragraphs.flatMap((paragraph) => [paragraph, ""]),
    `Canonical site: ${baseUrl}/`,
    "",
  ].join("\n");
}

function homepageMarkdown(baseUrl: string): string {
  return [
    "# Sourav Bandyopadhyay",
    "",
    "Software developer based in India. This portfolio covers full-stack web work with React, Next.js, TypeScript, Node.js, and Python.",
    "",
    PERSON_DESCRIPTION,
    "",
    "## About",
    "",
    ...ABOUT_PARAGRAPHS.flatMap((paragraph) => [paragraph, ""]),
    "## Selected work",
    "",
    "- The Daily Commit: https://thedailycommit.com",
    "- Link-Trim: https://link-trim.in",
    "- Personacraft: https://personacraft.app",
    "",
    "## Writing",
    "",
    `Essays and practical notes are listed at ${abs(baseUrl, "/writing")} and published on Core Craft: https://corecraft.substack.com`,
    "",
    "## Contact",
    "",
    `Email ${PUBLIC_EMAIL} or use ${abs(baseUrl, "/contact")}.`,
    "",
    "## For agents",
    "",
    `- [When to use this site](${abs(baseUrl, "/llms.txt")})`,
    `- [Developer resources](${abs(baseUrl, "/docs")})`,
    `- [Sitemap](${abs(baseUrl, "/sitemap.xml")})`,
    "",
  ].join("\n");
}

function writingMarkdown(baseUrl: string): string {
  return [
    "# Writing",
    "",
    "Sourav Bandyopadhyay publishes essays and practical notes as Core Craft.",
    "",
    `- Archive on this site: ${abs(baseUrl, "/writing")}`,
    "- Publication: https://corecraft.substack.com",
    "- RSS: https://corecraft.substack.com/feed",
    "",
    "Essay titles on this site reflect the Substack feed. Full essay text stays on Substack.",
    "",
  ].join("\n");
}

function docsMarkdown(baseUrl: string): string {
  return [
    "# Sourav Bandyopadhyay developer resources",
    "",
    ...DOCS_PARAGRAPHS.flatMap((paragraph) => [paragraph, ""]),
    "## Predictable URLs",
    "",
    `- [llms.txt](${abs(baseUrl, "/llms.txt")}) — when to use this site, and how to call it`,
    `- [OpenAPI description](${abs(baseUrl, "/openapi.json")})`,
    `- [API catalog](${abs(baseUrl, "/.well-known/api-catalog")})`,
    `- [MCP discovery](${abs(baseUrl, "/.well-known/mcp")})`,
    `- [MCP server card](${abs(baseUrl, "/.well-known/mcp/server-card.json")})`,
    `- [Streamable HTTP MCP endpoint](${abs(baseUrl, "/mcp")})`,
    `- [Sitemap](${abs(baseUrl, "/sitemap.xml")})`,
    "",
    "Call the MCP server with POST and an initialize JSON-RPC message. Tools are get_profile, list_pages, and get_page.",
    "",
  ].join("\n");
}

export function buildMarkdownHttpResponse(pathname: string, baseUrl = getSiteUrl()) {
  const document = markdownDocument(pathname, baseUrl);
  const body = document ?? notFoundMarkdown(baseUrl);
  return {
    status: document ? 200 : 404,
    body,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      "Cache-Control": "no-store",
    },
  };
}
