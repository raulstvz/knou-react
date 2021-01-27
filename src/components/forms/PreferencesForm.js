import { React, useState } from "react";
import { useHistory } from "react-router";
import "./Forms.css";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import Tag from "../tag/Tag";
import TagOptions from "../tag/TagOptions"

const PreferencesForm = () => {

    const history = useHistory();

    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        ageStart: "50",
        ageEnd: "50",
        orientation: undefined,
        distance: "50",
        hobbies: undefined
    })

    //Assign hobbies from selected tags in the form
    const [selectedHobbies, setSelectedHobbies] = useState([])

    const handleSelectedHobbies = (option) => {
        if (!selectedHobbies.includes(option)) {
            setSelectedHobbies([...selectedHobbies, option]);
        } else if (selectedHobbies.includes(option)) {
            setSelectedHobbies(selectedHobbies.filter(item => item !== option))
        }
        setFormData({ ...formData, hobbies: selectedHobbies });
    }

    //Body
    const body = {
        preferences: {
            orientation: formData.orientation,
            agerange: [
                parseInt(formData.ageStart),
                parseInt(formData.ageEnd)
            ],
            distance: parseInt(formData.distance),
            hobbies: formData.hobbies
        }
    };

    console.log(body)

    //Fetch function
    const handleCreate = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };

        fetch("http://localhost:3001/api/users", options)
        history.push("/")
    };

    return (
        <div className="form">
            <form className="form__container">
                <div className="form_logo">
                    <Logo />
                </div>
                <h4 className="form_title">Select your preferences</h4>
                <label className="form_label">Age range</label>
                <div className="form_slider">
                    Minimum: {formData.ageStart}
                    <input type="range" min="18" max="75" step="1"
                        onChange={(e) =>
                            setFormData({ ...formData, ageStart: e.target.value })
                        }
                    />
                    Maximum: {formData.ageEnd}
                    <input type="range" min="18" max="75" step="1"
                        onChange={(e) =>
                            setFormData({ ...formData, ageEnd: e.target.value })
                        }
                    />
                </div>
                <label className="form_label">Your sexual orientation</label>
                <div className="form_radio">
                    <input
                        type="radio" id="heterosexual" name="gender" value="heterosexual"
                        onChange={(e) =>
                            setFormData({ ...formData, orientation: e.target.value })
                        } />Heterosexual
                    <input type="radio" id="homosexual" name="gender" value="homosexual"
                        onChange={(e) =>
                            setFormData({ ...formData, orientation: e.target.value })
                        } />Homosexual
                    <input type="radio" id="bisexual" name="gender" value="bisexual"
                        onChange={(e) =>
                            setFormData({ ...formData, orientation: e.target.value })
                        } />Bisexual
                </div>
                <label className="form_label">Distance from your location</label>
                <div className="form_slider">
                    Kms: {formData.distance}
                    <input type="range" min="0" max="100" step="1"
                        onChange={(e) =>
                            setFormData({ ...formData, distance: e.target.value })
                        }
                    />
                </div>
                <label className="form_label">It's hobbies and interests</label>
                <div className="form_tags">
                    {TagOptions.map((option) => {
                        return (
                            <div onClick={() => handleSelectedHobbies(option)}>
                                <Tag name={option} />
                            </div>
                        )
                    })}
                </div>

                <div className="createButton_container">
                    <Button name="Save options" onClick={handleCreate} />
                </div>
            </form>
        </div>
    );
};

export default PreferencesForm;

