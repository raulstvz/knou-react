import React, { useState, useRef, useEffect } from "react";
export const MatchContext = React.createContext();

const MatchContexto = (props) => {
  const [matches, setMatches] = useState([]);

  const [newMatch, setNewMatch] = useState();

  const prevMatchRef = useRef();
  useEffect(() => {
    prevMatchRef.current = matches;
  });
  const prevMatch = prevMatchRef.current;

  return (
    <MatchContext.Provider
      value={{ matches, setMatches, prevMatch, newMatch, setNewMatch }}
    >
      {props.children}
    </MatchContext.Provider>
  );
};

export default MatchContexto;
/* let chat = {};

const setChatInfo = (obj) => (chat = obj); //(B)

const ChatInfoContext = createContext(null); //(C)

// (D)
export { chat, setChatInfo };

export default ChatInfoContext;
 */
