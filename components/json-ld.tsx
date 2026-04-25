type JsonLdGraph = Record<string, unknown> | Record<string, unknown>[];

function safeJsonLdStringify(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: { data: JsonLdGraph }) {
  const graph = Array.isArray(data) ? data : [data];
  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: safeJsonLdStringify(payload),
      }}
    />
  );
}
