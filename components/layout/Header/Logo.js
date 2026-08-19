import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="select-none text-lg font-semibold uppercase tracking-[0.3em] transition-opacity hover:opacity-70"
    >
      GET RESET
    </Link>
  );
}