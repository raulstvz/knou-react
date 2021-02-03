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
      <form className="form__container">
        <div className="form__logo">
          <Logo />
        </div>
        <h4 className="form__title">Create a new account</h4>
        <label className="form__label">Username</label>
        <input
          name="source"
          className="form__input"
          placeholder=" Username"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <label className="form__label">Email</label>
        <input
          name="source"
          className="form__input"
          type="email"
          placeholder=" Email adress"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <label className="form__label">Password</label>
        <input
          name="source"
          className="form__input"
          type="password"
          placeholder=" Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <div className="button__container">
          <Button name="Create" onClick={handleCreate} />
        </div>
      </form>
  );
};

export default SignUpForm;
