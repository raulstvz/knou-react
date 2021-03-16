import "./UserProfilePage.css";
import Header from "../components/header/Header";
import Button from "../components/button/Button";
import BoxMenu from "../components/boxmenu/BoxMenu";
import { useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";

const UserProfilePage = () => {
  const [age, setAge] = useState('');

  const [errorStyle, setErrorStyle] = useState({
    'age': 'errorInvisible',
    // 'gender': 'errorInvisible',
    // 'orientation': 'errorInvisible'


  });
const history = useHistory();
const [profile, setProfile] = useState([]);
const user = JSON.parse(localStorage.getItem("user")); //tenemos el usuario desde el local.
console.log(user.lastname); // prueba si pilla o no

const body = {
  age: age,
  // age_range: [formData.ageStart, formData.ageEnd],
  // signup_step: currentStep + 1,
  // signup_completed: false,
  // updated: new Date(),
  // gender: formData.gender,
  // orientation: formData.orientation,
};

const updateInfo = () => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  if (age <= 17) {
    setErrorStyle({
      'age': 'errorVisible'
    })
  // } else if (formData.gender === undefined && formData.orientation === undefined) {
    setErrorStyle({
      // 'gender': 'errorVisible',
      // 'orientation': 'errorVisible'
    })

  } else {
    fetch(`http://localhost:3001/api/user/${user._id}`)
      .then((response) => {
        if (response.status === 200) {
          // setCurrentStep(currentStep + 1)
        }
      }
      )

  }
};

useEffect(() => {
  fetch(`http://localhost:3001/api/profile${user._id}`)
    .then((promise) => {
      if (promise.status === 200) {
        return promise.json();
      }
    })
    .then((json) => setProfile(json));
}, []);



return (
    <div className="userProfile__container">
    <Header
        icons={<BoxMenu />}
        button={
        <Button
            name="Log out"
            onClick={() => history.push("/")}
            style="button_white_small"
        />
        } //falta crear la función de goToSignOut

    />
    <div className="currentInfo_container">
        <div className="nonTouchableInfo_container">
            <p>Your name is {user.firstname}</p>
            <p>Your lastname is {user.lastname}</p>
            <p>your personal email is {user.email}</p>
        </div>
        <div className="touchableInfo_container">
          <div className="currentTouchableInfo_container">
              <p>Your age is {user.age}</p>
              <p>{user.age_range[0]}</p>
              <p>{user.age_range[1]}</p>
              <p>Your gender is {user.gender}</p>
              <p>Your sex orientation is {user.orientation}</p>
              <p>hobbies are {user.hobbies[2]}</p>
              <p>Description {user.description}</p>
              <p>modify photos</p>
          </div>
          <div className="newTouchableInfo_container">
          <input
          type="number"
          name="source"
          placeholder="Your Age"
          onChange={(e) =>
            setAge(e.target.value)

          }
          style={{ "max-width": "25%", "display": "block" }}
        />
          </div>
          <Button
            name="Update Info"
            style="button_dark_small"
            onClick={updateInfo}
          />
        </div>
    </div>


    <Footer />
    </div>
);
};

export default UserProfilePage;