//DailyGallery.js

import React, {useEffect, useState} from "react";
import GalleryImage from "./galleryComponents/GalleryImage";

export default function DailyGallery() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [dailyDataArray, setDailyDataArray] = useState([]);

    useEffect(() => {
        // Fetch data from both pages concurrently
        Promise.all([
            fetch('https://leonorvioleta.com/wp-json/wp/v2/gallery?per_page=100&page=1').then(response => response.json()),
            fetch('https://leonorvioleta.com/wp-json/wp/v2/gallery?per_page=100&page=2').then(response => response.json())
        ]).then(([page1Data, page2Data]) => {
            // Merge data from both pages into a single array
            const mergedData = [...page1Data, ...(page2Data.length > 0 ? page2Data : [])];
            console.log(mergedData);

            // Filter and map through the merged array
            const filteredData = mergedData
                .filter(gallery => gallery.acf.display_in_sections.includes('daily'))
                .map(gallery => ({
                    lineOne: gallery.acf.line_one,
                    lineTwo: gallery.acf.line_two,
                    lineThree: gallery.acf.line_three,
                    year: gallery.acf.year,
                    image: gallery.acf && gallery.acf.gallery_image ? gallery.acf.gallery_image.url : null,
                    index: gallery.acf.index,
                }))
                .sort((a, b) => a.index - b.index); // Sort by index

            setDailyDataArray(filteredData);
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);


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
        for (let i = 0; i < dailyDataArray.length; i += 4) {
            groupedArray.push(dailyDataArray.slice(i, i + 4));
        }
    } else {
        //if mobile group the data into groups of 2
        for (let i = 0; i < dailyDataArray.length; i += 2) {
            groupedArray.push(dailyDataArray.slice(i, i + 2));
        }
    }

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
                                borderBottom: rowIndex === groupedArray.length - 1 && rowIndex !== 0 ? "none" : "0.08rem solid var(--violeta-white, #FFF)"
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