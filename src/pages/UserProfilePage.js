import "./UserProfilePage.css";
import Header from "../components/header/Header";
import Button from "../components/button/Button";
import BoxMenu from "../components/boxmenu/BoxMenu";
import { useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Tag from "../components/tag/Tag";
import tagIcon from '../assets/icons/tag.svg'
import Modal from "../components/modal/Modal"
import PhotoLoader from "../components/photoLoader/PhotoLoader";

const UserProfilePage = () => {
  const [age, setAge] = useState('');

  const [errorStyle, setErrorStyle] = useState({
    'age': 'errorInvisible',
    'description': 'errorInvisible',
    'hobbies': 'errorInvisible'
  });

  const history = useHistory();
  const [photo, setPhoto] = useState([]);
  const [modalVisible, setModalVisible] = useState();
  const handleModalClose = () => setModalVisible(false);
  const [profile, setProfile] = useState();
  console.log(profile)
  const [description, setDescription] = useState('')
  const [placeholder, setPlaceHolder] = useState("");
  const [tagArray, setTagArray] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [formData, setFormData] = useState({
    hobbies: undefined,
    ageStart: 25,
    ageEnd: 35
  });
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
    fetch(`http://localhost:3001/api/users/${user._id}`, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      }
      )
      .then((json) => {
        localStorage.setItem("user", JSON.stringify(json))
        setProfile(json)
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTagArray([...tagArray, e.target.value]);
      setPlaceHolder("");
      e.target.value = placeholder;
    }
  };

  useEffect(() => {
    setFormData({ ...formData, hobbies: tagArray });
  }, [tagArray]);

  const handleOnClick = (e) => {
    let tagName = e.target.nextSibling.textContent;
    setTagArray(tagArray.filter((tag) => tag !== tagName));
  };


  useEffect(() => {
    fetch(`http://localhost:3001/api/users/${user._id}`)
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setProfile(json));
  }, []);


  //fetch de photos.
  useEffect(() => {
    fetch(`http://localhost:3001/api/photo/${user._id}/photos`)
      .then((promise) => {
        if (promise.status === 200) {
          return promise.json();
        }
      })
      .then((json) => setPhoto(json));
  }, []);

  const photoBuffer = photo.map((e) => {
    const src = `data:${e.mimeType};base64,${Buffer.from(e.photo.data).toString(
      "base64"
    )}`;
    return src;
  });
  const UpdatePhotos = () => {
    
      fetch(`http://localhost:3001/api/photo/${user._id}/photos`)
        .then((promise) => {
          if (promise.status === 200) {
            return promise.json();
          }
        })
        .then((json) => setPhoto(json));
          const photoBuffer = photo.map((e) => {
    const src = `data:${e.mimeType};base64,${Buffer.from(e.photo.data).toString(
      "base64"
    )}`;
    return src;
  });
    
  }
  return (
    <>
      {profile &&
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
            <div className="nonTouchableInfo_section">
              <p className="unchangeable_section">Your full name is {profile.firstname}  {profile.lastname}</p>
              <p className="unchangeable_section">your email is <br></br>{profile.email}</p>
              <p className="unchangeable_section">Your age is {profile.age}</p>
              <p className="unchangeable_section">Your gender is {profile.gender}</p>
              <p className="unchangeable_section">Your sex orientation is <br></br>{profile.orientation}</p>
              <div className="age_section">
                <p className="ageRange_title">Your age range interest is:</p>
                <div className="ageRange_container">
                  <p>{profile.age_range[0]}</p>
                  <p>{profile.age_range[1]}</p>
                </div>
              </div>
              <div className="hobbies_section">
                <p>Your hobbies are:</p>
                <div className="tag_profile_container">
                  <div className="tag__container__created">
                    <p>{profile.hobbies[0]}</p>
                    <img id="tagIcon" src={tagIcon} alt="tag_icon" />
                  </div>
                  <div className="tag__container__created">
                    <p>{profile.hobbies[1]}</p>
                    <img id="tagIcon" src={tagIcon} alt="tag_icon" />
                  </div>
                  <div className="tag__container__created">
                    <p>{user.hobbies[2]}</p>
                    <img id="tagIcon" src={tagIcon} alt="tag_icon" />
                  </div>
                  <div className="tag__container__created">
                    <p>{user.hobbies[3]}</p>
                    <img id="tagIcon" src={tagIcon} alt="tag_icon" />
                  </div>
                  <div className="tag__container__created">
                    <p>{user.hobbies[4]}</p>
                    <img id="tagIcon" src={tagIcon} alt="tag_icon" />
                  </div>
                </div>
              </div>
              <div className="description_section"><p>Description <br></br>{user.description}</p></div>

            </div>
            {/*  */}

            <div className="touchableInfo_container">
              <div className="touchableInfo_section">
                <div className="profilePicture__container">
                  <img src={photoBuffer[0]} className="profilePicture" onClick={() => setModalVisible(true)} />
                </div>


                <Modal handleClose={handleModalClose}
                  visible={modalVisible}
                  children={

                    <div >
                      
                    </div>
                  }>
                </Modal>


              </div>
              <div className="newTouchableInfo_container">
                <div >
                  <p className="newInfoTitle">Update your new profile!</p>

                  <div className="slider__container">
                    <div className="form_slider_age">
                      <div className="value">
                        <div className="buble_profile">{formData.ageStart + " years"}</div>
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
                        <div className="buble_profile">{formData.ageEnd + " years"}</div>
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
                    className="textarea_container"
                    placeholder="Your new description..."
                    rows="10"
                    onChange={(e) => {
                      setDescription(e.target.value)
                      console.log(description)
                    }}
                  />
                  <p>your last update was {user.updated}</p>
                  <div className="button_update">
                    <Button
                      name="Update Info"
                      style="button_dark_small"
                      onClick={updateInfo}
                    /></div>

                </div>

              </div>
            </div>
          </div>




          <Footer />
        </div>
      }
    </>
  );
};

export default UserProfilePage;