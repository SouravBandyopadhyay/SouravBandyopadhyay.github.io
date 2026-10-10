import type { Metadata } from "next";
import Link from "next/link";
import { TextPage } from "@/components/text-page";
import { DOCS_PARAGRAPHS } from "@/lib/agent-content";

export const metadata: Metadata = {
  title: "Sourav Bandyopadhyay developer resources",
  description:
    "Developer resources for Sourav Bandyopadhyay's portfolio: Markdown negotiation, OpenAPI, the API catalog, and a read-only MCP server.",
  alternates: { canonical: "/docs" },
};

const resources = [
  { href: "/llms.txt", label: "llms.txt" },
  { href: "/openapi.json", label: "OpenAPI description" },
  { href: "/.well-known/api-catalog", label: "API catalog" },
  { href: "/.well-known/mcp", label: "MCP discovery" },
  { href: "/.well-known/mcp/server-card.json", label: "MCP server card" },
  { href: "/mcp", label: "Streamable HTTP MCP endpoint" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

export default function DocsPage() {
  return (
    <TextPage
      eyebrow="Developers"
      title="Sourav Bandyopadhyay developer resources"
      paragraphs={DOCS_PARAGRAPHS}
    >
      <ul className="list-disc space-y-2 pl-5">
        {resources.map((resource) => (
          <li key={resource.href}>
            <Link href={resource.href} className="underline-offset-4 hover:underline">
              {resource.label}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        Call the MCP server with POST and an initialize JSON-RPC message. Tools are get_profile, list_pages, and get_page.
      </p>
    </TextPage>
  );
}
