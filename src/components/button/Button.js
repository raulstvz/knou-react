import "./Button.css"

const Button = ({name,onClick, alt}) => {

    return(
        <div onClick={onClick} alt = {alt} className="btn_container">
         <div className="container">{name}</div>  
         </div>

    )
};

export default Button;