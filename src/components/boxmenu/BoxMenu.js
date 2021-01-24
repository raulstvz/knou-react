import "./BoxMenu.css";
import message from "../../assets/icons/message.png"
import swipe from "../../assets/icons/fire.svg"
import premium from "../../assets/icons/high-quality.png"
import user from "../../assets/icons/user.svg"
import { useState } from "react"
import { useHistory} from "react-router-dom"

const BoxMenu = () => {
    const history = useHistory();
    const defaultClass = "Icon_container";
    const clickClass = "Click";
    const [swipeClass, setSwipeClass] = useState(defaultClass);
    const [premiumClass, setPremiumClass] = useState(defaultClass);
    const [messageClass, setMessageClass] = useState(defaultClass);
    const [profileClass, setProfileClass] = useState(defaultClass);

    const handleSwipe = () => {
        setSwipeClass(clickClass);
        setPremiumClass(defaultClass);
        setMessageClass(defaultClass);
        setProfileClass(defaultClass);

    };
    const handlePremium = () => {
        setSwipeClass(defaultClass);
        setPremiumClass(clickClass);
        setMessageClass(defaultClass);
        setProfileClass(defaultClass);

    };
    const handleMessage = () => {
        setSwipeClass(defaultClass);
        setPremiumClass(defaultClass);
        setMessageClass(clickClass);
        setProfileClass(defaultClass);

    };
    const handleProfile = () => {
        setSwipeClass(defaultClass);
        setPremiumClass(defaultClass);
        setMessageClass(defaultClass);
        setProfileClass(clickClass);

    };

    return (
        <div className="BoxMenu_container">
            <div className={swipeClass} onClick={() => {
                history.push("/swipepage");
                handleSwipe();
            }}>
                <img src={swipe} className="Icon_image" />
            </div>
            <div className={premiumClass} onClick={() => handlePremium()}  > {/* onClick={() => history.push("/userprofile")} */}
                <img src={premium} className="Icon_image" />
            </div>
            <div className={messageClass} onClick={() => {
                //history.push("/chatpage");
                handleMessage();
            }}>
                <img src={message} className="Icon_image" />
            </div>
            <div className={profileClass} onClick={() => {
                //history.push("/userprofile")
                handleProfile();
            }}>
                <img src={user} className="Icon_image" />
            </div>
        </div >
    )
}

export default BoxMenu; 