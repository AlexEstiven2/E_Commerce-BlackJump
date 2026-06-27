export default function Card({ children, className = "" }) {
  return (
      <div
        className={`w-full max-w-3xl rounded-[1rem] bg-black border border-gray-700 shadow-xl/30 shadow-gray-800  p-8 md:p-12 inset-shadow-sm inset-shadow-gray-500/50 ${className}`}
      >
        {children}
      </div>
  );
}
