import "./BoxMenu.css";
import messages from "../../assets/icons/message.svg";
import swipe1 from "../../assets/icons/swipeA.svg";
import swipe2 from "../../assets/icons/swipeB.svg";
import profile from "../../assets/icons/profile.svg";
import { useState } from "react"; // it'll be used when the icon "8" works
import { useHistory } from "react-router-dom";
const BoxMenu = () => {
  const history = useHistory();
  return (
    <div className="boxMenu__container">
      <div
        className="swipe_container"
        onClick={() => history.push("/swipepage")}
      >
        <div className="cards_container">
          <img className="imagenA" src={swipe1} />
          <img className="imagenB" src={swipe2} />
        </div>
        <span className="text">Swipe</span>
      </div>
      <div
        className="messages_container"
        onClick={() => history.push("/chatpage")}
      >
        {/* I want to pass a prop here relashionate with the number of messages, changing by user */}
        <img className="message_icon" src={messages} />
        <div className="number_icon">
          <span className="number">8</span>
        </div>
        <span className="text">Messages</span>
      </div>
      <div
        className="profile_container"
        onClick={() => history.push("/profile")}
      >
        <img className="icon_container" src={profile} />
        <span className="text">Profile</span>
      </div>
    </div>
  );
};

export default BoxMenu;
