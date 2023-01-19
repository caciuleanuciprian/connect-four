import { generateEmptyBoard } from "../services/utils/connect4Utils";
import { useReducer } from "react";

const gameReducer = (state, action) => {
  switch (action.type) {
    case "NEW_GAME":
      return {
        ...initialGameState,
        board: action.board,
      };
    case "TOGGLE_PLAYER":
      return {
        ...state,
        currentPlayer: action.nextPlayer,
        board: action.board,
      };
    case "END_GAME":
      return {
        ...state,
        gameOver: true,
        message: action.message,
        board: action.board,
      };
    case "UPDATE_MESSAGE":
      return {
        ...state,
        message: action.message,
      };
    default:
      throw Error(`Action "${action.type}" not found`);
  }
};

const initialGameState = {
  board: generateEmptyBoard(),
  player1: 1,
  player2: 2,
  currentPlayer: 1,
  gameOver: false,
  message: "",
};

export function useGameReducer() {
  const [gameState, dispatchGameState] = useReducer(
    gameReducer,
    initialGameState
  );
  return [gameState, dispatchGameState];
}
