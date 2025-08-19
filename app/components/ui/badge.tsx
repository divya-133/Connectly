import React, { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "destructive";
  children: React.ReactNode;
}

export const Badge = ({ variant = "default", children, className, ...props }: BadgeProps) => {
  const baseClasses = "inline-flex items-center justify-center px-2 py-1 rounded text-xs font-semibold";
  const variantClasses =
    variant === "destructive"
      ? "bg-red-600 text-red-100"
      : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  return (
    <span className={`${baseClasses} ${variantClasses} ${className ?? ""}`} {...props}>
      {children}
    </span>
  );
};
