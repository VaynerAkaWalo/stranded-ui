import type { ReactNode } from "react";

const Columns: number = 12;
const Rows: number = 8;

interface cellProps {
  column: number;
  row: number;
}

function LocationCell({ column, row }: cellProps) {
  return (
    <div className="aspect-square border-2 text-center hover:bg-red-400">
      <p>{column}</p>
      <p>{row}</p>
    </div>
  );
}

export default function LocationMap() {
  const cells: ReactNode[] = [];
  for (let col = 0; col < Columns; col++) {
    for (let row = 0; row < Rows; row++) {
      cells.push(<LocationCell column={col} row={row} />);
    }
  }

  return (
    <div className={`w-1/2 grid gap-2 grid-cols-${Columns} grid-rows-${Rows}`}>
      {cells}
    </div>
  );
}
