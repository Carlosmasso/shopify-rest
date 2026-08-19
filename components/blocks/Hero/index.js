import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { typography } from "@/lib/design/tokens";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Blur de fondo */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--primary)] opacity-10 blur-[140px]" />

      <div className="grid items-center gap-20 lg:grid-cols-2 max-w-[1280px] mx-auto px-6 lg:px-10">
        <FadeIn delay={0.2}>
          <Badge>Designed for better rest</Badge>

          <h1 className={typography.hero}>
            Everything you need
            <br />
            to reset.
          </h1>

          <span className={typography.section}>
            Carefully selected products to help you disconnect, recover and
            recharge— whether you're travelling, working shifts or simply taking
            a well-earned break.
          </span>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button>Shop now</Button>
            <Button variant="secondary">Learn more</Button>
          </div>
        </FadeIn>

        <div className="relative hidden lg:block">
          <div className="aspect-[4/5] overflow-hidden rounded-[32px] bg-[var(--background-secondary)] shadow-[var(--shadow-md)]">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80"
              alt="Relax"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-6 shadow-[var(--shadow-md)]">
            <p className={typography.subtitle}>
              Trusted by travellers,
              <br />
              shift workers and everyday explorers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
