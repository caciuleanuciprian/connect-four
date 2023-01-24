const Player = ({ name, color, score }) => {
  return (
    <div className="player">
      <div className={`player-color player-color--${color}`}></div>
      <p className="player-name">{name}</p>
      <p className="player-score">{score}</p>
    </div>
  );
};

export default Player;
