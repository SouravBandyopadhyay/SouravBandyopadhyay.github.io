import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/writing", label: "Writing" },
  { href: "/docs", label: "Developer resources" },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-black/10 bg-white py-8">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-black/70">
          &copy; {new Date().getFullYear()} Sourav Bandyopadhyay. All rights reserved.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-4 text-sm text-black/70">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline-offset-4 hover:underline"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
