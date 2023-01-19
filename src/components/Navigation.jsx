import { generateEmptyBoard } from "../services/utils/connect4Utils";
import Button from "./Button";
import Logo from "./Logo";

const Navigation = ({ dispatchGameState }) => {
  return (
    <div className="nav">
      <Button text="menu" onClick={() => {}} />
      <Logo />
      <Button
        text="restart"
        onClick={() =>
          dispatchGameState({
            type: "NEW_GAME",
            board: generateEmptyBoard(),
          })
        }
      />
    </div>
  );
};

export default Navigation;
