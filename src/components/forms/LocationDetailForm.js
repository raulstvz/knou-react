import { React, useState, useEffect } from "react";
import "./Forms.css";
import Button from "../button/Button";
import Map from "../map/Map";
import Modal from "../modal/Modal";
import Stepper from "../stepper/Stepper";
import { API_ROOT } from "../../utils/hostSettings";

const LocationDetailForm = ({
  totalSteps,
  currentStep,
  setCurrentStep,
  userId,
}) => {
  /* const [geolocationEnabled, setGeolocationEnabled] = useState(false) */

  const [modalVisibility, setModalVisibility] = useState(true);
  const toggleModal = (modalVisibility) => {
    setModalVisibility(!modalVisibility);
  };

  useEffect(() => {
    if (!"geolocation" in window) {
      console.log("Geolocation Not Available");
      setModalVisibility(false);
    } else {
      console.log("Geolocation Available");
      navigator.geolocation.getCurrentPosition(function (position) {
        setFormData({
          ...formData,
          location: [position.coords.latitude, position.coords.longitude],
        });
      });
    }
  }, []);

  /* formData : combo for the inputs */
  const [formData, setFormData] = useState({
    location: [51.5, -0.1],
    distance: 4,
  });

  /* Data to be passed as body in the fetch */
  const body = {
    location: formData.location,
    distance_range: formData.distance,
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
    fetch(`${API_ROOT}/api/users/` + userId, options);
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="form">
      <Stepper steps={totalSteps} currentStep={currentStep} onClick={handleNext}/>
      <form
        className="form__container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1>We can't wait to meet you.</h1>
        <p>Please fill the detail below so that we get to knou you</p>
        <br />
        <br />
        <p>It seems that you are located at:</p>
        <div className="map__container">
          <Map
            position={formData.location}
            distance={formData.distance}
            zoom={10}
          />
        </div>
        <p>What is the location range you are interested to meet people in?</p>
        <br />
        <br />
        <div className="form__slider">
          <div className="value">
            <div className="buble">{formData.distance+ " kilometers"}</div>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            value={formData.distance}
            step="1"
            onChange={(e) =>
              setFormData({ ...formData, distance: parseInt(e.target.value) })
            }
          />
        </div>
        <p>
          You are located at{" "}
          <b>
            {formData.location[0]} latitude, {formData.location[1]} longitude{" "}
          </b>{" "}
          and are interested in meeting people up to <b>{formData.distance}</b>{" "}
          kilometers away
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
      <Modal
        visible={modalVisibility}
        handleClose={toggleModal}
        children={
          <div className="modal__content">
            <h1>Location Disabled</h1>
            <h4>
              In order to find you the best people we need to know your location
            </h4>
            <p>Please, enable the location service to proceed</p>
          </div>
        }
      />
    </div>
  );
};

export default LocationDetailForm;
