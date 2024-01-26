// PrintShop.js

import React, { useState, useEffect } from "react";
import PrintInfo from "./printComponents/PrintInfo";
import PrintImage from "./printComponents/PrintImage";

export default function PrintShop() {
  const [printDataArray, setPrintDataArray] = useState([]);
  const [productHeight, setProductHeight] = useState('auto');

  useEffect(() => {
    fetch('http://localhost/wordpressVioleta/wp-json/wp/v2/product')
      .then(response => response.json())
      .then(data => {
        const printDataArray = data
          .filter(product => product.acf.display_in_sections.includes('print'))
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
      const productHeight = viewportHeight - navbarHeight - footerHeight;
  
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
          <div className="order-2 order-md-1 col-12 col-md-3 borderRight borderRight-sm printShopText largePadding largePadding-md">
            <PrintInfo printData={printData} />
          </div>
          <div className="order-1 order-md-2 col-12 col-md-9 largePadding largePadding-md smallPadding-md">
            <PrintImage printImage={printData.image} />
          </div>
        </div>
      ))}
    </div>
  );
}