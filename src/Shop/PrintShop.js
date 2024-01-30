// PrintShop.js

import React, { useState, useEffect } from "react";
import PrintInfo from "./printComponents/PrintInfo";
import PrintImage from "./printComponents/PrintImage";

export default function PrintShop(props) {

    const {propHeight} = props;

  const [printDataArray, setPrintDataArray] = useState([]);
  const [productHeight, setProductHeight] = useState('auto');

    useEffect(() => {
        // Fetch data from the WordPress REST API
        setPrintDataArray([
            {
                title: "30×40 DIGITAL PRINTS",
                price: "23€",
                type: "Digital Print",
                paper: "Paper Munken Pure 240gr",
                size: "30×40cm",
                image: process.env.PUBLIC_URL + "/shopImg.png",
            },
            {
                title: "30×40 DIGITAL PRINTS",
                price: "23€",
                type: "Digital Print",
                paper: "Paper Munken Pure 240gr",
                size: "30×40cm",
                image: process.env.PUBLIC_URL + "/shopImg.png",
            },
            {
                title: "40×50 DIGITAL PRINTS",
                price: "30€",
                type: "Digital Print",
                paper: "Paper Munken Pure 240gr",
                size: "40×50cm",
                image: process.env.PUBLIC_URL + "/shopImg.png",
            }
            // Add more objects as needed
        ]);
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

  return (
    <div className="container-fluid printShopContainer">
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
  );
}