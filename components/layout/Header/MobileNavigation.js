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

export default function MobileNavigation() {
  return (
    <nav className="mt-12 flex flex-col gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="
            text-3xl
            font-medium
            tracking-tight
            transition
            hover:text-[var(--primary)]
          "
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
