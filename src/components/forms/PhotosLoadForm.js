import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Forms.css";
import Button from "../button/Button";
import PhotoLoader from "../photoLoader/PhotoLoader";
import Stepper from "../stepper/Stepper"

const PhotosLoadForm = ({ totalSteps, currentStep, setCurrentStep, userId }) => {

    const history = useHistory()

    /* Controls the photo insertion through the PhotoLoader component */


    /* Actions for the buttons in the forms */

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
                <PhotoLoader userId={userId}/>
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
                    onClick={() => {history.push("swipepage")}}
                />
            </div>
        </div>
    )
}

export default PhotosLoadForm;