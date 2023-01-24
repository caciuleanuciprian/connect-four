const Button = ({ text, className, onClick }) => {
  return (
    <button className={`btn btn--${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
