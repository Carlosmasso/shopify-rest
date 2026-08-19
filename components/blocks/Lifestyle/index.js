import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import ImageBanner from "@/components/ui/ImageBanner";

export default function Lifestyle() {
  return (
    <Section>
      <Container>
        <ImageBanner
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1800&q=80"
          subtitle="Get Reset"
          title="Rest isn't a luxury."
        />
      </Container>
    </Section>
  );
}