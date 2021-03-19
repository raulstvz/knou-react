import { ChatContext } from "../../providers/chatInfo";
import React, { useContext, useEffect, useState, useRef } from "react";
import "./Chatbox.css";
import io from "socket.io-client";

const ChatBox = () => {
  const { chat } = useContext(ChatContext); //es match
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState("");
  const user = JSON.parse(localStorage.getItem("user")); //tenemos el usuario desde el local.
  const [update, setUpdate] = useState(false);
  const dummy = useRef();

  // const scrollToBottom = () => {
  //   messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  const socket = io("http://localhost:3001");

  const body = {
    content: message,
    chat: chat,
    sender: user._id,
  };

  useEffect(() => {
    socket.emit("join", user.firstname, chat, (error) => {
      // scrollToBottom();
      if (error) {
        console.log(error);
      }
    });
  }, []);

  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);

      setUpdate(true);
    });
  }, []);

  const handleMessage = (event) => {
    if (event.keyCode === 13) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };

      socket.emit("sendMessage", message, user.firstname, chat);

      fetch(`http://localhost:3001/api/messages/`, options);
      // scrollToBottom();
      setUpdate(true);
      setMessage("");
    }
  };

  const timeSince = (timeStamp) => {
    timeStamp = new Date(timeStamp);
    var now = new Date(),
      secondsPast = (now.getTime() - timeStamp) / 1000;
    if (secondsPast < 60) {
      return parseInt(secondsPast) + "s ago";
    }
    if (secondsPast < 3600) {
      return parseInt(secondsPast / 60) + "m ago";
    }
    if (secondsPast <= 86400) {
      return parseInt(secondsPast / 3600) + "h ago";
    }
    if (secondsPast > 86400) {
      let day = timeStamp.getDate();
      let month = timeStamp
        .toDateString()
        .match(/ [a-zA-Z]*/)[0]
        .replace(" ", "");
      let year =
        timeStamp.getFullYear() === now.getFullYear()
          ? ""
          : " " + timeStamp.getFullYear();

      return day + " " + month + year;
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3001/api/messages/${chat}/chat`)
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setConversation(json));
    dummy.current.scrollIntoView({ behavior: "smooth" });
    setUpdate(false);
  }, [update]);

  //aqui habria que hacer un ternario de si message.sender.id es el de la persona logeada, se usara la iamgen
  //de la persona logeada(fetch a imagenes) y sino se  usara la imagen que vendra del contexto
  return (
    <>
      <div className="chatBox__container">
        <div className="message_container_box">
          {conversation.map((message) =>
            user.firstname === message.sender.firstname ? (
              <div className="messageBox_container otherUser">
                <div className="messageBox">
                  <span className="userName_message">
                    {message.sender.firstname}:
                  </span>
                  {message.content}
                </div>
                <span className="timer_message">{timeSince(message.date)}</span>
              </div>
            ) : (
              <div className="messageBox_container">
                <div className="messageBox">
                  <span className="userName_message">
                    {message.sender.firstname}:
                  </span>
                  {message.content}
                </div>
                <span className="timer_message">{timeSince(message.date)}</span>
              </div>
            )
          )}
          <div className="dummy" ref={dummy}></div>
        </div>
        <input
          name="message"
          className="messageForm_input"
          placeholder="write your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => handleMessage(e)}
        />
      </div>
    </>
  );
};

export default ChatBox;
