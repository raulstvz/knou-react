import { React, useState } from "react";
import "./Forms.css";
import Button from "../button/Button";
import Stepper from "../stepper/Stepper";
import femaleIcon from "../../assets/gender icons/femaleIcon.svg"
import maleIcon from "../../assets/gender icons/maleIcon.svg"
import maleFemaleIcon from "../../assets/gender icons/maleFemaleIcon.svg"
import orientaSexMaleFemaleIcon from "../../assets/gender icons/orientaSexMaleFemaleIcon.svg"

const AgeDetailForm = ({ totalSteps, currentStep, setCurrentStep, userId }) => {
  const [formData, setFormData] = useState({
    userAge: 30,

    ageStart: 25,
    ageEnd: 35,
    gender: undefined,
    orientation: undefined,

  });
console.log(formData.gender)
  /* Data to be passed as body in the fetch */
  const body = {
    age: formData.userAge,
    age_range: [formData.ageStart, formData.ageEnd],

    signup_step: currentStep + 1,
    signup_completed: false,
    updated: new Date(),
    gender: formData.gender,
    orientation: formData.orientation,
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

  const selectGender = ()=>{
    alert('you have selected '+ formData.gender) 
  }
  const selectOrientation = ()=>{
    alert ('Your orientation is ' + formData.orientation)
  }

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
        <div className="form_radio">
          {/* <label className="form_label">Chose your gender </label> */}
          <p>Choose your gender</p>
          
          <label for="male"><img src={maleIcon} alt="male simbol" className="iconGender"/>Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onClick={(selectGender)}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
          
          <label for="female"><img src={femaleIcon} alt="female simbol" className="iconGender"/>Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onClick={(selectGender)}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
          
          <label for="male-female"><img src={maleFemaleIcon} alt="male-female simbol" className="iconGender"/>Male-Female</label>
          <input
            type="radio"
            id="male-female"
            name="gender"
            value="male-female"
            onClick={(selectGender)}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
        </div>
        <br />
        <div className="form_radio">
      
          <p>Choose your sexual orientation</p>

         
          <label for="heterosexual"> Heterosexual<img src={femaleIcon} alt="female simbol" className="iconHeteroM"/><img src={maleIcon} alt="male simbol" className="iconHeteroF"/></label>
          <input
            type="radio"
            id="heterosexual"
            name="orientation"
            value="heterosexual"
            onClick={(selectOrientation)}
            onChange={(e) =>
              setFormData({ ...formData, orientation: e.target.value })
            }
          />

        <label for="homosexual">Homosexual
        <img src={femaleIcon} alt="female simbol" className="iconHomoFa"/>
        <img src={femaleIcon} alt="female simbol" className="iconHomoFb"/>
        <img src={maleIcon} alt="male simbol" className="iconHomoMa"/>
        <img src={maleIcon} alt="male simbol" className="iconHomoMb"/>
        </label>

          <input
            type="radio"
            id="homosexual"
            name="orientation"
            value="homosexual"
            onClick={(selectOrientation)}
            onChange={(e) =>
              setFormData({ ...formData, orientation: e.target.value })
            }
          />

          <label for="bisexual">Bisexual<img src={orientaSexMaleFemaleIcon} alt="male-female simbol" className="iconGender"/></label>
          <input
            type="radio"
            id="bisexual"
            name="orientation"
            value="bisexual"
            onClick={(selectOrientation)}
            onChange={(e) =>
              setFormData({ ...formData, orientation: e.target.value })
            }
          />
          {/* <input
            type="radio"
            id="transexual"
            name="orientation"
            value="transexual"
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
          Transexual */}
        </div>

        <p>How old are you?</p>
        <input
          name="source"
          className="form__input"
          placeholder="Your Age"
          onChange={(e) =>
            setFormData({ ...formData, userAge: parseInt(e.target.value) })
          }
          style={{ "max-width": "25%" }}
        />
        <p>What is the age range you are insterested in?</p>
        <div className="slider__container">
          <div className="form_slider_age">
            <div className="value">
              <div className="buble">{formData.ageStart + " years"}</div>
            </div>
            <input
              type="range"
              min="18"
              max="75"
              value={formData.ageStart}
              step="1"
              onChange={(e) =>
                setFormData({ ...formData, ageStart: parseInt(e.target.value) })
              }
            />
          </div>

          <div className="form_slider_age">
            <div className="value">
            <div className="buble">{formData.ageEnd + " years"}</div>
            </div>
            <input
              type="range"
              min="18"
              max="75"
              value={formData.ageEnd}
              step="1"
              onChange={(e) =>
                setFormData({ ...formData, ageEnd: parseInt(e.target.value) })
              }
            />
          </div>
        </div>

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


export default AgeDetailForm;
