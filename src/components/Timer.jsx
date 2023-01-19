const Timer = ({ turn }) => {
  return (
    <div className="timer">
      <p className="timer-player-name">Player {turn}'s turn</p>
      <p className="timer-seconds">30s</p>
    </div>
  );
};
export default Timer;
