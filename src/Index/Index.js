//Index.js
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../myStyles/myStyles.css";

// importar caminhos

import Home from "../Home/Home";
import About from "../About/About";
import NavBarSmallScreen from "../NavBars/NavBarSmallScreen";
import NavBarLargeScreen from "../NavBars/NavBarLargeScreen";
import SelectedWork from "../Work/SelectedWork";
import CollabsWork from "../Work/CollabsWork";
import MuralWork from "../Work/MuralWork";
import EditorialWork from "../Work/EditorialWork";
import ArtWork from "../Work/ArtWork";
import IllustrationGallery from "../Gallery/IllustrationGallery";
import DailyGallery from "../Gallery/DailyGallery";
import LoveGallery from "../Gallery/LoveGallery";
import PrintShop from "../Shop/PrintShop";
import CanvasShop from "../Shop/CanvasShop";
import CollabsShop from "../Shop/CollabsShop";
import AllShop from "../Shop/AllShop";
import CustomCursor from "../Components/CustomCursor";
import FooterSmallScreens from "../Footer/FooterSmallScreens";
import FooterLargeScreens from "../Footer/FooterLargeScreens";

export default function Index() {
    const [currentComponent, setCurrentComponent] = useState("Home");
    const [footerColor, setFooterColor] = useState("normalColors");
    const [navbarHeight,setNavbarHeight] = useState(null)

    // Lidar com a mudança de componentes

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

    const getCursorColor = () => {
        switch (currentComponent) {
            case "SelectedWork":
            case "CollabsWork":
            case "MuralWork":
            case "EditorialWork":
            case "ArtWork":
                return "#E474AB";
            case "IllustrationGallery":
            case "DailyGallery":
            case "LoveGallery":
                return "#3BC68A";
            case "About":
                return "#51B9CD";
            case "PrintShop":
            case "CanvasShop":
            case "CollabsShop":
            case "AllShop":
                return "#EF4136";
            default:
                return "#F7AD1D"; // Default color
        }
    };

    return (
        <>
            <CustomCursor customColor={getCursorColor()} />
            {/* NavBar for Small Screens */}

            <div className="d-sm-block d-md-none">
                <NavBarSmallScreen handleComponentChange={handleComponentChange} />
            </div>

            {/* NavBar for Large Screens */}

            <div className="d-none d-md-block">
                <NavBarLargeScreen handleComponentChange={handleComponentChange} setNavbarHeight={setNavbarHeight}/>
            </div>

            {/* Main Components */}
            {currentComponent === "Home" && <Home />}

            {/* Inside Work */}
            {currentComponent === "SelectedWork" && <SelectedWork navbarHeight={navbarHeight}/>}
            {currentComponent === "CollabsWork" && <CollabsWork navbarHeight={navbarHeight}/>}
            {currentComponent === "MuralWork" && <MuralWork navbarHeight={navbarHeight}/>}
            {currentComponent === "EditorialWork" && <EditorialWork navbarHeight={navbarHeight}/>}
            {currentComponent === "ArtWork" && <ArtWork navbarHeight={navbarHeight}/>}

            {/* Inside Gallery */}
            {currentComponent === "IllustrationGallery" && <IllustrationGallery />}
            {currentComponent === "DailyGallery" && <DailyGallery />}
            {currentComponent === "LoveGallery" && <LoveGallery />}

            {/* About */}
            {currentComponent === "About" && <About navbarHeight={navbarHeight} />}

            {/* Inside Shop */}
            {currentComponent === "PrintShop" && <PrintShop navbarHeight={navbarHeight}/>}
            {currentComponent === "CanvasShop" && <CanvasShop navbarHeight={navbarHeight}/>}
            {currentComponent === "CollabsShop" && <CollabsShop navbarHeight={navbarHeight}/>}
            {currentComponent === "AllShop" && <AllShop navbarHeight={navbarHeight}/>}

            {/* NavBar for Small Screens */}

            <div className="d-sm-block d-md-none">
                <FooterSmallScreens
                    footerColor={footerColor}
                    isHome={currentComponent === "Home"}
                />
            </div>
            <div className="d-none d-md-block">
                <FooterLargeScreens footerColor={footerColor}/>
            </div>
        </>
    );
}
