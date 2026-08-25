export default function ProductImage({ image, alt, className = "" }) {
  return (
    <div
      className={`
        aspect-square
        overflow-hidden
        rounded-[32px]
        bg-white
        lg:aspect-[4/5]
        ${className}
      `}
    >
      <img
        src={image}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}
