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
    <div className="form">
      <form className="form__container">
        <div className="form_logo">
          <Logo />
        </div>
        <h4 className="form_title">Create a new account</h4>
        <label className="form_label">Username</label>
        <input
          name="source"
          className="form_input"
          placeholder=" Username"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <label className="form_label">Email</label>
        <input
          name="source"
          className="form_input"
          type="email"
          placeholder=" Email adress"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <label className="form_label">Password</label>
          <input
            name="source"
            className="form_input"
            type="password"
            placeholder=" Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        <div className="button_container">
          <Button name="Create" onClick={handleCreate} />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
