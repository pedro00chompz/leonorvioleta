import React from 'react';

export default function GalleryImage({ galleryImage }) {
    return (
        <div className="flex-fill p-0">
            <img src={process.env.PUBLIC_URL + '/' + galleryImage} alt="placeholder" className="img-fluid" style={{height: 'rem'}} />
        </div>
    );
}