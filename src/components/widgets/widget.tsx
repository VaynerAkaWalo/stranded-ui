import type { ReactNode } from "react";

interface WidgetProps {
  children: ReactNode;
  header: string;
  height?: number;
  width?: number;
}

export default function Widget({
  children,
  header,
  height = 1,
  width = 1,
}: WidgetProps) {
  return (
    <div
      className={`border-2 rounded-2xl row-span-${height} col-span-${width}`}
    >
      <div className="border-b-2 py-2">
        <p className="text-center font-bold">{header}</p>
      </div>
      {children}
    </div>
  );
}
