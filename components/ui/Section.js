import { spacing } from "@/lib/design/tokens";

export default function Section({
  children,
  background = "default",
  spacingSize = "lg",
  className = "",
}) {
  const backgrounds = {
    default: "bg-[var(--background)]",
    soft: "bg-[var(--background-secondary)]",
    white: "bg-white",
  };

  return (
    <section
      className={`
        relative
        overflow-hidden
        ${backgrounds[background]}
        ${spacing[spacingSize]}
        ${className}
      `}
    >
      {children}
    </section>
  );
}