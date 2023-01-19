import Player from "./Player";
import Board from "./Board";

const Content = () => {
  return (
    <div className="content">
      <Player name="Player 1" color="red" score="999" />
      <Board />
      <Player name="Player 2" color="yellow" score="0" />
    </div>
  );
};

export default Content;
