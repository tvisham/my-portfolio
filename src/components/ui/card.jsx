import React from "react";

export function Card({ children, className }) {
  return <div className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 ${className}`}>{children}</div>;
}

export function CardHeader({ children, className }) {
  return <div className={`mb-2 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className }) {
  return <p className={`text-sm text-slate-600 dark:text-slate-300 ${className}`}>{children}</p>;
}

export function CardContent({ children, className }) {
  return <div className={`${className}`}>{children}</div>;
}
