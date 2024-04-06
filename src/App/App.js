import "./App.css";

function App() {
  const Square = (props) => {
    return <button className="square">X</button>;
  };

  return (
    <div>
      <h1>Tic Tac Toe </h1>
      <div className="board">
        {Array(9)
          .fill(null)
          .map((e, i) => {
            return <Square key={i} />;
          })}
      </div>
    </div>
  );
}

export default App;
