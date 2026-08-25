"use client";

export default function ProductVariantSelector({
  options,
  selectedVariant,
  onChange,
  variants,
}) {
  function handleOptionChange(optionName, value) {
    // Construimos las opciones actuales
    const currentOptions = {
      ...selectedVariant.options,
      [optionName]: value,
    };

    // Buscamos la variante que coincide exactamente
    const variant = variants.find((variant) =>
      Object.entries(currentOptions).every(
        ([name, optionValue]) => variant.options[name] === optionValue,
      ),
    );

    if (variant) {
      onChange(variant);
    }
  }

  return (
    <div className="mt-10 space-y-8">
      {Object.entries(options).map(([optionName, values]) => (
        <div key={optionName}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
            {optionName}
          </h3>

          <div className="flex flex-wrap gap-3">
            {values.map((value) => {
              const active = selectedVariant.options[optionName] === value;

              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleOptionChange(optionName, value)}
                  className={`
                    rounded-full
                    border
                    px-5
                    py-2
                    text-sm
                    transition

                    ${
                      active
                        ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                        : "border-[var(--border)] hover:border-[var(--primary)]"
                    }
                  `}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
