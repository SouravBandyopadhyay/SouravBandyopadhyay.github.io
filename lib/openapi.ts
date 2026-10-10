import { getSiteUrl } from "@/lib/site";

export function getOpenApiDocument(baseUrl = getSiteUrl()) {
  return {
    openapi: "3.1.0",
    info: {
      title: "Sourav Bandyopadhyay portfolio API",
      version: "1.0.0",
      description:
        "Public read surfaces and the contact form for Sourav Bandyopadhyay's portfolio. No authentication. This is not the Vercel platform API.",
    },
    servers: [{ url: baseUrl }],
    paths: {
      "/": {
        get: {
          operationId: "getHomepage",
          summary: "Portfolio homepage",
          responses: {
            "200": {
              description: "HTML for browsers, or Markdown when Accept prefers text/markdown.",
              content: {
                "text/html": { schema: { type: "string" } },
                "text/markdown": { schema: { type: "string" } },
              },
            },
          },
        },
      },
      "/llms.txt": {
        get: {
          operationId: "getLlmsTxt",
          summary: "Agent instructions, including when to use this site",
          responses: {
            "200": {
              description: "Plain-text llms.txt",
              content: { "text/plain": { schema: { type: "string" } } },
            },
          },
        },
      },
      "/docs": {
        get: {
          operationId: "getDeveloperResources",
          summary: "Sourav Bandyopadhyay developer resources",
          responses: {
            "200": {
              description: "Developer resources page",
              content: {
                "text/html": { schema: { type: "string" } },
                "text/markdown": { schema: { type: "string" } },
              },
            },
          },
        },
      },
      "/mcp": {
        post: {
          operationId: "postMcp",
          summary: "Stateless Streamable HTTP MCP endpoint",
          description:
            "Send a JSON-RPC initialize, tools/list, or tools/call message. Accept must include application/json and text/event-stream. Tools are read-only: get_profile, list_pages, get_page.",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { type: "object" },
              },
            },
          },
          responses: {
            "200": { description: "JSON-RPC result" },
            "202": { description: "Accepted notification" },
            "400": { description: "Accept header or protocol version rejected" },
            "405": { description: "GET and DELETE are not used on this stateless server" },
          },
        },
      },
      "/api/send": {
        post: {
          operationId: "submitContact",
          summary: "Submit the public contact form",
          description:
            "Sends name, email, and message through Resend. The recipient is the email address in the body. No authentication.",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["name", "email", "message"],
                  properties: {
                    name: { type: "string" },
                    email: { type: "string", format: "email" },
                    message: { type: "string" },
                  },
                  additionalProperties: false,
                },
              },
            },
          },
          responses: {
            "200": { description: "Resend accepted the message" },
            "500": { description: "Resend or the server rejected the message" },
          },
        },
      },
    },
  };
}

export function getApiCatalog(baseUrl = getSiteUrl()) {
  return {
    linkset: [
      {
        anchor: `${baseUrl}/`,
        "service-desc": [
          {
            href: `${baseUrl}/openapi.json`,
            type: "application/openapi+json",
          },
        ],
        "service-doc": [
          {
            href: `${baseUrl}/docs`,
            type: "text/html",
          },
        ],
      },
    ],
  };
}
