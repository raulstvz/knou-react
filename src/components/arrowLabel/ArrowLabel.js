import "./ArrowLabel.css";
import vectorLabel from "../../assets/landing page/VectorLandingPage.png"
import Label from "../../assets/landing page/LabelLandingPage.png"
import { useHistory } from "react-router";


const ArrowLabel = ()=>{
    const history = useHistory();
    return(
        <div className="arrowLabel__container">
            <div className ="label">
            <img src={Label} alt="Get Started" onClick={() => history.push("/login")} />
            </div>
            <div className="arrow">
            <img src={vectorLabel}  alt="right arrow" onClick={() => history.push("/login")} />
            </div>
        </div>
    )
};

export default ArrowLabel;