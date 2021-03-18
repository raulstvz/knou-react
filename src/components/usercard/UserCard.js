import "./UserCard.css";
import LikeButton from "../likeAndDislikeButtons/ButtonLike";
import DislikeButton from "../likeAndDislikeButtons/ButtonDislike";
import { useEffect, useState } from "react";

const UserCardReal = ({ possibleMatch, giveLike, giveDislike }) => {
  //implementar logica de Post con likes Y dislikes desde los bot0nes, Aqui sabemos la info de cada usuario.
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/photo/${possibleMatch._id}/photos`)
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setPhoto(json));
  }, []);

  const photoBuffer = photo.map((e) => {
    const src = `data:${e.mimetype};base64,${Buffer.from(e.photo.data).toString(
      "base64"
    )}`;
    return src;
  });

  console.log(photoBuffer);

  return (
    <div className="userCard__container">
      <div className="profilePicture__container">
        <img src={photoBuffer[0]} className="profilePicture" />
      </div>
      <div className="profileInfo__container">
        <p className="profileInfo__nameAndAge">
          {possibleMatch.firstname}, {possibleMatch.age}
        </p>

        <p className="profileInfo__description">{possibleMatch.description}</p>

        <p className="profileInfo__distance">17 Kilometers away</p>
      </div>
      <div className="likeAndDislikeButton_container">
        <DislikeButton
          giveDislike={giveDislike}
          possibleMatchId={possibleMatch._id}
        />
        <LikeButton giveLike={giveLike} possibleMatchId={possibleMatch._id} />
      </div>
    </div>
  );
};

export default UserCardReal;
