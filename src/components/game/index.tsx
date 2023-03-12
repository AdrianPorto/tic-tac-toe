import { stat } from "fs";
import { useEffect, useState } from "react";
import Score from "../score";
import Square from "../Square";

interface Props {
  setWins: (value: number) => void;
  setLosers: (value: number) => void;
  user: any;
  wins: number;
  losers: number;
}

const BOARD_SIZE = 3;

function calculateWinner(squares: string[]): string | null {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Game: React.FC<Props> = ({ user, losers, setLosers, setWins, wins }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i: number) {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  function renderSquare(i: number) {
    return (
      <Square className="" value={squares[i]} onClick={() => handleClick(i)} />
    );
  }

  let winner = calculateWinner(squares);
  let status: string;

  if (winner == "X") {
    winner = "Adrian";
  }

  if (winner) {
    status = ` Vencedor: ${winner}`;
  } else if (squares.every((square) => square !== null)) {
    status = "Empate";
  }
  if ((status = "X")) {
    status = "Adrian";
  }

  function handleRestart() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    if (winner == "Adrian") {
      setWins(wins + 1);
    } else if (winner == "O") {
      setLosers(losers + 1);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center  w-screen ">
      <div className="mb-4 font-bold text-2xl  text-white">
        {winner ? (
          <div className="text-3xl flex-row flex">
            Vencedor:
            <div
              className={`ml-3 text-4xl -my-0 ${
                winner == "O" ? "text-green-500" : "text-red-700"
              } `}
            >
              {winner}
            </div>
          </div>
        ) : status == "Empate" ? (
          status
        ) : (
          <div className=" flex flex-row">
            {status}
            <div
              className={`flex  flex-row ml-4   -my-1 text-4xl  ${
                xIsNext ? "text-red-700" : "text-green-500"
              }`}
            >
              {xIsNext ? "X" : "O"}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-row ">
          <div className="xl:w-[305px] xl:h-2 xl:mt-24  w-[32.9vh]  h-2 mt-[10vh] absolute bg-white"></div>
          <div className="xl:w-[305px] xl:h-2 xl:mt-[200px] w-[32.9vh]  h-2 mt-[21.5vh]  absolute bg-white"></div>
          <div className="xl:w-2 xl:h-[305px] xl:ml-[96px] w-2  h-[33.4vh] ml-[10vh] absolute bg-white"></div>
          <div className="xl:w-2 xl:h-[305px] xl:ml-[200px]  w-2  h-[33.4vh] ml-[21.6vh] absolute bg-white"></div>
          <div className={``}>{renderSquare(0)}</div>
          <div className="">{renderSquare(1)}</div>
          <div className="">{renderSquare(2)}</div>
        </div>
        <div className="flex">
          <div className="">{renderSquare(3)}</div>
          <div className="">{renderSquare(4)}</div>
          <div className="">{renderSquare(5)}</div>
        </div>
        <div className="flex">
          <div className="">{renderSquare(6)}</div>
          <div className="">{renderSquare(7)}</div>
          <div className="">{renderSquare(8)}</div>
        </div>
        <div className="flex flex-1 justify-center mt-10">
          <button
            className="px-4 py-2  mt-4 font-bold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Game;
