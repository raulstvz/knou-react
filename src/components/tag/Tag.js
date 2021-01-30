import { React, useState } from 'react';
import tagIcon from '../../assets/icons/tag.svg'
import './Tag.css';

const Tag = ({ tagArray, onKeyPress, placeholder }) => {

    return (
        <>
            {tagArray.map((tag) => {
                return (
                    <div className="tag__container__created">
                        <img src={tagIcon} />
                        <p>{tag}</p>
                    </div>
                )
            })}
            {tagArray.length < 5 &&
                <div className="tag__container__default">
                    <img src={tagIcon} />
                    <input
                        className="tag__input"
                        placeholder={placeholder}
                        onKeyPress={onKeyPress}
                    />
                </div>
            }
        </>
    )
};

export default Tag