import "./UserCard.css";
import LikeButton from "../likeAndDislikeButtons/ButtonLike";
import DislikeButton from "../likeAndDislikeButtons/ButtonDislike";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import CustomCarousel from "../customCarousel/CustomCarousel";
import CarouselCard from "../customCarousel/CarouselCard";
import { API_ROOT } from "../../utils/hostSettings";
import tagIcon from "../../assets/icons/tag.svg";

const UserCardReal = ({ possibleMatch, giveLike, giveDislike }) => {

  const [photo, setPhoto] = useState([]);
  const [modalVisible, setModalVisible] = useState();
  const handleModalClose = () => setModalVisible(false);

  useEffect(() => {
    fetch(`${API_ROOT}/api/photo/${possibleMatch._id}/photos`)
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setPhoto(json));
  }, []);

  const photoBuffer = photo.map((e) => {
    const src = `data:${e.mimeType};base64,${Buffer.from(e.photo.data).toString(
      "base64"
    )}`;
    return src;
  });
  const allPhotos = photo.map((e) => {
    return (
     <img
      src={`data:${e.mimetype};base64,${Buffer.from(e.photo.data).toString(
       "base64"
      )}`}
      className="profilePicture"
      alt="Photo Carousel"
     />
    );
   }); 

  return (
    <div className="userCard__container">
      <div className="profilePicture__container">

        <img src={photoBuffer[0]} className="profilePicture" onClick={() => setModalVisible(true)} />

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
               <CustomCarousel allPhotos={allPhotos}/ >

             
              <p>
                {possibleMatch.firstname}
                {" "}
                {possibleMatch.lastname}
              </p>
              <p>{possibleMatch.age} years old </p>
              <div className="tag__container__fromPosibleMatch">
                {possibleMatch.hobbies.map((hobby) => (
                  <span><img src={tagIcon} className="tagIconFromModal"></img>{hobby}</span>
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
