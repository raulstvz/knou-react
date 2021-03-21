import React from "react";
import "./ButtonLike.css";
import heart from "../../assets/swipePage/heartVectorToSwipPage.png";
import { useEffect, useState, useContext } from "react";
import { MatchContext } from "../../providers/match";
import { API_ROOT } from "../../utils/hostSettings";

const ButtonLike = ({ possibleMatchId, giveLike }) => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
 


  const { setNewMatch } = useContext(MatchContext); //es match
  const { newMatch } = useContext(MatchContext);

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
    fetch(`${API_ROOT}/api/like`, options).then((promise) => {
      console.log(promise);
      if (promise.status === 201) {
        setNewMatch(possibleMatchId);
      }
    });
  };
  console.log(newMatch);

  return (
    <div className="likeButtonFromSwipPage" onClick={handleLike}>
      <img className="likeIcon" src={heart}></img>
    </div>
  );
};

export default ButtonLike;
