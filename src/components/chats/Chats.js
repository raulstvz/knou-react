import { useEffect, useState } from "react";
import "./Chats.css";
import Chat from "../chat/Chat";

const Chats = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/match/603543bf9de65e0bdee9c0c8/matches`) //falta el userid dinamico
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setMatches(json));
  }, []);

  return (
    <div className="chats__container">
      {matches.map((match) => (
        <Chat match={match} />
      ))}
    </div>
  );
};

export default Chats;
