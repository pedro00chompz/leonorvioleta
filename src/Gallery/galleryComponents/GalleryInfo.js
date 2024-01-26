import React from "react";

export default function GalleryInfo({lineOne, lineTwo, lineThree, year, imgHeight, imgWidth }) {

    return (
        <div className="flex-fill p-0 galleryInfoContainer" style={{height: imgHeight, width: imgWidth}}>
            <p className="mb-0" style={{padding: "0.625rem 0 0 0.625rem"}}>{lineOne}</p>
            <p className="mb-0" style={{padding: "0 0.625rem 0 0.625rem"}}>{lineTwo}</p>
            <p className="mb-0" style={{padding: "0 0.625rem 0 0.625rem"}}>{lineThree}</p>
            <p className="mb-0" style={{padding: "0 0.625rem 0 0.625rem"}}>{year}</p>
        </div>
    );
}