import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

/* Components */
import ArrowLabel from "../components/arrowLabel/ArrowLabel";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Logo from "../components/logo/Logo";

/* Images and icons */
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
import Frame from "../assets/landing page/Frame 1.png";

/* Third section people images */
import Photo1 from "../assets/landing page/photo1.svg";
import Photo2 from "../assets/landing page/photo2.svg";
import Photo3 from "../assets/landing page/photo3.svg";
import Photo4 from "../assets/landing page/photo4.svg";
import Photo5 from "../assets/landing page/photo5.svg";
import signal from "../assets/landing page/signal.svg";

const LandingPage = () => {
  const history = useHistory();

  const Maria = Photo1;
  const Lucia = Photo2;
  const Jane = Photo3;
  const David = Photo4;
  const Mark = Photo5;

  const [user, setUser] = useState(Jane);

  return (
    <>
      <Header
        text="How it works"
        button={
          <Button
            name="Login"
            onClick={() => history.push("/login")}
            style="button_light_small" />}
        button2={
          <Button
            name="Sign Up"
            onClick={() => history.push("/signup")}
            style="button_dark_small" />}
      />

      
      {/*start - first section*/}
      <div className="LandingPage__container">
        <div className="firstSection_container">
          <div className="Text_container">
            <div className="firstText">
              <h1>The place where you know people</h1>
            </div>
            <div className="secondText">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>
            </div>
            <div className="button_landingPage">
              <Button
                name="Get Started"
                alt="Get Started"
                style="button_dark_small"
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
        </div>
        {/*end - first section*/}

        {/*start - second section*/}
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
            <img src={profileSample} alt="profile" className="profileSample" />
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
              <p>
                Just by creating your profile at knou you will be able to know
                people from arround the world and find the perfect match for
                you!
              </p>
              <ArrowLabel />
            </div>
          </div>
        </div>
        {/*end - second section*/}

        {/*start - third section*/}
        <div className="thirdSection__container">
          <div className="message_container">
            {user === Maria && (
              <div className="message">
                <img src={signal} className="signal" />
                <p className="comment">
                  Fue genial....etc....account of the system, and expound the
                  actual teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know.
                </p>
              </div>
            )}
          </div>

          <div className="message_container">
            {user === Lucia && (
              <div className="message">
                <img src={signal} className="signal" />
                <p className="comment">
                  Conocí a una persona...etc..account of the system, and expound
                  the actual teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know.
                </p>
              </div>
            )}
          </div>

          <div className="message_container">
            {user === Jane && (
              <div className="message">
                <img src={signal} className="signal" />
                <p className="comment">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know.
                </p>
              </div>
            )}
          </div>

          <div className="message_container">
            {user === David && (
              <div className="message">
                <img src={signal} className="signal" />
                <p className="comment">
                  Perhaps I wouldn't have met anyone without this webApp,
                  thanks...expound the actual teachings of the great explorer of
                  the truth, the master-builder of human happiness. No one
                  rejects, dislikes, or avoids pleasure itself, because it is
                  pleasure, but because those who do not know.
                </p>
              </div>
            )}
          </div>
          <div className="message_container">
            {user === Mark && (
              <div className="message">
                <img src={signal} className="signal" />
                <p className="comment">
                  Hola, realmente me convenció esta webApp....expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know.
                </p>
              </div>
            )}
          </div>

          {/* first section */}

          <div className="userPicture_container">
            <img src={Photo1} onClick={() => setUser(Maria)} />
            <div className="infoUser_container">
              {user === Maria && (
                <div>
                  <p className="fullName">Maria Gonzalez</p>
                  <p className="age_city">19, Madrid</p>
                </div>
              )}
            </div>

            <img src={Photo2} onClick={() => setUser(Lucia)} />
            <div className="infoUser_container">
              {user === Lucia && (
                <div>
                  <p className="fullName">Lucia Alvarez</p>
                  <p className="age_city">29, Lisboa</p>
                </div>
              )}
            </div>

            <img src={Photo3} onClick={() => setUser(Jane)} />
            <div className="infoUser_container">
              {user === Jane && (
                <div>
                  <p className="fullName">Jane Cooper</p>
                  <p className="age_city">21, Seattle</p>
                </div>
              )}
            </div>

            <img src={Photo4} onClick={() => setUser(David)} />
            <div className="infoUser_container">
              {user === David && (
                <div>
                  <p className="fullName">David Foo</p>
                  <p className="age_city">18, New Yok</p>
                </div>
              )}
            </div>

            <img src={Photo5} onClick={() => setUser(Mark)} />
            <div className="infoUser_container">
              {user === Mark && (
                <div className="infoUser_container">
                  <p className="fullName">Mark Power</p>
                  <p className="age_city">48, Brussels</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/*end - third section*/}
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
