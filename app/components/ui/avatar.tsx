// app/components/ui/avatar.tsx
import React, { ReactNode } from "react";

interface AvatarProps {
  className?: string;
  children?: ReactNode;
}

export const Avatar = ({ className, children }: AvatarProps) => {
  return (
    <div className={`inline-flex items-center justify-center rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 ${className}`}>
      {children}
    </div>
  );
};

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const AvatarImage = (props: AvatarImageProps) => {
  return <img className="w-full h-full object-cover" {...props} />;
};

interface AvatarFallbackProps {
  children: ReactNode;
  className?: string;
}

export const AvatarFallback = ({ children, className }: AvatarFallbackProps) => {
  return (
    <div className={`flex items-center justify-center w-full h-full bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xl font-semibold ${className}`}>
      {children}
    </div>
  );
};
