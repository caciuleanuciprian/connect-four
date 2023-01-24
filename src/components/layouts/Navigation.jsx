import { generateEmptyBoard } from "../../services/utils/connect4Utils";
import Button from "../UI/Button";
import Logo from "../UI/Logo";
import ReactModal from "react-modal";
import { useState } from "react";

const Navigation = ({ dispatchGameState }) => {
  const [open, setOpen] = useState(false);
  if (open) {
    document.querySelector(".app")?.classList.add("blur");
  } else {
    document.querySelector(".app")?.classList.remove("blur");
  }
  return (
    <div className="nav">
      <Button
        text="how to play"
        className={"tutorial"}
        onClick={() => setOpen(true)}
      />
      <Logo />
      <Button
        text="restart"
        className={"restart"}
        onClick={() =>
          dispatchGameState({
            type: "NEW_GAME",
            board: generateEmptyBoard(),
          })
        }
      />
      <ReactModal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="modal"
        overlayClassName="overlay"
        appElement={document.querySelector("#root")}
      >
        <div className="modal__content">
          <h1 className="modal__header">How to play</h1>
          <p className="modal__paragraph">
            Connect 4 is a two-player connection game in which the players first
            choose a color and then take turns dropping colored discs from the
            top into a 7x7 suspended grid. The pieces fall straight down,
            occupying the next available space within the column. The objective
            of the game is to be the first to form a horizontal, vertical, or
            diagonal line of four of one's own discs. Connect Four is a solved
            game. The first player can always win by playing the right moves.
          </p>
          <button className={"close"} onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default Navigation;
