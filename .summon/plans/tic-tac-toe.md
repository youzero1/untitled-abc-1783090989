---
status: building
title: Tic Tac Toe Game
---

1. Create the main page at `/app/src/pages/TicTacToe.tsx` that holds all game state and renders the full game screen.
   - Tracks the 9 board squares, whose turn it is (X or O), the winner, and a running score for X wins, O wins, and draws.
   - Detects a win across all 8 winning lines and detects a draw when the board is full.
   - Highlights the 3 winning squares when someone wins.
   - Provides a "New Round" button that clears the board but keeps the score, and a "Reset Score" button that clears everything.
   - Expected outcome: a self-contained, playable Tic Tac Toe screen.

2. Create a reusable square component at `/app/src/components/Square.tsx`.
   - Accepts the value ("X", "O", or empty), a highlighted flag, and a click handler.
   - Shows X in one color, O in another color, empty when unplayed, and a distinct background when part of the winning line.
   - Disables interaction when already filled or when the game is over.
   - Expected outcome: a clean, tappable cell used 9 times to form the board.

3. Create a status banner component at `/app/src/components/GameStatus.tsx`.
   - Shows "Your turn: X" / "Your turn: O" during play, "X wins!" or "O wins!" on a win, and "It's a draw" when tied.
   - Expected outcome: clear, at-a-glance feedback above the board.

4. Create a scoreboard component at `/app/src/components/ScoreBoard.tsx`.
   - Displays three tiles side by side: X wins, Draws, O wins, each with a large number.
   - Expected outcome: persistent score display across rounds.

5. Add small helper logic at `/app/src/lib/ticTacToe.ts`.
   - Exports a function that takes the board and returns the winner plus the winning line indices, or null.
   - Exports the list of 8 winning line combinations.
   - Expected outcome: game rules kept separate from UI code.

6. Update `/app/src/App.tsx` to render the Tic Tac Toe page as the app's main screen.
   - Expected outcome: opening the app immediately shows the game.

7. Style the whole experience with Tailwind for a polished look.
   - Centered layout on a soft gradient background, rounded card container, large 3×3 grid with clear gaps, big bold X/O glyphs, subtle hover state on empty squares, animated highlight on the winning line, and responsive sizing so it works on phone and desktop.
   - Expected outcome: a modern, friendly-looking game screen.

8. Confirm `/app/src/styles/global.css` starts with the Tailwind import and is loaded from `/app/src/main.tsx` (no changes expected unless missing).
   - Expected outcome: styles apply correctly across the game.
