import "./UserCard.css";
import LikeButton from "../likeAndDislikeButtons/ButtonLike";
import DislikeButton from "../likeAndDislikeButtons/ButtonDislike";

const UserCardReal = ({ possibleMatch, giveLike, giveDislike }) => {
  //implementar logica de Post con likes Y dislikes desde los bot0nes, Aqui sabemos la info de cada usuario.
  return (
    <div className="userCard__container">
      <div className="profilePicture__container">
        <img src={possibleMatch.photos} className="profilePicture" />
      </div>
      <div className="profileInfo__container">
        <p className="profileInfo__nameAndAge">
          {possibleMatch.firstname},{possibleMatch.age}
        </p>

        <p className="profileInfo__description">
          {possibleMatch.description}Description here
        </p>

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
