// Input.jsx
export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full bg-gray-100 text-center text-black border border-gray-700 rounded p-3 shadow-lg/40 shadow-gray-300 inset-shadow-sm inset-shadow-gray-800/50 ${className}`}
      {...props}
    />
  );
}