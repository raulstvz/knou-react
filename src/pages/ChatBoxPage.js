import ChatBox from "../components/chatBox/Chatbox";
import Header from "../components/header/Header";
import Button from "../components/button/Button";
import BoxMenu from "../components/boxmenu/BoxMenu";
import Footer from "../components/footer/Footer";
import { useHistory } from "react-router";
import "./ChatBoxPage.css"


const ChatBoxPage = () => {

  const history = useHistory();
  return (
  <div className="chatBoxPage__container">
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
    <ChatBox />
    <Footer />
    </div>
  )};

export default ChatBoxPage;
