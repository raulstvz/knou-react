import { useEffect, useState, useContext } from "react";
import "./Chat.css";
import { ChatContext } from "../../providers/chatInfo";
import { useHistory } from "react-router";
import { API_ROOT } from "../../utils/hostSettings";
 

const Chat = ({ match }) => {
  const { setChat } = useContext(ChatContext);
  const [photo, setPhoto] = useState([]);
  const [lastMessage, setLastMessage] = useState({});
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user")); //tenemos el usuario desde el local.
  const userPhoto =
    match.userOne._id === user._id ? match.userTwo._id : match.userOne._id;

  useEffect(() => {
    fetch(`${API_ROOT}api/photo/${userPhoto}/photos`)
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setPhoto(json));

    fetch(`${API_ROOT}api/messages/${match._id}/lastmessage`) //aqui iria el match_.id
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
    setChat(match._id);
    ///hay que hacer set Photo aqui tambien para evitar hacer mas llamadas al back con la imagen de la otra persona. que ya tenemos
    history.push("/chatboxpage");
  };

  return (
    <div className="chat__container" onClick={handleOnclick}>
      <div className="profilePicture__chatcontainer">
        <img
          src={photoBuffer}
          className="profilePicture__chat"
          alt="knou foto"
        />
      </div>
      <div className="text__container">
        <p className="userName">
          {match.userOne._id === user._id
            ? match.userTwo.firstname
            : match.userOne.firstname}
        </p>
        <p className="lastMessage">{lastMessage[0]?.content} </p>
      </div>
      <div className="time__container">
        <p> {lastMessage[0]?.date} </p>
      </div>
    </div>
  );
};

export default Chat;
