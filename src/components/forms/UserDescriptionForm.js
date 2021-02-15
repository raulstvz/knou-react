import { React, useState, useEffect } from "react";
import "./Forms.css";
import Button from "../button/Button";
import Tag from "../tag/Tag";
import Stepper from "../stepper/Stepper"

const UserDescriptionForm = ({ totalSteps, currentStep, setCurrentStep, userId }) => {

    /* Controls the tag array insertion */
    const [tagArray, setTagArray] = useState([])
    const [placeholder, setPlaceHolder] = useState("")

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setTagArray([...tagArray, e.target.value]);
            setPlaceHolder("")
            e.target.value = placeholder
        }
    }

    /* formData : combo for the inputs */
    const [formData, setFormData] = useState({
        description: undefined,
        hobbies: undefined,
    })

    useEffect(() => {
        setFormData({ ...formData, hobbies: tagArray })
    }, [tagArray]);

    /* Data to be passed as body in the fetch */
    const body = {
        description: formData.description,
        hobbies: formData.hobbies,
        signup_step: currentStep + 1,
        signup_completed: false,
        updated: new Date(),
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
        <div className="form" >
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
                <p>Share a few words about you (psst! be creative, that's the key :) )</p>
                <p>What is the location range you are interested to meet people in?</p>
                <br /><br />
                <textarea
                    className="form__text"
                    placeholder="Your description..."
                    rows="10"
                    onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                    }
                />
                <p>You can add up to 5 interests that we will use to find the best person for you</p>
                <div className="form__tags">
                    <Tag tagArray={tagArray} setTagArray={setTagArray} onKeyPress={handleKeyPress} placeholder={placeholder} />
                </div>
                <p>Great! We have almost everything we need! Now, get pretty! It's picture time!</p>
            </form>
            <div className="button__container">
                <Button
                    name="Next step"
                    style="button_dark_small"
                    onClick={handleNext}
                />
            </div>
        </div >
    )
}
export default UserDescriptionForm