import FadeIn from "@/components/animations/FadeIn";

export default function ImageBanner({
  image,
  title,
  subtitle,
  height = "h-[650px]",
}) {
  return (
    <FadeIn>
      <div
        className={`relative overflow-hidden rounded-[40px] ${height}`}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-xl px-16">
            <p className="text-sm uppercase tracking-[0.25em] text-white/70">
              {subtitle}
            </p>

            <h2 className="mt-6 text-5xl font-semibold leading-tight text-white">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}