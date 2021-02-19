import { React, useState } from 'react';
import cameraIcon from '../../assets/icons/camera.svg'
import './PhotoLoader.css'

const PhotoLoader = ({userId}) => {

    const handleImageUpload = (e) => {
        /* TODO: DEFINE PUT/POST ACTION AGAINST MONGODB */

        let form_data = new FormData(); // https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/FormData
        form_data.append('updated', new Date());
        form_data.append('photo', e.target.files[0]);



        const options = {
            method: "PUT",
            body: form_data
        };

        debugger;

        fetch("http://localhost:3001/api/users/" + userId + "/photos", options)
            .then((res) => {
                if (res.ok) {
                    // fetch de les imatges del user
                    // .then(respobse => setPhotoArray([respose])) 
                }
                else {
                    console.log("error")
                }
            })
    };

    const [photoArray, setPhotoArray] = useState([]);

    const MAX_ALLOWED = 8;
    const photosAllowed = MAX_ALLOWED - photoArray.length

    const content = []
    // const photo = `data:${photo.mimeType};base64,${photo.image}`;
    for (var i = 0; i < photosAllowed; i++) {
        content.push(
            <div className="photoloader__container">
                <img src={cameraIcon} alt="camera_icon" />
                <form id="photo"
                    encType="multipart/form-data"
                    className="form__container"
                    onSubmit={(e) => {
                        e.preventDefault()
                    }}
                >
                    <input type="file" name="photos" id="photos" onChange={handleImageUpload} />
                </form>
            </div>
        )
    }

    return (
        <>{photoArray.map((photo) => {
            return (
                <img src={photo} alt="uploaded_image" className="photoloader__photouploaded" />
            )
        })}
            {content}
        </>
    )
}

export default PhotoLoader