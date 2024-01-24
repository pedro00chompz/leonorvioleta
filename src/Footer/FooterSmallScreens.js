import React from 'react';

export default function FooterSmallScreens() {
    const handleEmailClick = () => {
        window.open('mailto:aleonorvioleta@gmail.com', '_blank');
    };

    const handleBehanceClick = () => {
        window.open('https://www.behance.net/leonorvioleta', '_blank');

    };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/leonorvioleta/', '_blank');
    };

    return (
        <>
            <div className="text-uppercase overflow-x-hidden">
                <div
                    className="row"
                    style={{
                        padding: '1rem',
                        borderTop: '0.08rem solid black',
                        backgroundColor: 'white',
                    }}
                >
                    <div className="col-12 text-center" style={{ paddingBottom: '1rem' }} onClick={handleEmailClick}>
                        aleonorvioleta@gmail.com
                    </div>
                    <div className="col-6 text-start" onClick={handleBehanceClick}>
                        behance
                    </div>
                    <div className="col-6 text-end" onClick={handleInstagramClick}>
                        instagram
                    </div>
                </div>
            </div>
        </>
    );
}
