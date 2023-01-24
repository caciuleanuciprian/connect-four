const Cell = ({ value, play, columnIndex }) => {
  let color = "";

  if (value === 1) {
    color = "red";
  } else if (value === 2) {
    color = "yellow";
  }

  return (
    <div
      className={`cell cell--${color}`}
      onClick={() => play(columnIndex)}
    ></div>
  );
};

export default Cell;
