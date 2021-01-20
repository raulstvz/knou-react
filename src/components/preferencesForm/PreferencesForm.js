import { React, useState } from "react";
import { useHistory } from "react-router";
import "./PreferencesForm.css";
import Logo from "../../components/logo/Logo";
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
        <div className="preferencesForm__container">
           <div className="Logo__form">
      <Logo/>
      </div>
            <h4 className="title_form">Select your preferences</h4>
            <form className="formPreferences_container">
                <label className="ageRange_container">
                    Age range
                  
                    <select  name="ageStart" onChange={(e) =>
                        setFormData({ ...formData, ageStart: e.target.value })}
                        className="input_form">
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </select>

                    <select  name="ageEnd" onChange={(e) =>
                        setFormData({ ...formData,  ageEnd: e.target.value })}
                        className="input_form">
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </select>
                  
                </label>
                <label className="gender_container">
                    Gender
                    <select onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })}
                        className="input_form">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </label>
                <label className="location_container">
                    Location
              <input
                        name="source"
                        className="input_form"
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