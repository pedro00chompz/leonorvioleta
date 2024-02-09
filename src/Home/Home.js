//Home.js

import React, { useState, useEffect } from "react";

export default function Home() {
  const navbarHeight = "3.563rem";
  const footerHeight = "3.563rem";
  const [imageSrc, setImageSrc] = useState("");
  const [marginTop, setMarginTop] = useState(navbarHeight);
  const [padding, setPadding] = useState("2rem");
  const [desktopImage, setDesktopImage] = useState("");
  const [mobileImage, setMobileImage] = useState("");
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const mobileSize = viewportHeight - 230;

  useEffect(() => {
    // Fetch data from the WordPress API
    fetch('https://leonorvioleta.com/wp-json/wp/v2/home')
    .then(response => response.json())
    .then(data => {
        const homePost = data[0];
        setDesktopImage(homePost.acf.desktop_image.url);
        setMobileImage(homePost.acf.mobile_image.url);
    });

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      if (window.innerWidth <= 767.98) {
        setImageSrc(mobileImage);
        setMarginTop(`calc(${navbarHeight} * 2)`);
        setPadding("1rem");
      } else {
        setImageSrc(desktopImage);
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
  }, [desktopImage, mobileImage]); // Added desktopImage and mobileImage to the dependency array

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
          <img src={imageSrc} alt="Home" style={{height:`${mobileSize}px`,width:"auto"}}/>
        </div>
       <div className="d-none d-md-block" style={containerStyle}>
          <img src={imageSrc} alt="Home" style={imageStyle} />
       </div>
      </>
  );
}