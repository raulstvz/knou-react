import { React, useState } from 'react';
import './Tag.css';

const Tag = ({ name }) => {

    const [selected, setSelected] = useState(false)
    const switchSelection = () => {
      setSelected(!selected)
    }
    
    /* console.log(selected) */

    return (
        <>
            {selected === false ?
                <div className="tag__container__unselected" onClick={switchSelection}>
                    <p>{name}</p>
                </div>
                :
                <div className="tag__container__selected" onClick={switchSelection}>
                    <p>{name}</p>
                </div>
            }
        </>
    )
};

export default Tag