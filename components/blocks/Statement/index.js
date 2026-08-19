import Container from "@/components/layout/Container";
import FadeIn from "@/components/animations/FadeIn";
import { typography } from "@/lib/design/tokens";
import Section from "@/components/ui/Section";
import Blob from "@/components/ui/Blob";

export default function Statement() {
  return (
    <Section spacingSize="xl">
      <Blob size={550} right="-200px" top="-120px" />

      <Container>
        <FadeIn>
          <div className="max-w-5xl">
            <span className="text-sm uppercase tracking-[0.25em] text-[var(--foreground-muted)]">
              Our philosophy
            </span>

            <h2 className={"mt-8 leading-[1.05] tracking-tight " + typography.statement}>
              Rest isn't something
              <br />
              you earn.
              <br />
              <span className="text-[var(--primary)]">
                It's something you need.
              </span>
            </h2>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
