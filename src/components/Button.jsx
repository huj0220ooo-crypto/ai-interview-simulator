function Button({ children, onClick, variant = "primary", disabled = false }) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-colors";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };
  const disabledStyles = "opacity-50 cursor-not-allowed hover:bg-blue-600";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? disabledStyles : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
