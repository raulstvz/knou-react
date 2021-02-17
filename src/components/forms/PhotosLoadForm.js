import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Forms.css";
import Button from "../button/Button";
import PhotoLoader from "../photoLoader/PhotoLoader";
import Stepper from "../stepper/Stepper"

const PhotosLoadForm = ({ totalSteps, currentStep, setCurrentStep, userId }) => {

    const history = useHistory()

    /* Controls the photo insertion through the PhotoLoader component */
    const [photoArray, setPhotoArray] = useState(null);


    /* useEffect(() => {
        setFormData({ ...formData, photos: photoArray })
    }, [photoArray]) */

    /* Data to be passed as body in the fetch */
    const handleImageChange = (e) => {
        setPhotoArray(e.target.files);
    };

    /* Actions for the buttons in the forms */
    const handleFinish = () => {
        /* TODO: DEFINE PUT/POST ACTION AGAINST MONGODB */

        let form_data = new FormData(); // https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/FormData
        form_data.append('sigup_step', currentStep + 1);
        form_data.append('updated', new Date());
        form_data.append('signup_completed', true);
        Array.from(photoArray).forEach(photo => {
            form_data.append('photos', photo, photo.name);
        });
        
       

        const options = {
            method: "PUT",
            body: form_data
        };

        fetch("http://localhost:3001/api/users/" + userId + "/photos", options)
            .then((res) => {
                if (res.ok) {
                    /* history.push("/profile") */
                }
                else {
                    console.log("error")
                }
            })
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1)
    }
    
    return (
        <div className="form">
            <Stepper steps={totalSteps} currentStep={currentStep} />

            <h1>We can't wait to meet you.</h1>
            <p>Please fill the detail below so that we get to knou you</p>
            <br /><br />
            <p>It's show time! Pick up to 8 pictures of you:</p>
            <div className="form__photos">
                <PhotoLoader photoArray={photoArray} />
            </div>
            <form id="photo"
                encType="multipart/form-data"
                className="form__container"
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <input type="file" name="photos" id="photos" onChange={handleImageChange} multiple />
            </form>
            <div className="button__container">

                <Button
                    name="Back"
                    style="button_white_small"
                    onClick={handlePrevious}
                />
                <Button
                    name="Finish"
                    style="button_dark_small"
                    onClick={handleFinish}
                />
            </div>
        </div>
    )
}

export default PhotosLoadForm;