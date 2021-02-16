import { React, useState } from "react";
import "./Forms.css";
import Button from "../button/Button";
import Stepper from "../stepper/Stepper"

const AgeDetailForm = ({ totalSteps, currentStep, setCurrentStep, userId }) => {

    const [formData, setFormData] = useState({
        userAge: 30,
        ageStart: 25,
        ageEnd: 35,
        //gender: undefined,
        //orientation: undefined,
    })

    /* Data to be passed as body in the fetch */
    const body = {
        age: formData.userAge,
        age_range: [formData.ageStart, formData.ageEnd],
        signup_step: currentStep + 1,
        signup_completed: false,
        updated: new Date(),
        //gender: formData.gender,
        //orientation: formData.orientation
    };

    /* Actions for the buttons in the forms */
    const handleNext = () => {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        fetch("http://localhost:3001/api/users/" + userId, options)
        setCurrentStep(currentStep + 1)
    }

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1)
    }


    return (
        <div className="form">
            <Stepper steps={totalSteps} currentStep={currentStep}/>
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
                        setFormData({ ...formData, userAge: parseInt(e.target.value) })
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
                <p style={{ "margin-bottom": "50px" }}>You are <b>{formData.userAge} years old</b> and have interest
                in meeting people <b>between {formData.ageStart} and {formData.ageEnd}</b> years.</p>
                <div className="button__container">
                    <Button
                        name="Next step"
                        style="button_dark_small"
                        onClick={handleNext}
                    />
                </div>

            </form>
        </div>
    );
};

export default AgeDetailForm