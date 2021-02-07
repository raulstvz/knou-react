import "./LoginPage.css";
import LoginForm from "../components/forms/LoginForm";
import boyImage from "../assets/forms/boy_image.png"

const LoginPage = () => {
    return (
        <div className="main__container">
            <div className="image_container">
                <img src={boyImage} alt="boy" className="image_boy" />
            </div>
            <div className="form_block_container">
                <LoginForm />
            </div>
        </div>
    )
};

export default LoginPage;