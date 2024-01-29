//SelectedWork.js

import WorkPost from "./WorkPost";
import { useState, useEffect } from "react";

export default function SelectedWork(props) {
  const { navbarHeight } = props;

  // Define a state variable to hold the fetched data
  const [workDataArray, setWorkDataArray] = useState([]);

  // Define a state variable to hold the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Fetch data from the WordPress API
    fetch('http://localhost/wordpressVioleta/wp-json/wp/v2/work')
    .then(response => response.json())
    .then(data => {
        const workDataArray = data
            .filter(work => work.acf.display_in_sections.includes('selected'))
            .map(work => ({
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

    // Event listener for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div style={{ marginTop: "7rem", marginBottom: windowWidth >= 768 ? "3rem" : "0" }}>
        {workDataArray.map((workData, index) => (
          <WorkPost
            key={index}
            workData={workData}
            navbarHeight={navbarHeight}
          />
        ))}
      </div>
    </>
  );
}