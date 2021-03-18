import "./UserProfilePage.css";
import Header from "../components/header/Header";
import Button from "../components/button/Button";
import BoxMenu from "../components/boxmenu/BoxMenu";
import { useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Tag from "../components/tag/Tag";

const UserProfilePage = () => {
  const [age, setAge] = useState('');

  const [errorStyle, setErrorStyle] = useState({
    'age': 'errorInvisible',
    // 'gender': 'errorInvisible',
    // 'orientation': 'errorInvisible'


  });
const history = useHistory();
const [profile, setProfile] = useState([]);
const [description, setDescription] = useState('')
const [placeholder, setPlaceHolder] = useState("");
const [tagArray, setTagArray] = useState([]);
const [formData, setFormData] = useState({
  hobbies: undefined,
  ageStart: 25,
  ageEnd: 35,});
const user = JSON.parse(localStorage.getItem("user")); 
console.log(user.lastname); // prueba si funciona

const body = {
  age_range: [formData.ageStart, formData.ageEnd],
  description: description,
  hobbies: formData.hobbies,
  updated: new Date(),
};

const updateInfo = () => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
    fetch(`http://localhost:3001/api/users/${user._id}`,options)
      .then((response) => {
        if (response.status === 200) {
        }
      }
      )

};

const handleKeyPress = (e) => {
  if (e.key === "Enter" && e.target.value !== "") {
    setTagArray([...tagArray, e.target.value]);
    setPlaceHolder("");
    e.target.value = placeholder;
  }
};
const handleOnClick = (e) => {
  let tagName = e.target.nextSibling.textContent;
  setTagArray(tagArray.filter((tag) => tag !== tagName));
};


// useEffect(() => {
//   fetch(`http://localhost:3001/api/profile${user._id}`)
//     .then((promise) => {
//       if (promise.status === 200) {
//         return promise.json();
//       }
//     })
//     .then((json) => setProfile(json));
// }, []);



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
        }
    />
    <h2 className="title_editProfile">Edit your profile</h2>
    <div className="currentInfo_container">
        <div className="nonTouchableInfo_container">
            <div className="nonTouchableInfo_section">
              <p>Your full name is {user.firstname}  {user.lastname}</p>
              <p>your email is <br></br>{user.email}</p>
              <p>Your age is {user.age}</p>
              <p>Your gender is {user.gender}</p>
              <p>Your sex orientation is <br></br>{user.orientation}</p>
            </div>
            <div><img src={user.photos[1]}/>Aquí va la foto,aunque no se renderiza</div>
        </div>
        <div className="touchableInfo_container">
          <div className="touchableInfo_section">
              <p>Your age range interest is:</p>
                <div className="currentTouchableAgeRange_container">
                  <p>{user.age_range[0]}</p>
                  <p>{user.age_range[1]}</p>
                </div>
              <p>hobbies are:
              <br></br>{user.hobbies[0]}
              <br></br>{user.hobbies[1]}
              <br></br>{user.hobbies[2]}
              <br></br>{user.hobbies[3]}
              <br></br>{user.hobbies[4]}</p>
              <p>Description <br></br>{user.description}</p>
          </div>
          <div className="newTouchableInfo_container">
            <div>new section goes here
              
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

        <div >
          <Tag
            tagArray={tagArray}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            onClick={handleOnClick} 
            />
        </div>

        <textarea
          className={errorStyle.description}
          placeholder="Your description..."
          rows="10"
          onChange={(e) =>{
            setDescription(e.target.value)
          console.log(description)}}
        />



            </div>
          </div>   
        </div>
        <div className="button_update">
          <Button
            name="Update Info"
            style="button_dark_small"
            onClick={updateInfo}
          /></div>
    </div>
    <Footer />
    </div>
);
};

export default UserProfilePage;