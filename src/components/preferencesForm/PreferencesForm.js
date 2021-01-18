import { React, useState } from "react";
import { useHistory } from "react-router";
import "./PreferencesForm.css";
import Logo from "../../assets/image 2.png";
import Button from "../button/Button";

const PreferencesForm = () => {

    const history = useHistory();

    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        ageStart: undefined,
        ageEnd: undefined,
        gender: undefined,
        location: undefined,
        // hobbies: [],


    })

    //Body
    const body = {
        preferences: {
            gender: formData.gender,
            agerange: [formData.ageStart, formData.ageEnd],
            location: formData.location,
            //hobbies: formData.hobbies
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
        <div className="signupform__container">
            <div className="Logo__form" src={Logo} alt="logo" />
            <h4>Create new account</h4>
            <form>
                <label>
                    Age range
                    <input
                        name="ageStart"
                        onChange={(e) =>
                            setFormData({ ...formData, ageStart: e.target.value })}>
                    </input>
                    <input
                        name="ageEnd"
                        onChange={(e) =>
                            setFormData({ ...formData, ageEnd: e.target.value })}>
                    </input>
                </label>
                <label>
                    Gender
                    <select onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </label>
                <label>
                    Location
              <input
                        name="source"
                        onChange={(e) =>
                            setFormData({ ...formData, location: e.target.value })}>
                    </input>
                </label>
                <div className="createbutton__container">
                    <Button name="Create" onClick={handleCreate} />
                </div>
            </form>
        </div>
    );
};

export default PreferencesForm;