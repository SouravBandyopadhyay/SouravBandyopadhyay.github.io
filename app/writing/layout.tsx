import Link from "next/link";

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main id="main-content" className="min-h-screen pb-28 pt-10">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <Link
          href="/"
          className="mb-10 inline-block text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          prefetch={false}
        >
          ← Back to portfolio
        </Link>
        <article className="space-y-6 text-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground">
          {children}
        </article>
      </div>
    </main>
  );
}
