import { React, useState, useEffect } from "react";
import "./Forms.css";
import Button from "../button/Button";
import Tag from "../tag/Tag";
import Stepper from "../stepper/Stepper";

const UserDescriptionForm = ({
  totalSteps,
  currentStep,
  setCurrentStep,
  userId,
}) => {
  /* Controls the tag array insertion */
  const [tagArray, setTagArray] = useState([]);
  const [placeholder, setPlaceHolder] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTagArray([...tagArray, e.target.value]);
      setPlaceHolder("");
      e.target.value = placeholder;
    }
  };
  const handleOnClick = (e) => {
    let tagName = e.target.nextSibling.textContent;
    setTagArray(tagArray.filter((tag) => tag !== tagName));
  };
  /* formData : combo for the inputs */
  const [formData, setFormData] = useState({
    description: undefined,
    hobbies: undefined,
  });

  useEffect(() => {
    setFormData({ ...formData, hobbies: tagArray });
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
    fetch("http://localhost:3001/api/users/" + userId, options);
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="form">
      <Stepper steps={totalSteps} currentStep={currentStep} />
      <form
        className="form__container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="h1_container">
          <h2>We can't wait to meet you.</h2>
        </div>
        <p>
          Please fill the detail below so that we get to{" "}
          <span className="colorPurple">knou</span> you
        </p>
        <br />
        <br />
        <p>
          Share a few words about you (psst! be creative, that's the key 😉 ):
        </p>
        <br />
        <br />
        <textarea
          className="form__text"
          placeholder="Your description..."
          rows="10"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <p>
          You can add up to 5 interests that we will use to find the best person
          for you
        </p>
        <div className="form__tags">
          <Tag
            tagArray={tagArray}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            onClick={handleOnClick}
          />
        </div>
        <p>
          Great! We have almost everything we need! Now, get pretty! It's
          picture time!
        </p>
      </form>
      <div className="button__container">
        <Button
          name="Back"
          style="button_white_small"
          onClick={handlePrevious}
        />
        <Button
          name="Next step"
          style="button_dark_small"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};
export default UserDescriptionForm;
