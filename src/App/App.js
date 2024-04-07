import { useState } from "react";
import "./App.css";

function App() {
  const [moves, setMoves] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

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

    return (
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
    );
  };

  return (
    <div>
      <h1>Tic Tac Toe </h1>
      <Board currentMove={currentMove} currentMoveArr={currentMoveArr} />
    </div>
  );
}

export default App;
