import { useEffect, useState } from "react";

const Timer = ({ gameState }) => {
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    if (gameState.gameOver) {
      return;
    }
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (!counter) {
      if (gameState.currentPlayer === 1) {
        gameState.currentPlayer = 2;
        setCounter(10);
      } else {
        gameState.currentPlayer = 1;
        setCounter(10);
      }
    }
    return () => clearInterval(timer);
  }, [counter, gameState]);

  return (
    <div className="timer">
      <p className="timer-player-name">
        Player {gameState.currentPlayer}'s turn
      </p>
      <p className="timer-seconds">{counter}s</p>
      <p>{gameState.text}</p>
    </div>
  );
};
export default Timer;
