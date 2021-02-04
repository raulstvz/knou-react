import { React, useState } from "react";
import { useHistory } from "react-router";
import "./Forms.css";
import Logo from "../logo/Logo";
import Button from "../button/Button";

const SignUpForm = () => {
  const history = useHistory();

  //formData : combo for the inputs
  const [formData, setFormData] = useState({
    firstname: undefined,
    lastname: undefined,
    email: undefined,
    avatar: undefined,
  });

  //Body
  const body = {
    account: {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      password: formData.password,
      usercreation: new Date(),
      premium: false,
    }
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
    <div className="form">
      <form className="form__container">
        <div className="form_logo">
          <Logo />
          <Button name="Login" style="button_white_small"/>
        </div>
        <span className="high_span">START FOR FREE</span>
        <h1 className="form_title">Create an account</h1>
        <input
          name="source"
          type="text"
          className="form_input"
          placeholder=" Firstname"
          onChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
        />

        <input
          name="source"
          className="form_input"
          type="text"
          placeholder="Last Name"
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
        />
        <input
          name="source"
          className="form_input"
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <input
          name="source"
          className="form_input"
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <div className="button_container">
          <Button name="Create" onClick={handleCreate} style="button_dark_great" />
          <span className= "low_span">Already have an account? <span className="color_span">Sign in</span></span>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;