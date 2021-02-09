import { React, useState } from "react";
import "./CreateAccountPage.css";

import LocationDetailForm from "../components/forms/LocationDetailForm";
import UserDescriptionForm from "../components/forms/UserDescriptionForm";
import PhotosLoadForm from "../components/forms/PhotosLoadForm";
import AgeDetailForm from "../components/forms/AgeDetailForm";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";


const CreateAccountPage = () => {

    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    const userId = localStorageUser._id
    const signup_step = localStorageUser.signup_step

    console.log(localStorageUser)

    /* Variables controlling the stepper */
    const TOTAL_STEPS = 4
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
            </div>
            <Footer />
        </>
    )
};


export default CreateAccountPage;