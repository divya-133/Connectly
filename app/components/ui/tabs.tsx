// components/ui/tabs.tsx

import React, { useState, ReactNode } from "react";

export function Tabs({
  children,
  defaultValue,
}: {
  children: ReactNode;
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue || "");
  return (
    <div>
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { value, setValue })
      )}
    </div>
  );
}

export function TabsList({ children }: { children: ReactNode }) {
  return <div className="flex space-x-2 border-b border-gray-300">{children}</div>;
}

export function TabsTrigger({
  value,
  setValue,
  children,
  tabValue,
}: {
  value: string;
  setValue: (val: string) => void;
  children: ReactNode;
  tabValue: string;
}) {
  const active = value === tabValue;
  return (
    <button
      onClick={() => setValue(tabValue)}
      className={`px-4 py-2 text-sm font-medium ${
        active ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  currentValue,
  children,
}: {
  value: string;
  currentValue: string;
  children: ReactNode;
}) {
  if (value !== currentValue) return null;
  return <div className="p-4">{children}</div>;
}



