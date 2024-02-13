import CustomCursor from "../Components/CustomCursor";
import NavBarSmallScreen from "../NavBars/NavBarSmallScreen";
import NavBarLargeScreen from "../NavBars/NavBarLargeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import "../myStyles/myStyles.css";
import FooterSmallScreens from "../Footer/FooterSmallScreens";
import FooterLargeScreens from "../Footer/FooterLargeScreens";
import WorkPost from "../Work/WorkPost";
import { useState, useEffect } from "react";

export default function WorkDraft(){

    const [currentComponent, setCurrentComponent] = useState("SelectedWork");
    const [footerColor, setFooterColor] = useState("normalColors");
    const [navbarHeight,setNavbarHeight] = useState(null);

    // Define a state variable to hold the fetched data
    const [workDataArray, setWorkDataArray] = useState([]);

    const divStyles = {
        borderTop: "1px solid black",
        marginTop: '114px',
        ...(window.innerWidth >= 768 && { marginBottom: "56px" })
    };


    const handleComponentChange = (componentName) => {
        console.log("Changing component to:", componentName);
        setCurrentComponent(componentName);
        if (
            componentName === "IllustrationGallery" ||
            componentName === "DailyGallery" ||
            componentName === "LoveGallery"
        ) {
            setFooterColor("invertColors");
        } else {
            setFooterColor("normalColors");
        }
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
                .filter((work) => work.acf.display_in_sections.includes("workDraft"))
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
    },[]);

    return(
        <>
            <CustomCursor customColor="#E474AB" />

            <div className="d-sm-block d-md-none">
                <NavBarSmallScreen handleComponentChange={handleComponentChange} />
            </div>

            {/* NavBar for Large Screens */}

            <div className="d-none d-md-block">
                <NavBarLargeScreen handleComponentChange={handleComponentChange} setNavbarHeight={setNavbarHeight}/>
            </div>

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

            {/* NavBar for Small Screens */}

            <div className="d-sm-block d-md-none">
                <FooterSmallScreens
                    footerColor={footerColor}
                    isHome={currentComponent === "Home"}
                    isWork={currentComponent === "SelectedWork" || currentComponent === "CollabsWork" || currentComponent === "MuralWork" || currentComponent === "ArtWork" || currentComponent === "EditorialWork"}
                />
            </div>
            <div className="d-none d-md-block">
                <FooterLargeScreens footerColor={footerColor}/>
            </div>
        </>
    )
}