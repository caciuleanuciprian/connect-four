const Button = ({ text, onClick }) => {
  return (
    <button className={`btn btn--${text}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
