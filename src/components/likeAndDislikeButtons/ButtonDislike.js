import React from "react";
import "./ButtonDislike.css";
import decline from "../../assets/swipePage/nonLikeVector.png";
import { useEffect } from "react";
import { API_ROOT } from "../../utils/hostSettings";

const ButtonDislike = ({ possibleMatchId, giveDislike,setLikeVisible,likeVisible }) => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));

  const body = {
    sender: loggedUser._id,
    receiver: possibleMatchId,
    //created: new Date(),
  };

  const handleDislike = () => {
    likeVisible();
    giveDislike();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    fetch(`${API_ROOT}/api/dislike`, options);
  };
  return (
    <div className="dislikeButtonFromSwipPage" onClick={handleDislike}>
      <img className="dislikeIcon" src={decline}></img>
    </div>
  );
};

export default ButtonDislike;
