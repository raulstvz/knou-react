import "./Logo.css"
import logo from "../../assets/logo/image 2.png";
import { useHistory } from "react-router-dom"

const Logo = () => {
    const history = useHistory();
    return (
        <img src={logo} alt="Logo of Knou" onClick={() => history.push("/")} />
    )
};
export default Logo;