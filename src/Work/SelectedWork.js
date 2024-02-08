import WorkPost from "./WorkPost";
import { useState, useEffect } from "react";

export default function SelectedWork(props){

    const {navbarHeight} = props;

    // Define a state variable to hold the fetched data
    const [workDataArray, setWorkDataArray] = useState([]);

    const divStyles = {
        marginTop: '114px',
        ...(window.innerWidth >= 768 && { marginBottom: "56px" })
    };

    useEffect(() => {
        // Fetch data from the WordPress API
        fetch("https://leonorvioleta.com/wp-json/wp/v2/work")
            .then((response) => response.json())
            .then((data) => {
                const workDataArray = data
                    .filter((work) => work.acf.display_in_sections.includes("selected"))
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
                        ].filter(Boolean), // Remove any undefined or null values
                    }));
                setWorkDataArray(workDataArray);
            });
    },[]);


    return(
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