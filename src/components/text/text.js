import "./text.css";


const Text = ({text}) => {
    return (
        <div className="text__container">
            <p className="text">{text}</p>
        </div>
    )
};

export default Text;