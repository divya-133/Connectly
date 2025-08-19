import React, { HTMLAttributes } from "react";

interface ScrollAreaProps extends HTMLAttributes<HTMLDivElement> {}

export const ScrollArea = ({ children, className, ...props }: ScrollAreaProps) => {
  return (
    <div
      className={`overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 ${className ?? ""}`}
      {...props}
    >
      {children}
    </div>
  );
};
