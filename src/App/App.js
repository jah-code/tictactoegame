import { useState } from "react";
import "./App.css";

function App() {
  const [moves, setMoves] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [status, setStatus] = useState("");

  const currentMoveArr = moves[currentMove];

  const Square = (props) => {
    const { val, onClickPlayHandler } = props;
    return (
      <button className="square" onClick={onClickPlayHandler}>
        <span className="value">{val}</span>
      </button>
    );
  };

  const Board = (props) => {
    const { currentMove, currentMoveArr } = props;

    const onClickPlayHandler = (i) => {
      const newMoveArr = currentMoveArr;
      if (currentMove % 2 === 0) {
        newMoveArr[i] = "X";
      } else {
        newMoveArr[i] = "O";
      }

      const newMoves = [...moves, newMoveArr];
      setMoves(newMoves);
      setCurrentMove(newMoves.length - 1);
    };

    const winner = winnerCombinations(currentMoveArr);
    if (winner) {
      setStatus("Winner is " + winner);
    } else {
      setStatus("Next player is " + (currentMove % 2 === 0 ? "X" : "O"));
    }

    return (
      <div>
        <div className="board">
          {currentMoveArr.map((e, i) => {
            return (
              <Square
                key={i}
                val={e}
                onClickPlayHandler={() => onClickPlayHandler(i)}
              />
            );
          })}
        </div>
        <h4 className="status">{currentMove > 0 && status}</h4>
      </div>
    );
  };

  return (
    <div>
      <h1 className="title">Tic Tac Toe </h1>
      <Board currentMove={currentMove} currentMoveArr={currentMoveArr} />
    </div>
  );
}

function winnerCombinations(currentMoveArr) {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let x = 0; x < combinations.length; x++) {
    const [a, b, c] = combinations[x];
    if (
      currentMoveArr[a] &&
      currentMoveArr[a] === currentMoveArr[b] &&
      currentMoveArr[a] === currentMoveArr[c]
    ) {
      return currentMoveArr[a];
    }
  }
  return null;
}

export default App;
