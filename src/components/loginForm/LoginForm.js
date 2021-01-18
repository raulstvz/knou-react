import "./LoginForm.css";
import { useState } from "react";
import Logo from "../../assets/logo/image 2.png";
import { useHistory } from "react-router-dom";
import Button from "../button/Button";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const body = {
    email: email,
    password: password,
  };

  console.log(body);

  const handleLogin = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:3001/login", options)
      .then((response) => response.json())
      .then((json) => {
        /* .then(json => console.log('token', json)); */
        localStorage.setItem("token", json.token);
        localStorage.setItem("user", JSON.stringify(json.user));
        history.replace("/user");
        window.location.reload(false);
      });
  };

  return (
    <div className="LoginForm__contanier">
      <img className="Logo__form" src={Logo} alt="logo"/>
      <form className="FormLogin_container">
       
          <label className="label_form"> Email </label>
          <input
            className="input_form"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Put your email adress"
          />

    
          <label className="label_form"> Password </label>
          <input
            className="input_form"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Put your email adress"
          />
    
        <div className="Button__container">
          <Button
            name="Login"
            alt="Button to acces App"
            onClick={handleLogin}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
