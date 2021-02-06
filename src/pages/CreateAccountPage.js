import { React, useState } from "react";
import { useHistory } from "react-router";
import "./CreateAccountPage.css";

import LocationDetailForm from "../components/forms/LocationDetailForm";
import UserDescriptionForm from "../components/forms/UserDescriptionForm";
import PhotosLoadForm from "../components/forms/PhotosLoadForm";
import AgeDetailForm from "../components/forms/AgeDetailForm";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";


const CreateAccountPage = () => {

    const history = useHistory()

    /* Variables for controlling the stepper */
    const TOTAL_STEPS = 4
    const [currentStep, setCurrentStep] = useState(0)

    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        /* AgeDetailForm */
        userAge: 30,
        ageStart: 25,
        ageEnd: 35,
        /* LocationDetailForm */
        location: [51.5, -0.1],
        distance: 4,
        /* LocationDetailForm */
        description: undefined,
        hobbies: [],
        /* PhotosLoadForm */
        photos: []
    });

    /* Actions for the buttons in the forms */
    const handleNext = () => {
        setCurrentStep(currentStep + 1)
    }

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1)
    }

    const handleFinish = () => {
        /* TODO: DEFINE POST ACTION AGAINST MONGODB */
        history.push("/")
    }

    console.log(formData)

    return (
        <>
            <Header />
            <div className="CreateAccountPage__container">
                {currentStep === 0 &&
                    <AgeDetailForm
                        totalSteps={TOTAL_STEPS}
                        currentStep={currentStep}
                        formData={formData}
                        setFormData={setFormData}
                        action={handleNext}
                    />
                }
                {currentStep === 1 &&
                    <LocationDetailForm
                        totalSteps={TOTAL_STEPS}
                        currentStep={currentStep}
                        formData={formData}
                        setFormData={setFormData}
                        action={handleNext}
                    />
                }
                {currentStep === 2 &&
                    <UserDescriptionForm
                        totalSteps={TOTAL_STEPS}
                        currentStep={currentStep}
                        formData={formData}
                        setFormData={setFormData}
                        action={handleNext}
                    />
                }
                {currentStep === 3 &&
                    <PhotosLoadForm
                        totalSteps={TOTAL_STEPS}
                        currentStep={currentStep}
                        formData={formData}
                        setFormData={setFormData}
                        action={handleFinish}
                    />
                }
            </div>
            <Footer />
        </>
    )
};


export default CreateAccountPage;