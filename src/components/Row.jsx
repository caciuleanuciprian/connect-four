import Cell from "./Cell";
const Row = ({ row, play }) => {
  return (
    <div className="row">
      {row.map((cell, index) => {
        return (
          <Cell value={cell} play={play} columnIndex={index} key={index} />
        );
      })}
    </div>
  );
};

export default Row;
