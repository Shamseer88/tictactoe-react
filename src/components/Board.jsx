import React, { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinners(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else status = "Next Player: " + (xIsNext ? "X" : "0");
  function handleClick(i) {
    if (squares[i] || calculateWinners(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
    if (xIsNext) nextSquares[i] = "X";
    else nextSquares[i] = "0";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function calculateWinners(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} setSquareValue={() => handleClick(0)} />
        <Square value={squares[1]} setSquareValue={() => handleClick(1)} />
        <Square value={squares[2]} setSquareValue={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} setSquareValue={() => handleClick(3)} />
        <Square value={squares[4]} setSquareValue={() => handleClick(4)} />
        <Square value={squares[5]} setSquareValue={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} setSquareValue={() => handleClick(6)} />
        <Square value={squares[7]} setSquareValue={() => handleClick(7)} />
        <Square value={squares[8]} setSquareValue={() => handleClick(8)} />
      </div>
    </>
  );
}
