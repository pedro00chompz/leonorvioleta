//Home.js

import React, { useState, useEffect } from "react";

export default function Home() {
  const navbarHeight = "3.563rem";
  const footerHeight = "3.563rem";
  const [imageSrc, setImageSrc] = useState("");
  const [marginTop, setMarginTop] = useState(navbarHeight);
  const [padding, setPadding] = useState("2rem");
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      if (window.innerWidth <= 767.98) {
        setImageSrc(process.env.PUBLIC_URL + "/homeMobile.png");
        setMarginTop(`calc(${navbarHeight} * 2)`);
        setPadding("1rem");
      } else {
        setImageSrc(process.env.PUBLIC_URL + "/homeHD.png");
        setMarginTop(navbarHeight);
        setPadding("2rem");
      }
    };

    // Initial setting
    handleResize();

    // Handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Removed desktopImage and mobileImage from the dependency array

  const imageStyle = {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  };
  
  const containerStyle = {
    marginTop: marginTop,
    padding: padding,
    height: `calc(${viewportHeight}px - ${navbarHeight} - ${footerHeight})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };
  
  return (
      <>
        <div className="d-sm-block d-md-none d-flex align-items-center" style={containerStyle}>
          <img src={imageSrc} alt="Home" style={{height:"80%",width:"80%"}}/>
        </div>
       <div className="d-none d-md-block" style={containerStyle}>
          <img src={imageSrc} alt="Home" style={imageStyle} />
       </div>
      </>
  );
}