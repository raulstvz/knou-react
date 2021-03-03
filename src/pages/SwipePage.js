import Header from "../components/header/Header";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import { useHistory } from "react-router";
import profileSample from "../assets/swipePage/Frame 231.png";
import "./SwipePage.css";
import BoxMenu from "../components/boxmenu/BoxMenu";
import Swiper from "../components/usercard/Swiper";

const SwipePage = () => {

  const history = useHistory();

  return (
    <div>
      <Header
        icons={<BoxMenu />}
        button={
          <Button
            name="Log out"
            onClick={() => history.push("/")}
            style="button_white_small"
          />
        } //falta crear la función de goToSignOut
      />

      <div className="swipePage__container">
        <Swiper />
      </div>

      <Footer />
    </div>
  );
};


export default SwipePage;
