"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { LoaderCircle } from "lucide-react";

export default function SearchButton() {
  const router = useRouter();
  const ref = useRef(null);

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open || query.trim().length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);
    const timeout = setTimeout(async () => {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(query)}`,
      );
      const data = await response.json();

      setResults(data);
      setLoading(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, [query, open]);

  useEffect(() => {
    function handleClick(event) {
      if (!ref.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <form
      ref={ref}
      onSubmit={(e) => {
        e.preventDefault();
        if (!query.trim()) return;
        router.push(`/search?q=${encodeURIComponent(query)}`);
        setOpen(false);
      }}
      className="relative flex items-center"
    >
      {open && (
        <div className="relative mr-2">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="
              h-11
              w-56
              rounded-full
              border
              border-[var(--border)]
              bg-white
              pl-4
              pr-10
              text-sm
              outline-none
            "
          />

          {loading && (
            <LoaderCircle
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 animate-spin text-[var(--primary)]"
            />
          )}
        </div>
      )}

      <button
        type={open ? "submit" : "button"}
        onClick={() => {
          if (!open) {
            setOpen(true);
          }
        }}
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

      {open && results?.length > 0 && (
        <div
          className="
            absolute
            right-0
            top-14
            w-96
            overflow-hidden
            rounded-2xl
            border
            border-[var(--border)]
            bg-white
            shadow-[0_20px_60px_rgba(0,0,0,.08)]
            animate-in
            fade-in
            zoom-in-95
            duration-200
          "
        >
          {results.map((product) => (
            <Link
              key={product.id}
              onClick={() => setOpen(false)}
              href={`/products/${product.handle}`}
              className="flex items-center gap-3 p-4 transition hover:bg-[var(--background-secondary)]"
            >
              <Image
                src={product.image.url}
                alt={product.image.alt}
                width={56}
                height={56}
                className="rounded-lg object-cover"
              />

              <div>
                <p className="font-medium">{product.title}</p>

                <p className="text-sm text-[var(--foreground-muted)]">
                  €{product.price.amount}
                </p>
              </div>
            </Link>
          ))}

          <Link
            onClick={() => setOpen(false)}
            href={`/search?q=${encodeURIComponent(query)}`}
            className="
              flex
              items-center
              justify-center
              gap-2
              border-t
              border-[var(--border)]
              py-4
              text-sm
              font-medium
              transition
              hover:bg-[var(--background-secondary)]
            "
          >
            View all results →
          </Link>
        </div>
      )}
    </form>
  );
}
