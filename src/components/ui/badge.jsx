import React from "react";

export function Badge({ children, variant = "default", className, ...props }) {
  const base = "inline-block px-2 py-1 text-xs font-medium rounded-full";
  const variants = {
    default: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100",
    secondary: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    outline: "border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200",
  };

  return (
    <span className={`${base} ${variants[variant] || ""} ${className || ""}`} {...props}>
      {children}
    </span>
  );
}
