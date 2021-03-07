import React, { useState } from "react";
export const ChatContext = React.createContext();

const ChatContexto = (props) => {
  const [chat, setChat] = useState("");

  return (
    <ChatContext.Provider value={{ chat, setChat }}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatContexto;
/* let chat = {};

const setChatInfo = (obj) => (chat = obj); //(B)

const ChatInfoContext = createContext(null); //(C)

// (D)
export { chat, setChatInfo };

export default ChatInfoContext;
 */
