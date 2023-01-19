const Player = ({ name, score, color }) => {
  return (
    <div className="player">
      <div
        className="player-color"
        style={{ backgroundColor: `var(--${color})` }}
      ></div>
      <p className="player-name">{name}</p>
      <p className="player-score">{score}</p>
    </div>
  );
};

export default Player;
