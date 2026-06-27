export default function Card({ children, className }) {
  return (
    <div
      className={`min-h-screen bg-black text-white flex items-center justify-center px-4 ${className}`}
    >
      <div
        className={`w-full max-w-3xl rounded-[1rem] bg-black border border-gray-700 shadow-xl/30 shadow-gray-800  p-8 md:p-12 inset-shadow-sm inset-shadow-gray-500/50`}
      >
        {children}
      </div>
    </div>
  );
}
