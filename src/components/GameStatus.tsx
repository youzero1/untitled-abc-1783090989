import type { Cell } from '@/lib/ticTacToe';

type GameStatusProps = {
  winner: 'X' | 'O' | null;
  draw: boolean;
  currentPlayer: Cell;
};

export default function GameStatus({ winner, draw, currentPlayer }: GameStatusProps) {
  const text = winner
    ? `${winner} wins!`
    : draw
      ? "It's a draw"
      : `Your turn: ${currentPlayer}`;

  const color = winner
    ? winner === 'X'
      ? 'text-sky-600'
      : 'text-rose-600'
    : draw
      ? 'text-slate-600'
      : currentPlayer === 'X'
        ? 'text-sky-600'
        : 'text-rose-600';

  return (
    <div className={`text-center text-xl sm:text-2xl font-semibold mb-5 ${color}`}>
      {text}
    </div>
  );
}
