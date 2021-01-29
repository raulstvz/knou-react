import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Forms.css";
import Leaflet from 'leaflet/dist/leaflet.css'
import Button from "../button/Button";
import Map from "../map/Map"
import Modal from "../modal/Modal"

const LocationDetailForm = () => {

    const history = useHistory();

    /* const [geolocationEnabled, setGeolocationEnabled] = useState(false) */

    const [modalVisibility, setModalVisibility] = useState(true)
    const toggleModal = (modalVisibility) => {
        setModalVisibility(!modalVisibility)
    }

    useEffect(() => {
        if (!"geolocation"in window) {
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
            <form className="form__container">
                <h1>We can't wait to meet you.</h1>
                <p>Please fill the detail below so that we get to knou you</p>
                <br /><br />
                <p>It seems that you are located in:</p>
                <div className="map__container">
                    <Map
                        position={formData.location}
                        distance={formData.distance}
                        zoom={10}
                    />
                </div>
                <p>What is the location range you are interested in?</p>
                <br /><br />
                <div className="form__slider">
                    <input type="range" min="1" max="50" value={formData.distance} step="1"
                        onChange={(e) =>
                            setFormData({ ...formData, distance: parseInt(e.target.value) })
                        }
                    />
                </div>
                <p>You are located at {formData.location} and are interested in meeting people up to {formData.distance} kilometers away</p>
            </form>
            <div className="button__container">
                <Button name="Next step" color="dark" />
            </div>
            <Modal
                visible={modalVisibility}
                handleClose={toggleModal}
                content={
                    <div className="modal__content">
                        <h1>Location Disabled</h1>
                        <h4>In order to find you the best people we need to know your location</h4>
                        <p>Enable the location service and reload the page</p>
                    </div>
                }
            />
        </div>
    )
}

export default LocationDetailForm