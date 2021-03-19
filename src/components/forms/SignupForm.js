import { React, useState } from "react";
import { useHistory } from "react-router";
import "./Forms.css";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import validateEmail from "../../utils/validateEmail"
import {API_ROOT} from "../../hostSettings"

const SignUpForm = () => {
  const history = useHistory();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorStyle, setErrorStyle] = useState({

    'firstname': 'errorInvisible',
    'lastname': 'errorInvisible',
    'email': 'errorInvisible',
    'password': 'errorInvisible',
  });
  //Body
  const body = {
    firstname: firstname,
    lastname: lastname,
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
    if (!validateEmail(email) && password.length < 5 && firstname.length === 0 && lastname.length === 0) {
      setErrorStyle({

        'email': 'errorVisible',
        'password': 'errorVisible',
        'firstname': 'errorVisible',
        'lastname': 'errorVisible'
      })
    } else if (password.length < 5) {
      setErrorStyle({
        'firstname': 'errorInvisible',
        'lastname': 'errorInvisible',
        'email': 'errorInvisible',
        'password': 'errorVisible',
      })
    } else if (!validateEmail(email)) {
      setErrorStyle({
        'email': 'errorVisible',
        'password': 'errorInvisible',
      })
    } else if (firstname.length === 0) {
      setErrorStyle({
        'firstname': 'errorInvisible',
        'lastname': 'errorInvisible',
        'email': 'errorInvisible',
        'password': 'errorVisible',
      })
    }
    else if (lastname.length === 0) {
      setErrorStyle({
        'firstname': 'errorInvisible',
        'lastname': 'errorVisible',
        'email': 'errorInvisible',
        'password': 'errorInvisible',
      })
    }
    else {
      fetch("API_ROOT/api/users", options).then(async () => {
        return await fetch("API_ROOT/api/auth/login", options)
          .then((response) => response.json())
          .then((json) => {
            localStorage.setItem("token", json.token);
            localStorage.setItem("user", JSON.stringify(json.user));
            history.replace("/create-account");
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
          className={errorStyle.firstname}
          placeholder="First Name"
          required
          onChange={(e) =>
            setFirstname(e.target.value)

          }
        />
        <span className={errorStyle.firstname}>You must be write something...</span>
        <input
          name="source"
          className={errorStyle.lastname}
          placeholder="Last Name"
          required
          onChange={(e) =>
            setLastname(e.target.value)
          }
        />
        <span className={errorStyle.lastname}>You must be to write something...</span>
        <input
          className={errorStyle.email}
          placeholder="Email"
          type="text"
          name="email"
          reqiored
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className={errorStyle.email}>Invalid email</span>
        <input
          name="source"
          className={errorStyle.password}
          type="password"
          placeholder="Password"
          required
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
