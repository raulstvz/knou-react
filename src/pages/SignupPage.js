import "./SignupPage.css";
import LocationDetailForm from "../components/forms/LocationDetailForm";
import UserDescriptionForm from "../components/forms/UserDescriptionForm";

const SignUpPage = () => {
    return (

        <div className="signUpPage_container">
            <LocationDetailForm/>
            <UserDescriptionForm/>
        </div>
    )
};

export default SignUpPage;