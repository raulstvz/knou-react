import { React, useState } from "react";
import { useHistory } from "react-router";
import "./Forms.css";
import Button from "../button/Button";
import Stepper from "../stepper/Stepper"

const AgeDetailForm = () => {
    const history = useHistory();

    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        ageStart: "50",
        ageEnd: "50",
    });

    //Body
    const body = {
        preferences: {
            agerange: [parseInt(formData.ageStart), parseInt(formData.ageEnd)],
        },
    };



    return (
        <div className="form">
            <Stepper steps="4" currentStep="0" />
            <form className="form__container">
                <h1>We can't wait to meet you.</h1>
                <p>Please fill the detail below so that we get to knou you</p>
                <p>How old are you?</p>
                <br />
                <input
                    name="source"
                    className="form__input"
                    placeholder="Your Age"
                    onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                    }
                />
                <p>What is the age range you are insterested in</p>
                <div className="form__slider">
                    <input type="range" min="18" max="50" value="20" step="1"
                    /* onChange={(e) =>
                        setFormData({ ...formData, distance: parseInt(e.target.value) })
                    } */
                    />
                </div>
                <div className="form__slider">
                    <input type="range" min="18" max="50" value="30" step="1"
                    /* onChange={(e) =>
                        setFormData({ ...formData, distance: parseInt(e.target.value) })
                    } */
                    />
                </div>
                <div className="button__container">
                    <Button name="Next step" style="button_dark_small" />
                </div>
            </form>
        </div>
    );
};

export default AgeDetailForm