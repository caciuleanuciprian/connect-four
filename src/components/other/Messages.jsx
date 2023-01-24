const Messages = ({ gameState }) => {
  console.log(gameState.message);
  return (
    <div className="messages">
      <p className="messages-player-name">
        {gameState.message
          ? gameState.message
          : `Player ${gameState.currentPlayer}'s turn`}
      </p>
    </div>
  );
};
export default Messages;
