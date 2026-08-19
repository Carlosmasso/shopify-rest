export default function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
      {children}
    </div>
  );
}