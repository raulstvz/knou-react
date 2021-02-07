import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Forms.css";
import Button from "../button/Button";
import PhotoLoader from "../photoLoader/PhotoLoader";
import Stepper from "../stepper/Stepper"

const PhotosLoadForm = ({ totalSteps, currentStep, setCurrentStep, userId }) => {

    const history = useHistory()

    /* Controls the photo insertion through the PhotoLoader component */
    const [photoArray, setPhotoArray] = useState([]);
    const [formData, setFormData] = useState({
        photos: []
    })
    /* useEffect(() => {
        setFormData({ ...formData, photos: photoArray })
    }, [photoArray]) */

    /* Data to be passed as body in the fetch */
    const body = {
        photos: formData.photos,
        signup_step: currentStep + 1,
        updated: new Date(),
        signup_completed: true
    };

    /* Actions for the buttons in the forms */
    const handleFinish = () => {
        /* TODO: DEFINE PUT/POST ACTION AGAINST MONGODB */
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        fetch("http://localhost:3001/api/users/" + userId, options)
        history.push("/profile")
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1)
    }

    return (
        <div className="form">
            <Stepper steps={totalSteps} currentStep={currentStep} />
            <form
                className="form__container"
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <h1>We can't wait to meet you.</h1>
                <p>Please fill the detail below so that we get to knou you</p>
                <br /><br />
                <p>It's show time! Pick up to 8 pictures of you:</p>
                <div className="form__photos">
                    <PhotoLoader setPhotoArray={setPhotoArray} />
                </div>
            </form>
            <div className="button__container">
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