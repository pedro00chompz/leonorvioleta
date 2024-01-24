import React from 'react';
import GalleryInfo from "./galleryComponents/GalleryInfo";
import GalleryImage from "./galleryComponents/GalleryImage";

export default function IllustrationGallery() {

    const IllustrationDataArray = [
        {
            lineOne: "Illustration",
            lineTwo: "Illustration",
            lineThree: "Illustration",
            year: "2021",
            image: "galleryImg1.jpg",
        },
        {
            lineOne: "Illustration",
            lineTwo: "Illustration",
            lineThree: "Illustration",
            year: "2021",
            image: "galleryImg2.jpg",
        },
        {
            lineOne: "Illustration",
            lineTwo: "Illustration",
            lineThree: "Illustration",
            year: "2021",
            image: "galleryImg3.jpg",
        },
        {
            lineOne: "Illustration",
            lineTwo: "Illustration",
            lineThree: "Illustration",
            year: "2021",
            image: "galleryImg4.jpg",
        },

    ];

    return (
        <div style={{backgroundColor: "black"}}>
            <div className="container-fluid printShopContainer p-0">
                <div className="row p-0">
                    {IllustrationDataArray.map((illustrationData, index) => (
                        <div className="col-3 large-padding imageContainer galleryFrame" key={index}>
                            <GalleryImage galleryImage={illustrationData.image}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}