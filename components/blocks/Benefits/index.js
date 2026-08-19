import Container from "@/components/layout/Container";
import { Plane, Moon, Sparkles } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const benefits = [
  {
    icon: Plane,
    title: "Travel better",
    description:
      "From long-haul flights to road trips, travel with comfort and arrive feeling refreshed.",
  },
  {
    icon: Moon,
    title: "Rest anywhere",
    description:
      "Products designed to help you disconnect wherever you are, whenever you need it.",
  },
  {
    icon: Sparkles,
    title: "Reset faster",
    description:
      "Recharge between meetings, shifts or adventures with essentials that fit your routine.",
  },
];

export default function Benefits() {
  return (
    <section className="py-28">
      <Container>
        <div className="mb-16 max-w-2xl">
          <span className="text-sm uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
            Why Get Reset
          </span>

          <h2 className="mt-4 text-4xl font-semibold leading-tight">
            Designed around moments
            <br />
            when you need to pause.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <FadeIn key={benefit.title} delay={index * 0.15}>
                <article className="group rounded-[28px] border border-[var(--border)] bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-md)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--background-secondary)] transition-colors duration-300 group-hover:bg-[var(--primary)]">
                    <Icon
                      size={26}
                      className="transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[var(--foreground-muted)]">
                    {benefit.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
