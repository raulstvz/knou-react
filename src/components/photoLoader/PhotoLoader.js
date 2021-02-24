import { React, useState } from "react";
import cameraIcon from "../../assets/icons/camera.svg";
import "./PhotoLoader.css";
const PhotoLoader = ({ userId, currentStep }) => {
  const [photoArray, setPhotoArray] = useState([]);
  const handleImageUpload = (e) => {
    /* TODO: DEFINE PUT/POST ACTION AGAINST MONGODB */
    let form_data = new FormData(); // https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/FormData
    form_data.append("updated", new Date());
    form_data.append("photo", e.target.files[0]);
    form_data.append("signup_step", currentStep + 1);
    form_data.append("signup_completed", true);
    const options = {
      method: "PUT",
      body: form_data,
    };
    fetch("http://localhost:3001/api/users/" + userId + "/photos", options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((response) => setPhotoArray(response))
      .catch((error) => {
        console.log("Error when retrieving images:", error);
      });
    //fetch de les imatges del user
    // .then(respobse => setPhotoArray([respose]))
  };
  console.log(photoArray);
  const MAX_ALLOWED = 8;
  const photosAllowed = MAX_ALLOWED - photoArray.length;
  const content = [];
  // const photo = `data:${photo.mimeType};base64,${photo.image}`;
  for (var i = 0; i < photosAllowed; i++) {
    content.push(
      <div className="photoloader__container">
        <img src={cameraIcon} alt="camera_icon" />
        <form
          id="photo"
          encType="multipart/form-data"
          className="form__container"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="file"
            name="photos"
            id="photos"
            onChange={handleImageUpload}
          />
        </form>
      </div>
    );
  }
  return (
    <>
      {photoArray &&
        photoArray.map((photo) => {
          const src = `data:${photo.mim};base64,${photo.image}`;
          return (
            <img
              src={src}
              alt="uploaded_image"
              className="photoloader__photouploaded"
            />
          );
        })}
      {content}
    </>
  );
};

export default PhotoLoader;