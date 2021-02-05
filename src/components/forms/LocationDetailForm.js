import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Forms.css"
import Button from "../button/Button";
import Map from "../map/Map"
import Modal from "../modal/Modal"
import Stepper from "../stepper/Stepper"

const LocationDetailForm = () => {

    const history = useHistory();

    /* const [geolocationEnabled, setGeolocationEnabled] = useState(false) */

    const [modalVisibility, setModalVisibility] = useState(true)
    const toggleModal = (modalVisibility) => {
        setModalVisibility(!modalVisibility)
    }

    useEffect(() => {
        if (!"geolocation" in window) {
            console.log("Geolocation Not Available");
            setModalVisibility(true)
        } else {
            console.log("Geolocation Available");
            navigator.geolocation.getCurrentPosition(function (position) {
                setFormData({
                    ...formData,
                    location: [
                        position.coords.latitude, position.coords.longitude
                    ]
                })
            });
        }
    }, [])

    const [formData, setFormData] = useState({
        location: [51.5, -0.1],
        distance: 4,
    })

    console.log(navigator.geolocation)

    return (
        <div className="form">
            <Stepper steps="4" currentStep="1" />
            <form
                className="form__container"
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <h1>We can't wait to meet you.</h1>
                <p>Please fill the detail below so that we get to knou you</p>
                <br /><br />
                <p>It seems that you are located at:</p>
                <div className="map__container">
                    <Map
                        position={formData.location}
                        distance={formData.distance}
                        zoom={10}
                    />
                </div>
                <p>What is the location range you are interested to meet people in?</p>
                <br /><br />
                <div className="form__slider">
                    <input type="range" min="1" max="50" value={formData.distance} step="1"
                        onChange={(e) =>
                            setFormData({ ...formData, distance: parseInt(e.target.value) })
                        }
                    />
                </div>
                <p>You are located at <b>{formData.location}</b> and are interested in meeting people up to <b>{formData.distance}</b> kilometers away</p>
            </form>
            <div className="button__container">
                <Button name="Next step" style="button_dark_small" />
            </div>
            <Modal
                visible={modalVisibility}
                handleClose={toggleModal}
                content={
                    <div className="modal__content">
                        <h1>Location Disabled</h1>
                        <h4>In order to find you the best people we need to know your location</h4>
                        <p>Please, enable the location service to proceed</p>
                    </div>
                }
            />
        </div>
    )
}

export default LocationDetailForm