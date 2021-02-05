import { React, useState } from "react";
import { useHistory } from "react-router";
import "./Forms.css";
import Logo from "../logo/Logo";
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
    account: {
      username: formData.username,
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
    <form className="sideform__container">
      <div className="sideform__subcontainer">
        <div className="form__logo__button">
          <Logo />
          <Button name="Login" style="button_white_small" onClick={() => history.push("/login")} />
        </div>
        <span className="form__span">START FOR FREE</span>
        <h2 className="form__title">Create an account</h2>
        <input
          name="source"
          className="form__input"
          placeholder="First Name"
        /*onChange={(e) =>
           setFormData({ ...formData, username: e.target.value })
         } */
        />
        <input
          name="source"
          className="form__input"
          placeholder="Last Name"
        /* onChange={(e) =>
          setFormData({ ...formData, username: e.target.value })
        } */
        />
        <input
          name="source"
          className="form__input"
          type="email"
          placeholder="Email"
          /* onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          } */
        />
        <input
          name="source"
          className="form__input"
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <div className="button__container">
          <Button name="Get Started" style="button_dark_great" onClick={handleCreate} />
        </div>
      </div>
    </form >
  );
};

export default SignUpForm;
