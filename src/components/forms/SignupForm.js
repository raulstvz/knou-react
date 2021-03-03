import { React, useState } from "react";
import { useHistory } from "react-router";
import "./Forms.css";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import validateEmail from "../../utils/validateEmail"


const SignUpForm = () => {
  const history = useHistory();

  //formData : combo for the inputs
  const [formData, setFormData] = useState({
    firstname: undefined,
    lastname: undefined,

  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorStyle, setErrorStyle] = useState({
    'email': 'errorInvisible',
    'password': 'errorInvisible',
  });
  //Body
  const body = {
    firstname: formData.firstname,
    lastname: formData.lastname,
    email: email,
    password: password,
    created: new Date(),
    premium: false,
    signup_step: 0,
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
    if (!validateEmail(email) && password.length < 5) {
      setErrorStyle({
        'email': 'errorVisible',
        'password': 'errorVisible',
      })
    } else if (password.length < 5) {
      setErrorStyle({
        'email': 'errorInvisible',
        'password': 'errorVisible',
      })
    } else if (!validateEmail(email)) {
      setErrorStyle({
        'email': 'errorVisible',
        'password': 'errorInvisible',
      })
    } else {
      fetch("http://localhost:3001/api/users", options).then(async () => {
        /* history.push("/create-account"); */
        return await fetch("http://localhost:3001/api/auth/login", options)
          .then((response) => response.json())
          /* .then(json => console.log('token', json)) */
          .then((json) => {
            localStorage.setItem("token", json.token);
            localStorage.setItem("user", JSON.stringify(json.user));
            history.replace("/create-account");
            /* TODO set history.replace => "/userpage" ...
              in case the user is not on signup_step=4, then redirect to signup step */
            window.location.reload(false);
          });
      });

    };
  }

  const goToLogIn = () => {
    history.push("/login");
  };

  return (
    <form className="sideform__container">
      <div className="sideform__subcontainer">
        <div className="form__logo__button">
          <Logo />
          <Button name="Login" style="button_white_small" onClick={goToLogIn} />
        </div>
        <span className="form__span">START FOR FREE</span>
        <h2 className="form__title">Create an account</h2>
        <input
          name="source"
          className="form__input"
          placeholder="First Name"
          onChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
        />
        <input
          name="source"
          className="form__input"
          placeholder="Last Name"
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
        />
        <input
          className={errorStyle.email}
          placeholder="Email"
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className={errorStyle.email}>Invalid email</span>
        <input
          name="source"
          className={errorStyle.password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className={errorStyle.password}>Password must be 5 characters long</span>
        <div className="button__container">
          <Button
            name="Get Started"
            style="button_dark_great"
            onClick={handleCreate}
          />
        </div>
        <p className="signupAdnsLogin_form">
          {" "}
          Already have an account?{" "}
          <span
            className="colorPurple"
            onClick={() => {
              history.push("/login");
            }}
          >
            {" "}
            Sign in{" "}
          </span>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
