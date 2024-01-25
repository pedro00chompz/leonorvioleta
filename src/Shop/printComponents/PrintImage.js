// PrintImage.js

import React from 'react';

export default function PrintImage({ printImage }) {
    return (
        <div className="flex-fill p-0 imageContainer">
            <img src={printImage} alt="placeholder" className="img-fluid" />
        </div>
    );
}