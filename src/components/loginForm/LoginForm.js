import "./LoginForm.css";
import { useState,useEffect } from "react";
import Logo from "../logo/Logo";
import { useHistory } from "react-router-dom"
import Button from "../button/Button";

const LoginForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
   {/* const history = useHistory();
    const body = {
        email : email,
        password : password
        
    }
    const handleLogin = () => {
        const options = {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(body)
        };
      
    useEffect(()=>{
        fetch("http://localhost:5050/api", options) 
            .then(response => response.json())
            .then(json => {
                localStorage.setItem("token", json.token)
                localStorage.setItem("user", JSON.stringify(json.user, console.log("Im found")))
                //history.push("I think we can redigiged in the LandingPAge")
    },[] )*/}

    return (
        <div className="LoginForm__contanier">
            <div className="Logo__form">
                <Logo />
            </div>
            <form>
                <div className="Email__container">
                    <label> Email : </label>
                    <input type="text" onChange={(e) => setEmail((e.target.value))} placeholder="Put your email adress"></input>
                </div>
                <div className="Password__container">
                    <label> Password : </label>
                    <input type="password" onChange={(e) => setPassword((e.target.value))} placeholder="Put your email adress"></input>
                </div>
                <div className="Button__container" >
                    <Button name="Login" alt="Button to acces App"/> {/* onClick{() => handleLogin() }*/}
                </div>
            </form>

        </div>
    )
};

export default LoginForm;