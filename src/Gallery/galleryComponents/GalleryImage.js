//GalleryImage.js

import React, { useState } from 'react';
import GalleryInfo from "./GalleryInfo";

export default function GalleryImage({ galleryImage, textLineOne, textLineTwo, textLineThree, year, windowWidth, colIndex }) {

    const [isHovered, setIsHovered] = useState(false);
    const [imgHeight, setImgHeight] = useState(null);
    const [imgWidth, setImgWidth] = useState(null);

    const getImgHW = (event) => {
        setImgHeight(event.target.height);
        setImgWidth(event.target.width);
    };

    return (
        <div className={`flex-fill ${isHovered ? "filtered" : ''}`} style={{ margin: windowWidth > 767.98 ? "3.495rem 1.875rem" : colIndex === 1 ? "1.25rem 1.25rem 1.25rem 0.94rem" : "1.25rem 0.94rem 1.25rem 1.25rem", position: "relative" }}
             onMouseEnter={windowWidth > 767.98 ? () => setIsHovered(true) : undefined}
             onMouseLeave={windowWidth > 767.98 ? () => setIsHovered(false) : undefined}
             onClick={windowWidth <= 767.98 ? () => setIsHovered(!isHovered) : undefined}>
            <img src={galleryImage} alt="placeholder" className="img-fluid" style={{width:"100%"}} onLoad={getImgHW}/>
            {isHovered && (
                <GalleryInfo
                    lineOne={textLineOne}
                    lineTwo={textLineTwo}
                    lineThree={textLineThree}
                    year={year}
                    imgHeight={imgHeight}
                    imgWidth={imgWidth}
                    windowWidth={windowWidth}
                    colIndex={colIndex}
                    galleryImage={galleryImage}
                />
            )}
        </div>
    );


}
