import Timer from "./Timer";
import Cell from "./Cell";

const Board = () => {
  const cells = new Array(7)
    .fill(0)
    .map((row) =>
      new Array(6)
        .fill(0)
        .map((cell, index) => (
          <Cell value={cell} onClick={void 0} key={index} />
        ))
    );

  console.log(cells);
  return (
    <div className="board">
      {cells}
      <Timer turn="1" />
    </div>
  );
};

export default Board;
