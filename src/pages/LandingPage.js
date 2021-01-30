
import "./LandingPage.css";
import Button from "../components/button/Button";
import paleturquoiseCircle from "../assets/landing page/paleturquoise Circle.png";
import womanImage from "../assets/landing page/lime-397 1.png";
import orangeCircle from "../assets/landing page/Orange Circle.png";
import manImage from "../assets/landing page/lime-399 1.png";
import turquoiseCircle from "../assets/landing page/Turquoise Circle.png";
import purpleCircle from "../assets/landing page/Purple Circle.png";
import profileSample from "../assets/landing page/profileSample.png";
import purpleSquare from "../assets/landing page/purpleSquare.png";
import Ellipse1 from "../assets/landing page/Ellipse 1.png";
import Ellipse2 from "../assets/landing page/Ellipse 2.png";
import Ellipse3 from "../assets/landing page/Ellipse 3.png";
import ArrowLabel from "../components/arrowLabel/ArrowLabel";
import Text from "../components/text/text";
import { useHistory } from "react-router-dom";
import Frame from "../assets/landing page/Frame 1.png";

const LandingPage = () => {

  const history = useHistory();
  return (
    <div className="LandingPage__container">
      <div className="firstSection_container">
        <div className="Text_container">
          <div className="firstText">
            <h1>The place where you know people</h1>
          </div>
          <div className="secondText">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.</p>
          </div>
          <div className="button_landingPage">
            <Button
              name="Get Started"
              alt="Get Started"
              color="dark"
              onClick={() => history.push("/login")}
            />
          </div>
        </div>
        <div className="circleSection_container">
          <div className="womanSection_container">
            <div className="paleturquoiseCircle_container">
              <img src={paleturquoiseCircle} alt="paleturquoise circle" />
            </div>
            <div className="woman_container">
              <img src={womanImage} alt="woman with phone" />
            </div>
          </div>
          <div className="manSection_container">
            <div className="orangeCircle_container">
              <img src={orangeCircle} alt="orange circle" />
            </div>

            <div className="man_container">
              <img src={manImage} alt="man with phone" />
            </div>

            <div className="turquoiseCircle_container">
              <img src={turquoiseCircle} alt="turquoise Circle" />
            </div>

            <div className="purpleCircle_container">
              <img src={purpleCircle} alt="purple circle" />
            </div>
          </div>
        </div>
      </div> {/*end - firstSection*/}

      <div className="secondSection_container">
        <div className="photoSection_container">
          <img
            src={purpleSquare}
            alt="purple square"
            className="purpleSquare_container"
          />
          <img
            src={Ellipse2}
            alt="brown circle"
            className="brownElipse_container"
          />
          <img
            src={Ellipse3}
            alt="orange ellipse"
            className="orangeElipse_container"
          />
          <img
            src={profileSample}
            alt="profile picture"
            className="profileSample"
          />
          <img
            src={Ellipse1}
            alt="purple circle"
            className="purpleElipse_container"
          />
        </div>

        <div className="textSecondSection_container">
          <div className="thirdText">
            <h2>Create your profile</h2>
          </div>
          <div className="forthText">
            <p>Just by creating your profile at knou you will be able to know people from arround the world and find the perfect match for you!</p>
            <ArrowLabel />
          </div>
        </div>
      </div> {/*end - secondSection*/}

      <div className="thirdSection_container">
        <div>
          <img src={Frame} alt="frame" />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;

