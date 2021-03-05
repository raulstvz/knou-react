import ChatInfoContext from "../../providers/chatInfo";
import { useContext } from "react";

const ChatBox = () => {
  const chatInfo = useContext(ChatInfoContext);
  console.log(chatInfo);
  return <div> </div>;
};

export default ChatBox;
