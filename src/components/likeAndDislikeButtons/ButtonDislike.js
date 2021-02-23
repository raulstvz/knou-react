import React from "react";
import "./ButtonDislike.css";
import decline from "../../assets/swipePage/nonLikeVector.png";
import { useEffect } from "react";

const ButtonDislike = ({ possibleMatchId, giveDislike }) => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));

  const body = {
    sender: loggedUser._id,
    receiver: possibleMatchId,
    //created: new Date(),
  };

  const handleDislike = () => {
    giveDislike();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    fetch("http://localhost:3001/api/dislike", options);
  };
  return (
    <div className="dislikeButtonFromSwipPage" onClick={handleDislike}>
      <img className="dislikeIcon" src={decline}></img>
    </div>
  );
};

export default ButtonDislike;
