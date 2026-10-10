import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen bg-white pb-28">
      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="section-shell max-w-3xl space-y-6">
          <p className="eyebrow">404</p>
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-black sm:text-5xl">
            Page not found
          </h1>
          <p className="text-lg leading-relaxed text-black/75">
            This path is not published on Sourav Bandyopadhyay&apos;s portfolio. The server did not find a page for the URL you requested.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-lg text-black/75">
            <li>
              <Link href="/llms.txt" className="underline-offset-4 hover:underline">
                llms.txt
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="underline-offset-4 hover:underline">
                Sitemap
              </Link>
            </li>
            <li>
              <Link href="/docs" className="underline-offset-4 hover:underline">
                Sourav Bandyopadhyay developer resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
