import Timer from "./Timer";
import Row from "./Row";
import { deepCloneBoard, checkWinner } from "../services/utils/connect4Utils";

const Board = ({
  gameState,
  dispatchGameState,
  setScorePlayer1,
  setScorePlayer2,
}) => {
  const play = (column) => {
    if (!gameState.gameOver) {
      let board = deepCloneBoard(gameState.board);
      for (let i = 6; i >= 0; i--) {
        if (!board[i][column]) {
          board[i][column] = gameState.currentPlayer;
          break;
        }
      }

      let result = checkWinner(board);
      if (result === gameState.player1) {
        dispatchGameState({
          type: "END_GAME",
          message: "Player 1 wins!",
          board: board,
        });
        setScorePlayer1((prevScore) => prevScore + 1);
      } else if (result === gameState.player2) {
        dispatchGameState({
          type: "END_GAME",
          message: "Player 2 wins!",
          board: board,
        });
        setScorePlayer2((prevScore) => prevScore + 1);
      } else if (result === "draw") {
        dispatchGameState({
          type: "END_GAME",
          message: "Draw!",
          board: board,
        });
      } else {
        const nextPlayer =
          gameState.currentPlayer === gameState.player1
            ? gameState.player2
            : gameState.player1;
        dispatchGameState({
          type: "TOGGLE_PLAYER",
          nextPlayer: nextPlayer,
          message: `Player ${nextPlayer}'s turn`,
          board: board,
        });
      }
    } else {
      dispatchGameState({
        type: "UPDATE_MESSAGE",
        message: "Game over. Please restart.",
      });
    }
  };

  return (
    <div className="board">
      {gameState.board.map((row, index) => {
        return <Row row={row} play={play} key={index} />;
      })}
      <Timer gameState={gameState} />
    </div>
  );
};

export default Board;
