type ScoreBoardProps = {
  xWins: number;
  oWins: number;
  draws: number;
};

export default function ScoreBoard({ xWins, oWins, draws }: ScoreBoardProps) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
      <div className="rounded-2xl bg-sky-50 ring-1 ring-sky-100 p-3 text-center">
        <div className="text-sky-600 text-xs font-semibold uppercase tracking-wider">X wins</div>
        <div className="text-sky-700 text-3xl font-bold mt-1">{xWins}</div>
      </div>
      <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-100 p-3 text-center">
        <div className="text-slate-600 text-xs font-semibold uppercase tracking-wider">Draws</div>
        <div className="text-slate-700 text-3xl font-bold mt-1">{draws}</div>
      </div>
      <div className="rounded-2xl bg-rose-50 ring-1 ring-rose-100 p-3 text-center">
        <div className="text-rose-600 text-xs font-semibold uppercase tracking-wider">O wins</div>
        <div className="text-rose-700 text-3xl font-bold mt-1">{oWins}</div>
      </div>
    </div>
  );
}
