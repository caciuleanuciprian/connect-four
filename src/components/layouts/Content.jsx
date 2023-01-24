import Player from "./Player";
import Board from "./Board";

const Content = ({
  gameState,
  dispatchGameState,
  scorePlayer1,
  scorePlayer2,
  setScorePlayer1,
  setScorePlayer2,
}) => {
  return (
    <div className="content">
      <Player
        name="Player 1"
        color="red"
        gameState={gameState}
        playerNumber="1"
        score={scorePlayer1}
      />
      <Board
        gameState={gameState}
        dispatchGameState={dispatchGameState}
        setScorePlayer1={setScorePlayer1}
        setScorePlayer2={setScorePlayer2}
      />
      <Player
        name="Player 2"
        color="yellow"
        gameState={gameState}
        playerNumber="2"
        score={scorePlayer2}
      />
    </div>
  );
};

export default Content;
