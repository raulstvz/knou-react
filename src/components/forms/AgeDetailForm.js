import { React, useEffect, useState } from "react";
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
  const [errorAge, setErrorAge] = useState(false);
  
  const validatingAge = (age) => {
    return age >= 18   /* && age.match(/[0-9]/g) */;
  }

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
    fetch("http://localhost:3001/api/users/" + userId, options)
    .then((response) => {if(response.status === 200){
      setCurrentStep(currentStep + 1)} }
     )
     
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleAge = (age) => {
    if (age.target.value.length > 0) {
      if (validatingAge(age.target.value)) {
        setFormData({ ...formData, userAge: parseInt(age.target.value) });
        setErrorAge(false);
      } else {
        setErrorAge(true);
      }
    }
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
        <div className="form__radio">
        <p>Choose your gender</p>
          <div className="genderSection">
            
            <div  className="genderEspecificSection" >
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                />
            <label for="male" ><img src={maleIcon} alt="male simbol" className="iconGender"/>Male</label>
            </div>
            <div className="genderEspecificSection" >  
                  
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
              <label for="female"><img src={femaleIcon} alt="female simbol" className="iconGender"/>Female</label>
              </div>

          
            </div>
            <p>Choose your sexual orientation</p>
          <div className="orientationSection">
            <div className="orientationOption">
          <input
            type="radio"
            id="bisexual"
            name="orientation"
            value="bisexual"
            onChange={(e) =>
              setFormData({ ...formData, orientation: e.target.value })
            }
          />
            <label for="bisexual">Bisexual<img src={orientaSexMaleFemaleIcon} alt="male-female simbol" className="iconGender"/></label>

            </div>
            
            <div className="orientationOption">          
          <input
            type="radio"
            id="heterosexual"
            name="orientation"
            value="heterosexual"
           
            onChange={(e) =>
              setFormData({ ...formData, orientation: e.target.value })
            }
          />
          <label for="heterosexual">Heterosexual<img src={femaleIcon} alt="female simbol" className="iconHeteroM"/><img src={maleIcon} alt="male simbol" className="iconHeteroF"/></label>

          </div>
          
          <div className="orientationOption">
          <input
            type="radio"
            id="homosexual"
            name="orientation"
            value="homosexual"
          
            onChange={(e) =>
              setFormData({ ...formData, orientation: e.target.value })
            }
          />
          <label for="homosexual"><img src={femaleIcon} alt="female simbol" className="iconHomoFa"/>
        <img src={femaleIcon} alt="female simbol" className="iconHomoFb"/>Homosexual<img src={maleIcon} alt="male simbol" className="iconHomoMa"/><img src={maleIcon} alt="male simbol" className="iconHomoMb"/></label>
          </div>
          
            </div>
          </div>

        <p>How old are you?</p>
        <input
          name="source"
          className="form__input"
          placeholder="Your Age"
          onChange={(e) => {
            console.log(e.target.value);
            return handleAge(e);
          }}
          style={{ "max-width": "25%" , "display":"block"}}
        />

        {errorAge && <span className="youMustBeText">You must be older than 18 to continue</span>}
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
            style={!errorAge ? "button_dark_small" : "button_disable"}
            onClick={!errorAge && handleNext}
          />
        </div>
      </form>
    </div>
  );
};


export default AgeDetailForm;
