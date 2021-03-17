import "./UserCard.css";
import LikeButton from "../likeAndDislikeButtons/ButtonLike";
import DislikeButton from "../likeAndDislikeButtons/ButtonDislike";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import CustomCarousel from "../customCarousel/CustomCarousel";
import Tag from "../tag/Tag";

const UserCardReal = ({ possibleMatch, giveLike, giveDislike }) => {

  const [photo, setPhoto] = useState([]);
  const [modalVisible, setModalVisible] = useState();
  const handleModalClose = () => setModalVisible(false);
  const tagArray = [];

  useEffect(() => {
    fetch(`http://localhost:3001/api/users/${possibleMatch._id}`)
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => {
        // console.log("flag", parsedJson);
        console.log("flag2", json)
        setPhoto(json.photos)
      });
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
      <div className="profilePicture__container" onClick={() => setModalVisible(true)}>
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
      <Modal handleClose={handleModalClose} visible={modalVisible} >
        <CustomCarousel></CustomCarousel>
        
        <span>{possibleMatch.firstname}</span>
        <span>{possibleMatch.lastname}</span>
        <span>{possibleMatch.age} years old</span>
        <span className="tag__container__default" >{possibleMatch.hobbies}</span>
/        <span>{possibleMatch.description}</span>
        
        

      </Modal>
    </div>
  );
};

export default UserCardReal;
