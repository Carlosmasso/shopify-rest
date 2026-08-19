import { Search } from "lucide-react";

export default function SearchButton() {
  return (
    <button
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        transition
        hover:bg-[var(--background-secondary)]
      "
      aria-label="Search"
    >
      <Search size={20} />
    </button>
  );
}