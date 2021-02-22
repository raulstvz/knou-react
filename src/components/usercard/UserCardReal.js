import Button from "../button/Button";
import "./UserCard.css";

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
        <span>
          {possibleMatch.firstname}
          {possibleMatch.age}
        </span>
        <br></br>
        <span>{possibleMatch.description}</span>
        <br></br>
        <span>distance tiene q ser calculado</span>
      </div>
      <div className="likeAndDislikeButton_container">
        <Button
          style="dislikeButtonFromSwipPage"
          name={"like"}
          onClick={handleLike}
        />
        <Button
          style="likeButtonFromSwipPage"
          name={<img className="likeIcon" src={"dislike"}></img>}
        />
      </div>
    </div>
  );
};

export default UserCardReal;
