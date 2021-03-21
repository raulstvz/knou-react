import { useState } from 'react';
import tagIcon from '../../assets/icons/tag.svg'
import deleteIcon from "../../assets/icons/delete.svg"
import './Tag.css';

const Tag = ({ tagArray, onKeyPress, onClick}) => {
    return (
        <>
            {tagArray.map((tag) => {
                return (
                    <div className="tag__container__created">
                        <img id="deleteIcon" src={deleteIcon} alt="delete_icon" onClick={onClick} />
                        <p>{tag}</p>
                        <img id="tagIcon" src={tagIcon} alt="tag_icon" />
                    </div>
                )
            })}
            {tagArray.length < 5 &&
                <div className="tag__container__default">
                    <img src={tagIcon} alt="tag_icon" />
                    <input
                        className="tag__input"
                        placeholder="Type here and press enter"
                        onKeyPress={onKeyPress}
                    />
                </div>
            }
        </>
    )
};

export default Tag