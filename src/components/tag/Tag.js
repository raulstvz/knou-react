import { useState } from 'react';
import tagIcon from '../../assets/icons/tag.svg'
import deleteIcon from "../../assets/icons/delete.svg"
import './Tag.css';

const Tag = ({ tagArray, onKeyPress, setTagArray }) => {
    const eraseTag = (i) => {
        let arrayCopy = tagArray;
        arrayCopy.splice(i,1);
        setTagArray(arrayCopy);
    }
    return (
        <>
            {tagArray.map((tag, i) => {
                return (
                    <div className="tag__container__created" onClick={ ()=> eraseTag(i)}>
                        <img id="deleteIcon" src={deleteIcon} alt="delete_icon" />
                        <img id="tagIcon" src={tagIcon} alt="tag_icon" />
                        <p>{tag}</p>
                    </div>
                )
            })}
            {tagArray.length < 5 &&
                <div className="tag__container__default">
                    <img src={tagIcon} alt="tag_icon"/>
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