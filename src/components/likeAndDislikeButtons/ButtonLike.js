import React from "react";
import "./ButtonLike.css";
import heart from "../../assets/swipePage/heartVectorToSwipPage.png";
import { useEffect } from "react";

const ButtonLike = ({ possibleMatchId, giveLike }) => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));

  const body = {
    sender: loggedUser._id,
    receiver: possibleMatchId,
    //created: new Date(),
  };
  const handleLike = () => {
    giveLike();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    fetch("http://localhost:3001/api/like", options);
  };
  return (
    <div className="likeButtonFromSwipPage" onClick={handleLike}>
      <img className="likeIcon" src={heart}></img>
    </div>
  );
};

export default ButtonLike;
