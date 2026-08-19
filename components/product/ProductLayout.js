import Container from "@/components/layout/Container";

export default function ProductLayout({ gallery, info }) {
  return (
    <Container>
      <section className="py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {gallery}
          {info}
        </div>
      </section>
    </Container>
  );
}
