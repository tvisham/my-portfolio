import React from "react";

export function Button({ children, variant = "default", size, className, ...props }) {
  const base = "px-4 py-2 rounded-xl font-medium transition-colors";
  const variants = {
    default: "bg-indigo-500 text-white hover:bg-indigo-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
    ghost: "bg-transparent text-gray-800 dark:text-gray-200",
  };
  const sizes = {
    icon: "p-2",
    sm: "px-3 py-1 text-sm",
    default: "px-4 py-2",
  };

  return (
    <button className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className || ""}`} {...props}>
      {children}
    </button>
  );
}
