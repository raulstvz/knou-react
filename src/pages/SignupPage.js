import "./SignupPage.css";
import SignupForm from "../components/forms/SignupForm";
import girlImage from "../assets/forms/girl_image.png"


const SignUpPage = () => {

    return (
        <div className="signUpPage_container">
            <div className="main__container">
                <div className="image_container">
                    <img src={girlImage} alt="girl" className="image_girl" />
                </div>
                <div className="form_block_container">
                    <SignupForm />
                </div>
            </div>
        </div>
    )
};

export default SignUpPage;