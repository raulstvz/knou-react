import React from "react";
import "./ButtonLike.css";
//falta importar el dibujo
import { useEffect } from "react";

const ButtonLike = ({ possibleMatchId, giveLike }) => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  console.log(loggedUser);
  console.log(possibleMatchId);
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
      <img className="likeIcon"></img>
    </div>
  );
};

export default ButtonLike;
