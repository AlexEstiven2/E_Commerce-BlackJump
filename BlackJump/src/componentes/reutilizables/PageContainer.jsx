export default function PageContainer({ children, className = "" }) {
  return (
    <div
      className={`min-h-screen bg-black text-white flex items-center justify-center px-4 ${className}`}
    >
      {children}
    </div>
  );
}