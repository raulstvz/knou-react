import { React, useState } from "react";
import "./CreateAccountPage.css";
import { useHistory } from "react-router";
import LocationDetailForm from "../components/forms/LocationDetailForm";
import UserDescriptionForm from "../components/forms/UserDescriptionForm";
import PhotosLoadForm from "../components/forms/PhotosLoadForm";
import AgeDetailForm from "../components/forms/AgeDetailForm";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const TOTAL_STEPS = 4
const CreateAccountPage = () => {

    const history = useHistory();

    const localStorageUser = JSON.parse(localStorage.getItem('user')); // State
    const userId = localStorageUser._id
    const signup_step = localStorageUser.signup_step
    const signup_completed = localStorageUser.signup_completed

    /* TODO: 
        Redirect non-registered users to landing.
     */

    /* const userItem = localStorage.getItem("user");

    const userId = '';
    const signup_step = 0;

    if (userItem) {
        const localStorageUser = JSON.parse(userItem);
        if (localStorageUser.signup_completed === true) {
            userId = localStorageUser._id
            signup_step = localStorageUser.signup_step
        }
    } else {
        history.push("/")
    }; */

    /* Variables controlling the stepper */
    
    const [currentStep, setCurrentStep] = useState(signup_step)

    return (
        <>
            <Header />
            <div className="CreateAccountPage__container">
                {currentStep === 0 &&
                    <AgeDetailForm
                        totalSteps={TOTAL_STEPS}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        userId={userId}
                    />
                }
                {currentStep === 1 &&
                    <LocationDetailForm
                        totalSteps={TOTAL_STEPS}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        userId={userId}
                    />
                }
                {currentStep === 2 &&
                    <UserDescriptionForm
                        totalSteps={TOTAL_STEPS}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        userId={userId}
                    />
                }
                {currentStep === 3 &&
                    <PhotosLoadForm
                        totalSteps={TOTAL_STEPS}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        userId={userId}
                    />
                }
{/*                 {localStorageUser === false &&
                    history.push("/")
                }
                {signup_completed === true &&
                    history.push("/profile")
                } */}
            </div>
            <Footer />
        </>
    )
};


export default CreateAccountPage;