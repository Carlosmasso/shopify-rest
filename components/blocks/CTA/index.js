import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <Section background="soft" spacingSize="xl">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm uppercase tracking-[0.25em] text-[var(--foreground-muted)]">
              Get Reset
            </span>

            <h2 className="mt-6 text-5xl font-semibold tracking-tight">
              Ready to reset?
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--foreground-muted)]">
              Discover carefully selected products designed to help you recover,
              recharge and rest better every day.
            </p>

            <div className="mt-12">
              <Button size="lg">
                Shop Collection
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}