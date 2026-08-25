import Container from "@/components/layout/Container";
import PageHero from "@/components/blocks/PageHero";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Learn more about Get Reset and our mission to create products that help you rest, recover and recharge.",
};

const values = [
  {
    title: "Designed with purpose",
    description:
      "Every product is created to solve a real everyday problem with simplicity and intention.",
  },
  {
    title: "Quality first",
    description:
      "We carefully select materials that feel good, last longer and improve your daily routine.",
  },
  {
    title: "Less, but better",
    description:
      "We believe in owning fewer products that genuinely make a difference.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Helping you slow down and reset."
        description="Get Reset creates thoughtful wellness products designed to improve everyday moments through better rest, comfort and simplicity."
      />

      <Container>
        <section className="mx-auto max-w-3xl py-24">
          <h2 className="text-3xl font-semibold">Our mission</h2>

          <p className="mt-8 leading-8 text-[var(--foreground-muted)]">
            Modern life moves fast. We spend our days connected, distracted and
            constantly switching between tasks. Get Reset exists to create small
            moments of calm through products that encourage rest, recovery and
            better habits.
          </p>

          <p className="mt-6 leading-8 text-[var(--foreground-muted)]">
            From better sleep to mindful routines, every detail is designed to
            feel natural, timeless and easy to use.
          </p>
        </section>

        <section className="grid gap-10 py-10 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-white p-8"
            >
              <h3 className="text-xl font-semibold">{value.title}</h3>

              <p className="mt-4 leading-7 text-[var(--foreground-muted)]">
                {value.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-3xl py-24 text-center">
          <h2 className="text-4xl font-semibold">
            Built for everyday wellbeing.
          </h2>

          <p className="mt-6 leading-8 text-[var(--foreground-muted)]">
            We believe wellness shouldn&apos;t feel complicated. The best products
            quietly become part of your daily routine and help you feel better
            without demanding attention.
          </p>

          <Link href="/collections">
            <Button size="lg" className="mt-10">
              Explore the collection
            </Button>
          </Link>
        </section>
      </Container>
    </>
  );
}
