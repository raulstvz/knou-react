import React from 'react';
import './Button.css';

const Button = ({ name, onClick, style }) => {
    /* 
    button_white_small
    button_dark_small
    button_dark_great
    button_light_small
    button_light_great
     */
    return (
        <>
            <div onClick={onClick} className={style}>
                <p> {name}</p>
            </div>
        </>
    )
};

export default Button;