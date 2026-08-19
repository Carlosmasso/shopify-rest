import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";
import Section from "@/components/ui/Section";
import Blob from "@/components/ui/Blob";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <Section spacingSize="lg">
      <Blob top="-180px" right="-120px" size={500} />
      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            {eyebrow && (
              <span className="text-sm uppercase tracking-[0.25em] text-[var(--foreground-muted)]">
                {eyebrow}
              </span>
            )}

            <h1 className="mt-4 text-5xl font-semibold tracking-tight lg:text-6xl">
              {title}
            </h1>

            {description && (
              <p className="mt-6 text-lg leading-8 text-[var(--foreground-muted)]">
                {description}
              </p>
            )}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
