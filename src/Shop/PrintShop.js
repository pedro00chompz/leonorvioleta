// PrintShop.js

import React from "react";
import PrintInfo from "./printComponents/PrintInfo";
import PrintImage from "./printComponents/PrintImage";

export default function PrintShop() {
  // This data comes from a CMS or backend service
  const printDataArray = [
    {
      title: "30×40 DIGITAL PRINTS",
      price: "23€",
      type: "Digital Print",
      paper: "Paper Munken Pure 240gr",
      size: "30×40cm",
      image: "placeholder1.jpg",
    },
    {
      title: "40×50 DIGITAL PRINTS",
      price: "30€",
      type: "Digital Print",
      paper: "Paper Munken Pure 240gr",
      size: "40×50cm",
      image: "placeholder2.jpg",
    },
    // Add more objects as needed
  ];

  return (
    <div className="container-fluid printShopContainer">
      {printDataArray.map((printData, index) => (
        <div className="row border-bottom border-black border-1" key={index}>
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