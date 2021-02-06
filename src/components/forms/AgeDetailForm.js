import { React } from "react";
import "./Forms.css";
import Button from "../button/Button";
import Stepper from "../stepper/Stepper"

const AgeDetailForm = ({ totalSteps, currentStep, formData, setFormData, action }) => {

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
                <p>How old are you?</p>
                <br />
                <input
                    name="source"
                    className="form__input"
                    placeholder="Your Age"
                    onChange={(e) =>
                        setFormData({ ...formData, userAge: e.target.value })
                    }
                    style={{ "max-width": "25%" }}
                />
                <p>What is the age range you are insterested in</p>
                <div className="form__slider">
                    <input type="range" min="18" max="75" value={formData.ageStart} step="1"
                        onChange={(e) =>
                            setFormData({ ...formData, ageStart: parseInt(e.target.value) })
                        }
                    />
                </div>
                <div className="form__slider">
                    <input type="range" min="18" max="75" value={formData.ageEnd} step="1"
                        onChange={(e) =>
                            setFormData({ ...formData, ageEnd: parseInt(e.target.value) })
                        }
                    />
                </div>
                <p style={{ "margin-bottom": "50px" }}>You are <b>{formData.userAge} years old</b> and have interest in meeting people <b>between {formData.ageStart} and {formData.ageEnd}</b> years.</p>
                <div className="button__container">
                    <Button
                        name="Next step"
                        style="button_dark_small"
                        onClick={action}
                    />
                </div>
            </form>
        </div>
    );
};

export default AgeDetailForm