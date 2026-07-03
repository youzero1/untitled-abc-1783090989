export type Cell = 'X' | 'O' | null;
export type Board = Cell[];

export const WINNING_LINES: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export type WinResult = {
  winner: 'X' | 'O';
  line: number[];
} | null;

export function calculateWinner(board: Board): WinResult {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    const v = board[a];
    if (v && v === board[b] && v === board[c]) {
      return { winner: v, line };
    }
  }
  return null;
}

export function isDraw(board: Board): boolean {
  return board.every((c) => c !== null) && !calculateWinner(board);
}
