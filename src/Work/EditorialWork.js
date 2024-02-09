import WorkPost from "./WorkPost";
import {useEffect, useState} from "react";

export default function EditorialWork(props) {
    const {navbarHeight} = props;

    // Define a state variable to hold the fetched data
    const [workDataArray, setWorkDataArray] = useState([]);

    const divStyles = {
        marginTop: '114px',
        ...(window.innerWidth >= 768 && {marginBottom: "56px"})
    };

    useEffect(() => {
        // Fetch data from the WordPress API

        Promise.all([
            fetch("https://leonorvioleta.com/wp-json/wp/v2/work?per_page=100&page=1")
                .then((response) => response.json()),
            fetch("https://leonorvioleta.com/wp-json/wp/v2/work?per_page=100&page=2")
                .then((response) => response.json())]).then(([page1Data, page2Data]) => {
            // Merge data from both pages into a single array
            const mergedData = [...page1Data, ...(page2Data.length > 0 ? page2Data : [])];
            const workDataArray = mergedData
                .filter((work) => work.acf.display_in_sections.includes("editorial"))
                .map((work) => ({
                    title: work.acf.title,
                    event: work.acf.event,
                    local: work.acf.local,
                    year: work.acf.year,
                    description: work.acf.description,
                    images: [
                        work.acf.images_01.url,
                        work.acf.images_02.url,
                        work.acf.images_03.url,
                        work.acf.images_04.url,
                        work.acf.images_05.url,
                        work.acf.images_06.url,
                        work.acf.images_07.url,
                        work.acf.images_08.url,
                        work.acf.images_09.url,
                        work.acf.images_10.url,
                    ].filter(Boolean), // Remove any undefined or null values
                }));
            setWorkDataArray(workDataArray);
        });
    }, []);

    return (
        <>
            <div style={divStyles}>
                {workDataArray.map((workData, index) => (
                    <WorkPost
                        key={index}
                        workData={workData}
                        navbarHeight={navbarHeight}
                        isLast={index === workDataArray.length - 1}
                    />
                ))}
            </div>
        </>
    )
}