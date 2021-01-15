import "./Header.css";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header__container">
      <Logo />
      <div className="buttons_container">
        <div className="PlainText__container">How it works</div>
        <Button
          name="Login"
          alt="Button to acces at Login"
          onClick={() => history.push("/login")}
          className=""
        />
        <Button name="Sign up" alt="Button to acces at Sign up" />{" "}
        {/*onClick={()=> history.push("/signup")} development de signup page*/}
      </div>
    </div>
  );
};

export default Header;
