import { React, useState } from "react";
import { useHistory } from "react-router";
import "./SignupForm.css";
import Logo from "../../components/logo/Logo";
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
    <div className="signUpForm__contanier">
       <div className="Logo__form">
      <Logo/>
      </div>
      <h4 className="title_form">Sign up for your new account</h4>
      <form className="formSignUp_container">
        <label className="username_container">
          Username
          <input
            name="source"
            className="input_form"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          ></input>
        </label>
        <label className="email_container">
          Email
          <input
            name="source"
            className="input_form"
            type="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          ></input>
        </label>
        <label className="password_container">
          Password
          <input
            name="source"
            className="input_form"
            type="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          ></input>
        </label>
        <label className="avatar_container">
          Avatar
          <input
            name="source"
            className="input_form"
            onChange={(e) =>
              setFormData({ ...formData, avatar: e.target.value })
            }
          ></input>
        </label>
        <div className="createbutton__container">
          <Button name="Create" onClick={handleCreate} />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
