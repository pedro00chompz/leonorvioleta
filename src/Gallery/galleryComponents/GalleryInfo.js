import React from "react";

export default function GalleryInfo({lineOne, lineTwo, lineThree, year, imgHeight, imgWidth, windowWidth, colIndex}) {
    console.log(colIndex)
    console.log(windowWidth)
    return (
        <div className="flex-fill p-0 galleryInfoContainer" style={{height: imgHeight, width: imgWidth, margin: windowWidth > 767.98 ? "2.5rem 0 0 1.875rem" : colIndex === 1 ? "1.25rem 0 0 0.98rem" : "1.25rem 0 0 1.25rem"}}>
            <p className="mb-0" style={{padding: "0.625rem 0 0 0.625rem"}}>{lineOne}</p>
            <p className="mb-0" style={{padding: "0 0.625rem 0 0.625rem"}}>{lineTwo}</p>
            <p className="mb-0" style={{padding: "0 0.625rem 0 0.625rem"}}>{lineThree}</p>
            <p className="mb-0" style={{padding: "0 0.625rem 0 0.625rem"}}>{year}</p>
        </div>
    );
}