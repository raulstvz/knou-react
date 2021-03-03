import React from "react";
import "./ButtonLike.css";
import heart from "../../assets/swipePage/heartVectorToSwipPage.png";
import { useEffect, useState } from "react";

const ButtonLike = ({ possibleMatchId, giveLike }) => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));

  const [match, setMatch] = useState([]);

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
    fetch("http://localhost:3001/api/like", options)
      .then(async (promise) => {
        if (promise.status === 201) {
          return await promise.json();
        }
      })
      .then((json) => setMatch(json)); // si hago console.log del json si que cuando hay match lo devuelve.
  };
  console.log(match); //no lo guarda aqui
  return (
    <div className="likeButtonFromSwipPage" onClick={handleLike}>
      <img className="likeIcon" src={heart}></img>
    </div>
  );
};

export default ButtonLike;
