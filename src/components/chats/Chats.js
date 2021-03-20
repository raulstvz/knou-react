import React, { useEffect, useState } from "react";
import "./Chats.css";
import Chat from "../chat/Chat";
import { API_ROOT } from "../../utils/hostSettings";

const Chats = () => {
  const [matches, setMatches] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")); //tenemos el usuario desde el local.
  console.log(user._id);

  useEffect(() => {
    fetch(`${API_ROOT}/api/match/${user._id}/matches`) //falta el userid dinamico
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setMatches(json));
  }, []);

  console.log(matches);

  return (
    <div className="chats__container">
      {matches.map((match) => (
        <Chat match={match} />
      ))}
    </div>
  );
};

export default Chats;
