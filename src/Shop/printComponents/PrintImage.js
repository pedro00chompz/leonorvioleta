// PrintImage.js

import React from 'react';

export default function PrintImage({ printImage }) {
    return (
        <div className="flex-fill p-0 imageContainer">
            <img src={process.env.PUBLIC_URL + '/shopImg.png'} alt="placeholder" className="img-fluid" />
        </div>
    );
}