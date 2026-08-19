import Link from "next/link";

const links = [
  {
    href: "/collections",
    label: "Shop",
  },
  {
    href: "/about",
    label: "About",
  },
];

export default function Navigation() {
  return (
    <nav className="hidden items-center gap-10 md:flex">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="relative text-sm transition-colors hover:text-[var(--primary)]"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
