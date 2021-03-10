import "./ChatPage.css";
import Chats from "../components/chats/Chats";
import Header from "../components/header/Header";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import BoxMenu from "../components/boxmenu/BoxMenu";
import { useHistory } from "react-router";

const ChatPage = () => {
  const history = useHistory();
  return (
    <>
    <div className="chatPage__container">
      <Header
        icons={<BoxMenu />}
        button={
          <Button
            name="Log out"
            onClick={() => history.push("/")}
            style="button_white_small"
          />
        } //falta crear la función de goToSignOut
      />
      <div className="chat_section"><Chats/></div>
      
      <Footer />
    </div>
      
    </>
  );
};

export default ChatPage;
