import "./Header.css";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header_container">
      <Logo />
      </div>
      <div className="buttons_container">
      <div className="text_container">How it works</div>
        <Button
          name="Login"
          onClick={() => history.push("/login")}
          color="dark"
        />
        <Button
          name="Sign Up"
          onClick={() => history.push("/signup")}
          color="light"
        />
      </div>
    </div>
  );
};

export default Header;
