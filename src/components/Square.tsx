import type { Cell } from '@/lib/ticTacToe';

type SquareProps = {
  value: Cell;
  highlighted: boolean;
  disabled: boolean;
  index: number;
  onClick: () => void;
};

export default function Square({ value, highlighted, disabled, index, onClick }: SquareProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        'aspect-square rounded-2xl flex items-center justify-center',
        'text-5xl sm:text-6xl font-black select-none',
        'transition-all duration-200 ring-1',
        highlighted
          ? 'bg-amber-200 ring-amber-400 animate-pulse'
          : 'bg-white ring-slate-200',
        value === 'X' ? 'text-sky-600' : '',
        value === 'O' ? 'text-rose-500' : '',
        !value && !disabled ? 'hover:bg-slate-50 hover:ring-slate-300 cursor-pointer' : '',
        disabled && !highlighted ? 'cursor-default' : '',
      ].join(' ')}
      aria-label={`Square ${index + 1}${value ? `, ${value}` : ''}`}
    >
      {value}
    </button>
  );
}
