import React from 'react';

export default function PrintInfo({ printData }) {
    return (
        <div className="flex-fill p-0 printInfoContainer">
            <p className='mb-0 text-uppercase' id='dataTitle'>{printData.title}</p>
            <p className='mb-0'>{printData.price}</p>
            <p className='mb-0'>{printData.type}</p>
            <p className='mb-0'>{printData.material}</p>
            <p className='mb-0'>{printData.size}</p>
            <a href={printData.shop} className='shopNowLink'>SHOP NOW</a>
        </div>
    );
}