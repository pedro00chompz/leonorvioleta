import React from "react";

export default function GalleryInfo({ illustrationData }) {
    return (
    <div className="flex-fill p-0 galleryInfoContainer ">
      <p className="mb-0">{illustrationData.lineOne}</p>
      <p className="mb-0">{illustrationData.lineTwo}</p>
      <p className="mb-0">{illustrationData.lineThree}</p>
      <p className="mb-0">{illustrationData.year}</p>
    </div>
  );
}