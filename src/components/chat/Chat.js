import { useEffect, useState } from "react";
import "./Chat.css";
import { setChatInfo, chat } from "../../providers/chatInfo";
import { useHistory } from "react-router";

const Chat = ({ match }) => {
  const [photo, setPhoto] = useState([]);
  const [lastMessage, setLastMessage] = useState({});
  const history = useHistory();
  useEffect(() => {
    fetch(`http://localhost:3001/api/users/60365812c95551081adfc414/photos`)
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setPhoto(json));

    fetch(
      `http://localhost:3001/api/messages/603e712694321e0509ab1fce/lastmessage`
    ) //aqui iria el match_.id
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setLastMessage(json));
  }, []);

  const photoBuffer = photo.map((e) => {
    const src = `data:${e.mimetype};base64,${Buffer.from(e.photo.data).toString(
      "base64"
    )}`;
    return src;
  });

  const handleOnclick = () => {
    setChatInfo({ id: match._id });
    console.log(chat);
    //este chat ID lo usaremos para fetchear los chats, abjao hay que popular userTwo para poder agarrar su nombre.
    history.push("/chatboxpage"); // y despues guardar en localstorage el item clicado y hacer historypush a /ChatBox, desde ahi un fetch para saber
    //el ID del chat y asi despues otro fetch en ese component para traernos todos los mensajes que estan ligados a ese chat.
    // habria que hacer un fetch a las fotos de los usuarios tambien en este componente
  };

  return (
    <div className="chat__container" onClick={handleOnclick}>
      <div className="profilePicture__chatcontainer">
        <img src={photoBuffer} className="profilePicture__chat" />
      </div>
      <div className="text__container">
        <p className="userName">{match.userTwo.firstname}</p>
        <p className="lastMessage">{lastMessage[0]?.content} </p>
      </div>
      <div className="time__container">
        <p> {lastMessage[0]?.date} </p>
      </div>
    </div>
  );
};

export default Chat;
