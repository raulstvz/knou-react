import "./LoginPage.css";
import LoginForm from "../components/forms/LoginForm";
import boy from "../assets/forms/boy.png"
const LoginPage = () => {
    return (

        <div className="page__container">
            <div className="image_container">
                <img src={boy} className="image_boy" />
            </div>
            <div className="form_block_container">
                <LoginForm />

            </div>
        </div>
    )
};

export default LoginPage;