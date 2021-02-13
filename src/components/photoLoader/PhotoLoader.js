import { React, useEffect } from 'react';
import cameraIcon from '../../assets/icons/camera.svg'
import './PhotoLoader.css'

const PhotoLoader = ({ setPhotoArray }) => {

    const photosUploaded = [
        'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1612018888057-0c0fef6de098?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
        'https://images.unsplash.com/photo-1611615695859-21c4e8210341?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1611943574537-77f07c3a2aaa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
        'https://images.unsplash.com/photo-1611900219970-8b3bbf197e6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    ]

    useEffect(() => {
        //setPhotoArray(photosUploaded)
    }, [])

    const MAX_ALLOWED = 8;
    const photosAllowed = MAX_ALLOWED - photosUploaded.length

    const content = []

    for (var i = 0; i < photosAllowed; i++) {
        content.push(
            <div className="photoloader__container">
                <img src={cameraIcon} alt="camera_icon"/>
            </div>
        )
    }

    return (
        <>{photosUploaded.map((photo) => {
            return (
                <img src={photo} alt="uploaded_image" className="photoloader__photouploaded"/>
            )
        })}
            {content}
        </>
    )
}

export default PhotoLoader