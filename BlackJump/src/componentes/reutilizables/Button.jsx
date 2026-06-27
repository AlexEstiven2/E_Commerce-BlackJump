// Button.jsx
export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const styles = {
    primary: "w-full bg-black text-white border border-gray-700",
    light: "bg-white text-gray-700 border border-gray-800",
    ghost: "bg-black text-white border border-gray-700",
  };

  return (
    <button
      className={`rounded p-3 shadow-lg/50 shadow-gray-800 inset-shadow-sm inset-shadow-gray-500/50 transition-all duration-300 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
