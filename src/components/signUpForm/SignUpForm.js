import { React, useState } from "react";
import { useHistory } from "react-router";
import "./SignUpForm.css";
import Logo from "../../assets/logo/image 2.png";
import Button from "../button/Button";

const SignUpForm = () => {
  const history = useHistory();

  //formData : combo for the inputs
  const [formData, setFormData] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    avatar: undefined,
  });

  //Body
  const body = {
    username: formData.username,
    email: formData.email,
    password: formData.password,
    avatar: formData.avatar,
    usercreation: new Date(),
    premium: false,
  };

  console.log(body);

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
    history.push("/profileform");
  };

  return (
    <div className="signupform__container">
      <img className="Logo__form" src={Logo} alt="logo" />
      <h4>Create new account</h4>
      <form className="FormSignUp_container">
        <label className="label_form">Username</label>
        <input
            type="text"
            className="input_form"
            placeholder="Insert your Username"
          name="source"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />

        <label className="label_form">Email </label>
        <input
        type="email"
         placeholder="Insert your Email"
         className="input_form"
          name="source"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label className="label_form">Password</label>
        <input
         type="password"
         placeholder="Insert your password"
         className="input_form"
          name="source"
          type="password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <label className="label_form">Avatar</label>
        <input
        type="text"
        placeholder="Insert your avatar"
         className="input_form"
          name="source"
          onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
        />

        <div className="createbutton__container">
          <Button name="Create" onClick={handleCreate} />
        </div>

      </form>
    </div>
  );
};

export default SignUpForm;
