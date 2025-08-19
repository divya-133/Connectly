import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon"; // Added "icon" size
  children: ReactNode;
};

export function Button({
  variant = "default",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles: Record<string, string> = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  };

  const sizeStyles: Record<string, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    icon: "p-2 w-9 h-9", // Square padding for icon only buttons
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
