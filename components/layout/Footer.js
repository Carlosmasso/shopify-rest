import Link from "next/link";

import Container from "./Container";
import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-[var(--foreground-muted)]">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-[var(--foreground-muted)]">
              Legal
            </h3>

            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-sm text-[var(--foreground-muted)]">
          © {new Date().getFullYear()} Get Reset. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
