// app/components/ui/card.tsx
import React, { HTMLAttributes } from "react";

export const Card = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-4 ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`pt-2 pb-4 px-2 ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`mb-4 ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3 className={`text-lg font-semibold text-gray-900 dark:text-gray-100 ${className ?? ""}`} {...props}>
      {children}
    </h3>
  );
};

export const CardDescription = ({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={`text-sm text-gray-600 dark:text-gray-400 ${className ?? ""}`} {...props}>
      {children}
    </p>
  );
};
