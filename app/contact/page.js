import Container from "@/components/layout/Container";
import PageHero from "@/components/blocks/PageHero";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the Get Reset team.",
};

const CONTACT_EMAIL = "hello@getreset.com";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you."
        description="Questions about an order, a product, or just want to say hi? Reach out and we'll get back to you as soon as we can."
      />

      <Container>
        <section className="mx-auto max-w-3xl py-24 text-center">
          <p className="text-lg leading-8 text-[var(--foreground-muted)]">
            The fastest way to reach us is by email at
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-2 block text-2xl font-semibold"
          >
            {CONTACT_EMAIL}
          </a>

          <a href={`mailto:${CONTACT_EMAIL}`}>
            <Button size="lg" className="mt-10">
              Send us an email
            </Button>
          </a>
        </section>
      </Container>
    </>
  );
}
