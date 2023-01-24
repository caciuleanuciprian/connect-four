import "./App.css";
import Navigation from "./components/layouts/Navigation";
import Content from "./components/layouts/Content";
import { useGameReducer } from "./hooks/useGameReducer";
import { useState } from "react";

function App() {
  const [gameState, dispatchGameState] = useGameReducer();
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);

  return (
    <div className="app">
      <Navigation dispatchGameState={dispatchGameState} />
      <Content
        gameState={gameState}
        dispatchGameState={dispatchGameState}
        scorePlayer1={scorePlayer1}
        scorePlayer2={scorePlayer2}
        setScorePlayer1={setScorePlayer1}
        setScorePlayer2={setScorePlayer2}
      />
      <div className="floor"></div>
    </div>
  );
}

export default App;
