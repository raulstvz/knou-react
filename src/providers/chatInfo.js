import { createContext } from "react";
let chat = {};

const setChatInfo = (obj) => (chat = obj); //(B)

const ChatInfoContext = createContext(null); //(C)

// (D)
export { chat, setChatInfo };

export default ChatInfoContext;
