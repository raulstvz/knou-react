import { React, useState } from "react";
import { useHistory } from "react-router";
import "./Forms.css";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import Tag from "../tag/Tag";
import TagOptions from "../tag/TagOptions"

const ProfileForm = () => {

  const history = useHistory();

  //formData : combo for the inputs
  const [formData, setFormData] = useState({
    firstname: undefined,
    lastname: undefined,
    birthdate: "1995-10-05",
    location: undefined,
    description: undefined,
    gender: undefined,
    hobbies: undefined
    //photos
  });

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
    profile: {
      firstname: formData.firstname,
      lastname: formData.lastname,
      birthdate: formData.birthdate,
      location: formData.location,
      description: formData.description,
      gender: formData.gender,
      hobbies: formData.hobbies
      //photos
    },
  };

  //Fetch function
  const handleCreate = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:3001/api/users", options);
    history.push("/preferencesform");
  };

  return (
    <div className="form">
      <form className="form__container">
        <div className="form__logo">
          <Logo />
        </div>
        <h4 className="form__title">Let's define your profile</h4>
        <label className="form__label">First Name</label>
        <input
          className="form__input"
          onChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
        />
        <label className="form__label">Last Name</label>
        <input
          className="form__input"
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
        />
        <label className="form__label">Gender</label>
        <div className="form__radio">
          <input type="radio" id="male" name="gender" value="male"
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            } />Male
            <input type="radio" id="female" name="gender" value="female"
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            } />Female
        </div>
        <label className="form__label">Birth Date</label>
        <input
          className="form__input"
          type="date"
          value={formData.birthdate}
          onChange={(e) =>
            setFormData({ ...formData, birthdate: e.target.value })
          }
        />
        <label className="form__label">Description</label>
        <textarea
          className="form__text"
          rows="10"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <label className="form__label">Your hobbies and interests</label>
        <div className="form__tags">
          {TagOptions.map((option) => {
            return (
              <div onClick={() => handleSelectedHobbies(option)}>
                <Tag name={option} />
              </div>
            )
          })}
        </div>
        <div className="button__container">
          <Button name="Create" onClick={handleCreate} />
        </div>
      </form>
    </div >
  );
};

export default ProfileForm;
