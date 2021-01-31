import "./SignupPage.css";
import SignupForm from "../components/forms/SignupForm";
import LocationDetailForm from "../components/forms/LocationDetailForm";
import UserDescriptionForm from "../components/forms/UserDescriptionForm";
import PhotosLoadForm from "../components/forms/PhotosLoadForm";

const SignUpPage = () => {
    return (

        <div className="signUpPage_container">
            <SignupForm/>
            <LocationDetailForm/>
            <UserDescriptionForm/>
            <PhotosLoadForm />
        </div>
    )
};

export default SignUpPage;