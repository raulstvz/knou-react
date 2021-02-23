import React from "react";
import "./ButtonDislike.css";
//falta importar el dibujo
import { useEffect } from "react";

const ButtonDislike = ({ possibleMatchId }) => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  const body = {
    sender: loggedUser._id,
    receiver: possibleMatchId,
    // created: new Date(),
  };
  const handleDislike = () => {
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
      <img className="dislikeIcon"></img>
    </div>
  );
};

export default ButtonDislike;
