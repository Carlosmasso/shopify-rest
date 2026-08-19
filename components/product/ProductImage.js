export default function ProductImage({ image, alt, className = "" }) {
  return (
    <div
      className={`
        overflow-hidden
        rounded-[32px]
        bg-white
        ${className}
      `}
    >
      <img
        src={image}
        alt={alt}
        className="
    aspect-square
    w-full
    object-cover
    transition-transform
    duration-700
    hover:scale-105
    lg:aspect-[4/5]
  "
      />
    </div>
  );
}
