import React from "react";

interface SeparatorProps {
  className?: string;
}

export function Separator({ className }: SeparatorProps) {
  return <hr className={`border-t border-gray-200 dark:border-gray-700 my-4 ${className}`} />;
}
