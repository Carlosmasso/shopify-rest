export default function ProductGrid({ children, columns = 4 }) {
  const grids = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  return <div className={`grid gap-8 ${grids[columns]}`}>{children}</div>;
}

// TODO REMOVE