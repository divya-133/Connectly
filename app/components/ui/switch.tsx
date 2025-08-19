// app/components/ui/switch.tsx
import React from "react";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

export function Switch({ checked, onCheckedChange, className, ...props }: SwitchProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedChange?.(e.target.checked);
    if (props.onChange) props.onChange(e);
  };

  return (
    <label className={`relative inline-flex items-center cursor-pointer ${className ?? ""}`}>
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={handleChange}
        {...props}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:bg-blue-600 transition" />
      <div className="absolute left-1 top-1 bg-white border border-gray-300 rounded-full h-4 w-4 peer-checked:translate-x-5 peer-checked:border-blue-600 transition" />
    </label>
  );
}

