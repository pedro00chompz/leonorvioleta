import CustomCursor from "../Components/CustomCursor";
import NavBarSmallScreen from "../NavBars/NavBarSmallScreen";
import NavBarLargeScreen from "../NavBars/NavBarLargeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import "../myStyles/myStyles.css";
import FooterSmallScreens from "../Footer/FooterSmallScreens";
import FooterLargeScreens from "../Footer/FooterLargeScreens";

import React, { useState, useEffect } from "react";
import WorkPost from "../Work/WorkPost";
import PrintInfo from "../Shop/printComponents/PrintInfo";
import PrintImage from "../Shop/printComponents/PrintImage";

export default function ShopDraft(){


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


    const [printDataArray, setPrintDataArray] = useState([]);
    const [productHeight, setProductHeight] = useState('auto');

    useEffect(() => {
        Promise.all([
            fetch('https://leonorvioleta.com/wp-json/wp/v2/product?per_page=100&page=1')
                .then(response => response.json()),
            fetch('https://leonorvioleta.com/wp-json/wp/v2/product?per_page=100&page=2')
                .then((response) => response.json())]).then(([page1Data, page2Data]) => {
            // Merge data from both pages into a single array
            const mergedData = [...page1Data, ...(page2Data.length > 0 ? page2Data : [])];
            const printDataArray = mergedData
                .filter(product => product.acf.display_in_sections.includes('shopDraft'))
                .map(product => ({
                    title: product.acf.title,
                    price: product.acf.price,
                    type: product.acf.type,
                    material: product.acf.material,
                    size: product.acf.size,
                    image: product.acf && product.acf.print_image ? product.acf.print_image.url : null,
                    shop: product.acf.shop,
                }));
            setPrintDataArray(printDataArray);
        });
    }, []);

    useEffect(() => {
        const calculateProductHeight = () => {
            const navbarHeight = 7.125 * 16; // Convert rem to px
            const footerHeight = 3.530 * 16; // Convert rem to px
            const viewportHeight = window.innerHeight;
            const productHeight = (viewportHeight + 1) - navbarHeight - footerHeight;

            // Check if the window's width is less than or equal to 767.98px
            if (window.innerWidth <= 767.98) {
                setProductHeight('auto');
            } else {
                setProductHeight(productHeight);
            }
        };

        // Initial calculation
        calculateProductHeight();

        // Recalculate on window resize
        window.addEventListener('resize', calculateProductHeight);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', calculateProductHeight);
        };
    }, []);

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

            <div className="container-fluid printShopContainer" style={{borderTop:"1px solid black"}}>
                {printDataArray.map((printData, index) => (
                    <div
                        className={`row ${index === printDataArray.length - 1 ? 'border-0' : 'border-bottom border-black border-1'}`}
                        key={index}
                        style={{height: productHeight === 'auto' ? 'auto' : `${productHeight}px`}} // Change this line
                    >
                        <div className="order-2 order-md-1 col-12 col-md-3 borderRight borderRight-sm printShopText largePadding largePadding-md" style={{fontSize:"1rem"}}>
                            <PrintInfo printData={printData} />
                        </div>
                        <div className="order-1 order-md-2 col-12 col-md-9 largePadding largePadding-md smallPadding-md forceBottomPadding">
                            <PrintImage printImage={printData.image} />
                        </div>
                    </div>
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