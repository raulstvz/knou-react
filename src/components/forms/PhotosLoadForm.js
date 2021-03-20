import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Forms.css";
import Button from "../button/Button";
import PhotoLoader from "../photoLoader/PhotoLoader";
import Stepper from "../stepper/Stepper"
import { API_ROOT } from "../../utils/hostSettings";

const PhotosLoadForm = ({ totalSteps, currentStep, setCurrentStep, userId }) => {
    const history = useHistory()
    /* Controls the photo insertion through the PhotoLoader component */
    /* Actions for the buttons in the forms */
    const body = {
        signup_step: currentStep + 1,
        signup_completed: true,
        updated: new Date(),
    }
    const handleFinsih = () => {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        fetch(`${API_ROOT}/api/users/` + userId, options);
        setCurrentStep(currentStep + 1);
        history.push("login");
        alert("Congratulations, your data has been saved correctly, now log in to find your ideal match")
    }
    const handlePrevious = () => {
        setCurrentStep(currentStep - 1)
    };
    return (
        <div className="form">
            <Stepper steps={totalSteps} currentStep={currentStep} onClick={handlePrevious} />
            <h2>We can't wait to meet you.</h2>
            <p>Please fill the detail below so that we get to <span className="colorPurple">knou</span> you</p>
            <br /><br />
            <p>It's show time! Pick up to 8 pictures of you:</p>
            <div className="form__photos">
                    <PhotoLoader userId={userId} />
            </div>
            <div className="button__container">
                <Button
                    name="Back"
                    style="button_white_small"
                    onClick={handlePrevious}
                />
                <Button
                    name="Finish!"
                    style="button_dark_small"
                    onClick={() => handleFinsih()}
                />
            </div>
        </div>
    )
}

export default PhotosLoadForm;