//PrintInfo.js

import React from 'react';

export default function PrintInfo({ printData }) {
    return (
        <div className="flex-fill p-0 printInfoContainer">
            <p className='mb-0' id='dataTitle'>{printData.title}</p>
            <p className='mb-0'>{printData.price}</p>
            <p className='mb-0'>{printData.type}</p>
            <p className='mb-0'>{printData.paper}</p>
            <p className='mb-0'>{printData.size}</p>
            <a href="#" className="shopNowLink">SHOP NOW</a>
        </div>
    );
}