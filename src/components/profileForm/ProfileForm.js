import { React, useState } from "react";
import { useHistory } from "react-router";
import "./ProfileForm.css";
import Logo from "../../assets/logo/image 2.png";
import Button from "../button/Button";

const ProfileForm = () => {

    const history = useHistory();

    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        firstname: undefined,
        lastname: undefined,
        birthdate: new Date(),
        location: undefined,
        description: undefined,
        gender: undefined,
        //photos
        //hobbies
    })

    //Body
    const body = {
        profile: {
            firstname: formData.firstname,
            lastname: formData.lastname,
            //birthdate
            location: formData.location,
            description: formData.description,
            gender: formData.gender
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
        history.push("/preferencesform")
    };

    return (
        <div className="signupform__container">
            <div className="Logo__form" src={Logo} alt="logo" />
            <h4>Create new account</h4>
            <form>
                <label>
                    First Name
              <input
                        name="source"
                        onChange={(e) =>
                            setFormData({ ...formData, firstname: e.target.value })}>
                    </input>
                </label>
                <label>
                    Last Name
              <input
                        name="source"
                        onChange={(e) =>
                            setFormData({ ...formData, lastname: e.target.value })}>
                    </input>
                </label>
                <label>
                    Location
              <input
                        name="source"
                        onChange={(e) =>
                            setFormData({ ...formData, location: e.target.value })}>
                    </input>
                </label>
                <label>
                    Description
              <input
                        name="source"
                        onChange={(e) =>
                            setFormData({ ...formData, description: e.target.value })}>
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
                <div className="createbutton__container">
                    <Button name="Create" onClick={handleCreate} />
                </div>
            </form>
        </div>
    );
};

export default ProfileForm;
