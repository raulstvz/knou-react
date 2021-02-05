import { React, useState } from "react";
import { useHistory } from "react-router";
import "./Forms.css";
import Button from "../button/Button";
import PhotoLoader from "../photoLoader/PhotoLoader";
import Stepper from "../stepper/Stepper"

const PhotosLoadForm = () => {

    const history = useHistory();

    return (
        <div className="form">
            <Stepper steps="4" currentStep="3" />
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
                    <PhotoLoader />
                </div>
            </form>
            <div className="button__container">
                <Button name="Finish" style="button_dark_small" />
            </div>
        </div>
    )
}

export default PhotosLoadForm;