import Button from "./Button";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="nav">
      <Button text="Menu" onClick={console.log("menu")} />
      <Logo />
      <Button text="Restart" onClick={console.log("restart")} />
    </div>
  );
};

export default Navigation;
