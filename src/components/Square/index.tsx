interface SquareProps {
  className: any;
  value: string | null;
  onClick: () => void;
}

export default function Square({ value, onClick, className }: SquareProps) {
  return (
    <button
      className="w-[10vh] h-[10vh] xl:w-24 xl:h-24 mr-2 mb-2 text-3xl font-bold  "
      onClick={onClick}
    >
      <div className={`${value == "X" ? "text-red-700" : "text-green-500"}`}>{value}</div>
    </button>
  );
}
