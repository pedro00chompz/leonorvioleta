import React, {useEffect, useState} from "react";
import GalleryImage from "./galleryComponents/GalleryImage";

export default function LoveGallery() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const IllustrationDataArray = [
        {
            lineOne: "Cake design",
            lineTwo: "Collab with",
            lineThree: "A Bia Bolos",
            year: "2023",
            image: "galleryImg1.jpg",
        },
        {
            lineOne: "Sit",
            lineTwo: "Amet",
            lineThree: "Consectetur",
            year: "2001",
            image: "galleryImg2.jpg",
        },
        {
            lineOne: "Adipiscing",
            lineTwo: "Elit",
            lineThree: "Sed",
            year: "2002",
            image: "galleryImg3.jpg",
        },
        {
            lineOne: "Eiusmod",
            lineTwo: "Tempor",
            lineThree: "Incididunt",
            year: "2003",
            image: "galleryImg4.jpg",
        },
        {
            lineOne: "Labore",
            lineTwo: "Dolore",
            lineThree: "Magna",
            year: "2004",
            image: "galleryImg4.jpg",
        },
        {
            lineOne: "Exercitation",
            lineTwo: "Minim",
            lineThree: "Veniam",
            year: "2005",
            image: "galleryImg4.jpg",
        },
        {
            lineOne: "Cupidatat",
            lineTwo: "Proident",
            lineThree: "Deserunt",
            year: "2021",
            image: "galleryImg3.jpg",
        },
    ];


    //change body colour to black on mount and get window width
    useEffect(() => {
        document.body.style.backgroundColor = "var(--violeta-black)";

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            document.body.style.backgroundColor = null;
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const groupedArray = [];

    if(windowWidth > 767.98) {
        //if desktop group the data into groups of 4
        for (let i = 0; i < IllustrationDataArray.length; i += 4) {
            groupedArray.push(IllustrationDataArray.slice(i, i + 4));
        }
    } else {
        //if mobile group the data into groups of 2
        for (let i = 0; i < IllustrationDataArray.length; i += 2) {
            groupedArray.push(IllustrationDataArray.slice(i, i + 2));
        }
    }

    console.log(groupedArray.length);

    return (
        <div className="container-fluid printShopContainer">
            {groupedArray.map((group, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {group.map((illustrationData, colIndex) => (
                        <div
                            className={windowWidth > 767.98 ? "col-3 p-0" : "col-6 p-0"}
                            key={colIndex}
                            style={{
                                //if desktop, only add border right to the first 3 columns. if mobile add border right to the first column
                                borderRight: windowWidth > 767.98 ? (colIndex === 3 ? "none" : "0.08rem solid var(--violeta-white, #FFF)") : (colIndex === 1 ? "none" : "1px solid var(--violeta-white, #FFF)"),
                                //if last row remove border bottom
                                borderBottom: rowIndex === groupedArray.length - 1 ? "none" : "0.08rem solid var(--violeta-white, #FFF)"
                            }}
                        >
                            <GalleryImage galleryImage={illustrationData.image}
                                          textLineOne={illustrationData.lineOne}
                                          textLineTwo={illustrationData.lineTwo}
                                          textLineThree={illustrationData.lineThree}
                                          year={illustrationData.year}
                                          windowWidth={windowWidth}
                                          colIndex = {colIndex} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}