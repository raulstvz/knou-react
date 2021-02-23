import Button from "../button/Button";
import "./UserCard.css";
import LikeButton from "../likeAndDislikeButtons/ButtonLike";
import DislikeButton from "../likeAndDislikeButtons/ButtonDislike";

const UserCardReal = ({ possibleMatch, giveLike }) => {
  const handleLike = () => {
    console.log(possibleMatch._id); // id de cada usuario clicado. Ahora a hacer un post con esta info y la del usuario logeado.
    giveLike();

    //fetch a likes
  };

  const handleDislike = () => {
    console.log(possibleMatch._id);

    //fetch a dislieks
  };

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

        <p className="profileInfo__distance">distance tiene q ser calculado</p>
      </div>
      <div className="likeAndDislikeButton_container">
        <DislikeButton />
        <LikeButton giveLike={giveLike} possibleMatchId={possibleMatch._id} />
      </div>
    </div>
  );
};

export default UserCardReal;
