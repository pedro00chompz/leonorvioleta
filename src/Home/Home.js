//Home.js
import React, { useState, useEffect } from "react";

export default function Home() {
  const navbarHeight = "3.563rem";
  const footerHeight = "3.563rem";
  const [imageSrc, setImageSrc] = useState("");
  const [marginTop, setMarginTop] = useState(navbarHeight);
  const [padding, setPadding] = useState("2rem");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767.98) {
        setImageSrc(process.env.PUBLIC_URL + "/homeMobile.png");
        setMarginTop(`calc(${navbarHeight} * 2)`);
        setPadding("1rem");
      } else {
        setImageSrc(process.env.PUBLIC_URL + "/home.png");
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
  }, []);

  const imageStyle = {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  };
  
  const containerStyle = {
    marginTop: marginTop,
    padding: padding,
    height: `calc(100vh - ${navbarHeight} - ${footerHeight})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };
  
  return (
    <div style={containerStyle}>
      <img src={imageSrc} alt="Home" style={imageStyle} />
    </div>
  );
}