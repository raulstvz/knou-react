import "./Button.css"

const Button = ({name,onClick, alt}) => {

    return(
        <div onClick={onClick} alt = {alt}>
         <span>{name}</span>  
         </div>

    )
};

export default Button;