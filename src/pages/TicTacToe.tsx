import { useMemo, useState } from 'react';
import { calculateWinner, isDraw, type Board, type Cell } from '@/lib/ticTacToe';
import Square from '@/components/Square';
import GameStatus from '@/components/GameStatus';
import ScoreBoard from '@/components/ScoreBoard';

type Score = { X: number; O: number; draws: number };

const EMPTY_BOARD: Board = Array(9).fill(null);

export default function TicTacToe() {
  const [board, setBoard] = useState<Board>(EMPTY_BOARD);
  const [xIsNext, setXIsNext] = useState(true);
  const [score, setScore] = useState<Score>({ X: 0, O: 0, draws: 0 });
  const [scoredThisRound, setScoredThisRound] = useState(false);

  const winResult = useMemo(() => calculateWinner(board), [board]);
  const draw = useMemo(() => isDraw(board), [board]);
  const gameOver = !!winResult || draw;

  const currentPlayer: Cell = xIsNext ? 'X' : 'O';

  function handleSquareClick(i: number) {
    if (board[i] || gameOver) return;
    const next = board.slice();
    next[i] = currentPlayer;
    setBoard(next);

    const result = calculateWinner(next);
    const nowDraw = !result && next.every((c) => c !== null);

    if (result && !scoredThisRound) {
      setScore((s) => ({ ...s, [result.winner]: s[result.winner] + 1 }));
      setScoredThisRound(true);
    } else if (nowDraw && !scoredThisRound) {
      setScore((s) => ({ ...s, draws: s.draws + 1 }));
      setScoredThisRound(true);
    }

    setXIsNext(!xIsNext);
  }

  function newRound() {
    setBoard(EMPTY_BOARD);
    setXIsNext(true);
    setScoredThisRound(false);
  }

  function resetScore() {
    setBoard(EMPTY_BOARD);
    setXIsNext(true);
    setScore({ X: 0, O: 0, draws: 0 });
    setScoredThisRound(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-50 to-rose-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-md rounded-3xl shadow-xl ring-1 ring-white/60 p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 mb-1">
          Tic Tac Toe
        </h1>
        <p className="text-center text-slate-500 text-sm mb-6">
          Two players. One grid. Best of infinity.
        </p>

        <GameStatus
          winner={winResult?.winner ?? null}
          draw={draw}
          currentPlayer={currentPlayer}
        />

        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
          {board.map((cell, i) => (
            <Square
              key={i}
              value={cell}
              index={i}
              highlighted={winResult?.line.includes(i) ?? false}
              disabled={!!cell || gameOver}
              onClick={() => handleSquareClick(i)}
            />
          ))}
        </div>

        <ScoreBoard xWins={score.X} oWins={score.O} draws={score.draws} />

        <div className="flex gap-3">
          <button
            onClick={newRound}
            className="flex-1 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 transition-colors"
          >
            New Round
          </button>
          <button
            onClick={resetScore}
            className="flex-1 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 ring-1 ring-slate-200 transition-colors"
          >
            Reset Score
          </button>
        </div>
      </div>
    </div>
  );
}
