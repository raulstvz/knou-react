import "./UserCard.css";
import LikeButton from "../likeAndDislikeButtons/ButtonLike";
import DislikeButton from "../likeAndDislikeButtons/ButtonDislike";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import CustomCarousel from "../customCarousel/CustomCarousel";
import CarouselCard from "../customCarousel/CarouselCard";
const UserCardReal = ({ possibleMatch, giveLike, giveDislike }) => {

  const [photo, setPhoto] = useState([]);
  const [modalVisible, setModalVisible] = useState();
  const handleModalClose = () => setModalVisible(false);

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
        <img src={photoBuffer[0]} className="profilePicture" onClick={() => setModalVisible(true)}/>
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
        <Modal
        handleClose={handleModalClose}
        visible={modalVisible}
        children={
          <div>
          <CustomCarousel>
            
          </CustomCarousel>
            <p>
              {possibleMatch.firstname}
              {" "}
              {possibleMatch.lastname}
            </p>
            <p>{possibleMatch.age} years old </p>
            <div className="tag__container__fromPosibleMatch">
              {possibleMatch.hobbies.map((hobby) => (
                <span>{hobby}</span>
              ))}
            </div>
            <p>
              {possibleMatch.description}
            </p>
          </div>
        }>
      </Modal>



      </div>
    </div>
  );
};

export default UserCardReal;
