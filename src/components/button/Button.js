import "./Button.css"

const Button = ({ name, onClick, alt, color }) => {



    return (
        <div onClick={onClick} alt={alt} className={color} style={{ backgroundColor: { color } == "dark" ? '#f1e4ff' : ' #8c30f5;', color: { color } == "dark" ? ' #8c30f5;' : '#f1e4ff' }}>
            <p> {name}</p>
        </div>

    )
};

export default Button;