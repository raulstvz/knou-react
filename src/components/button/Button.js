import React from 'react';
import './Button.css';

const Button = ({ name, onClick, color }) => {

    // if (color == 'dark') {
    //     return (
    //         <div onClick={onClick} className="button_dark">
    //             <p> {name}</p>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div onClick={onClick} className="button_light">
    //             <p> {name}</p>
    //         </div>
    //     )
    // }
    
    return (
        <>
            {color  === 'dark' ?
            <div onClick={onClick} className="button_dark">
                    <p> {name}</p>
            </div>
            :
            <div onClick={onClick} className="button_light">
                    <p> {name}</p>
            </div>
            }
        </>
    
    )
    

};

export default Button