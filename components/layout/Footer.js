import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-16">
      <Container>
        <p className="text-sm text-[var(--foreground-muted)]">
          © {new Date().getFullYear()} Get Reset.
          All rights reserved.
        </p>
      </Container>
    </footer>
  );
}