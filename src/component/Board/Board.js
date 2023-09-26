import React, { useState } from "react";
import Square from "../Square/Square";
import "./board.css";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xSquare, setXSquare] = useState(true);
  const handleClick = (value) => {
    if (squares[value]) {
      return;
    } else {
      let squaresCopied = squares.slice();
      squaresCopied[value] = xSquare ? "X" : "O";
      setSquares(squaresCopied);
      setXSquare(!xSquare);
    }
    console.log("handleClicked", value);
  };
  return (
    <>
      <div className="first-row">
        <Square value={squares[0]} squareClick={() => handleClick(0)} />
        <Square value={squares[1]} squareClick={() => handleClick(1)} />
        <Square value={squares[2]} squareClick={() => handleClick(2)} />
      </div>
      <div className="first-row">
        <Square value={squares[3]} squareClick={() => handleClick(3)} />
        <Square value={squares[4]} squareClick={() => handleClick(4)} />
        <Square value={squares[5]} squareClick={() => handleClick(5)} />
      </div>

      <div className="first-row">
        <Square value={squares[6]} squareClick={() => handleClick(6)} />
        <Square value={squares[7]} squareClick={() => handleClick(7)} />
        <Square value={squares[8]} squareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
