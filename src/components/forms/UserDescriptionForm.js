import { React, useState } from "react";
import { useHistory } from "react-router";
import "./Forms.css";
import Button from "../button/Button";
import Tag from "../tag/Tag";
import Stepper from "../stepper/Stepper"

const UserDescriptionForm = () => {

    const history = useHistory();

    const [tagArray, setTagArray] = useState([])
    const [placeholder, setPlaceHolder] = useState("Type here and press enter")
    console.log(tagArray)

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setTagArray([...tagArray, e.target.value]);
            setPlaceHolder("Type here and press enter")
            e.target.value = placeholder
        }
    }

    return (
        <div className="form">
            <Stepper steps="4" currentStep="2" />
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
                /* onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                } */
                />
                <p>You can add up to 5 interests that we will use to find the best person for you</p>
                <div className="form__tags">
                    <Tag tagArray={tagArray} onKeyPress={handleKeyPress} placeholder={placeholder} />
                </div>
                <p>Great! We have almost everything we need! Now, get pretty! It's picture time!</p>
            </form>
            <div className="button__container">
                <Button name="Next step" color="dark" />
            </div>
        </div>
    )
}

export default UserDescriptionForm