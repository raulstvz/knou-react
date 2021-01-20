import { React, useState } from "react";
import { useHistory } from "react-router";
import "./SignupForm.css";
import Logo from "../../assets/logo/image 2.png";
import Button from "../button/Button";

const SignUpForm = () => {

    const history = useHistory();

    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        username: undefined,
        email: undefined,
        password: undefined,
        avatar: undefined
    })

    //Body
    const body = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        avatar: formData.avatar,
        usercreation: new Date(),
        premium: false,
    };

    console.log(body)

    //Fetch function
    const handleCreate = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };

        fetch("http://localhost:3001/api/users", options)
        history.push("/profileform")
    };

    return (
        <div className="signupform__container">
            <div className="Logo__form" src={Logo} alt="logo"/>
            <h4>Sign Up for your new Account</h4>
            <form>
                <label>
                    Username
              <input
                        name="source"
                        onChange={(e) =>
                            setFormData({ ...formData, username: e.target.value })}>
                    </input>
                </label>
                <label>
                    Email
              <input
                        name="source"
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })}>
                    </input>
                </label>
                <label>
                    Password
              <input
                        name="source"
                        type="password"
                        onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })}>
                    </input>
                </label>
                <label>
                    Avatar
              <input
                        name="source"
                        onChange={(e) =>
                            setFormData({ ...formData, avatar: e.target.value })}>
                    </input>
                </label>
                <div className="createbutton__container">
                    <Button name="Create" onClick={handleCreate} />
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
