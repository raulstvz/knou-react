import "./SignupPage.css";
import SignupForm from "../components/forms/SignupForm";
import LocationDetailForm from "../components/forms/LocationDetailForm";
import UserDescriptionForm from "../components/forms/UserDescriptionForm";
import PhotosLoadForm from "../components/forms/PhotosLoadForm";
import AgeDetailForm from "../components/forms/AgeDetailForm";
import girlImage from "../assets/forms/girl_image.png"

const SignUpPage = () => {
    return (

        <div className="signUpPage_container">

            <div className="main__container">
                <div className="image_container">
                    <img src={girlImage} className="image_girl" />
                </div>
                <div className="form_block_container">
                    <SignupForm />
                </div>
            </div>


            <AgeDetailForm />
            <LocationDetailForm />
            <UserDescriptionForm />
            <PhotosLoadForm />
        </div>
    )
};

export default SignUpPage;