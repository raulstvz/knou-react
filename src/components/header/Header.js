import "./Header.css";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className="Header__container">
      <div className="Logo__container">
        <Logo />
      </div>
      <div className="buttons_container">
        <div className="PlainText__container">How it works</div>
        <div className="LoginButton__container">
          <Button
            name="Login"
            alt="Button to acces at Login"
            onClick={() => history.push("/login")}
          />
        </div>
        <div className="SignUpButton__container">
          <Button name="Sign up" alt="Button to acces at Sign up" />{" "}
          {/*onClick={()=> history.push("/signup")} development de signup page*/}
        </div>
      </div>
    </div>
  );
};

export default Header;
