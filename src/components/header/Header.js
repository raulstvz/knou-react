import "./Header.css";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header__container">
      <div className="logo_container">
      <Logo />
      </div>
      <div className="buttons_container">
        <div className="PlainText__container">How it works</div>
        <Button
          name="Login"
          alt="Button to acces at Login"
          onClick={() => history.push("/login")}
          color="light"
        />
        <Button name="Sign up" alt="Button to acces at Sign up" color="dark" 
        onClick={() => history.push("/signup")}
        />
      </div>
    </div>
  );
};

export default Header;
