import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({
    blue: 0,
    red: 0,
    yellow: 0,
    green: 0,
  });

  let updateBlue = () => {
    setMoves((preMoves) => {
      return { ...preMoves, blue: preMoves.blue + 1 };
    });
  };

  let updateyellow = () => {
    setMoves((preMoves) => {
      return { ...preMoves, yellow: preMoves.yellow + 1 };
    });
  };

  let updategreen = () => {
    setMoves((preMoves) => {
      return { ...preMoves, green: preMoves.green + 1 };
    });
  };

  let updatered = () => {
    setMoves((preMoves) => {
      return { ...preMoves, red: preMoves.red + 1 };
    });
  };

  return (
    <div>
      <p>Game Begins!</p>

      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={updateBlue}
        >
          +1
        </button>

        <p>Yellow moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateyellow}
        >
          +1
        </button>

        <p>Green moves = {moves.green}</p>
        <button
          style={{ backgroundColor: "green" }}
          onClick={updategreen}
        >
          +1
        </button>

        <p>Red moves = {moves.red}</p>
        <button
          style={{ backgroundColor: "red" }}
          onClick={updatered}
        >
          +1
        </button>
      </div>
    </div>
  );
}
