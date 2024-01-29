//FooterSmallScreen.js

import React from 'react';

export default function FooterSmallScreens({footerColor, isHome}) {
    const handleEmailClick = () => {
        window.open('mailto:aleonorvioleta@gmail.com', '_blank');
    };

    const handleBehanceClick = () => {
        window.open('https://www.behance.net/leonorvioleta', '_blank');

    };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/leonorvioleta/', '_blank');
    };

    const normalColors = {
        backgroundColor: "var(--violeta-white, #fff)",
        padding: "1rem",
        borderTop: isHome ? 'none' : "0.08rem solid var(--violeta-black, #101010)",
        position: isHome ? 'fixed' : 'relative',
        bottom: isHome ? '0' : 'auto',
        width: isHome ? '100%' : 'auto',
        left: isHome ? '0.75rem' : '0'
    }

    const invertColors = {
        backgroundColor: "var(--violeta-black, #101010)",
        padding: "1rem",
        borderTop: isHome ? 'none' : "0.08rem solid var(--violeta-white, #fff)",
        color: "var(--violeta-white, #fff)",
        position: isHome ? 'fixed' : 'relative',
        bottom: isHome ? '0' : 'auto',
        width: isHome ? '100%' : 'auto',
        left: isHome ? '0.75rem' : '0'
    }

    return (
        <>
            <div className="text-uppercase overflow-x-hidden">
                <div
                    className="row"
                    style={footerColor === "normalColors" ? normalColors : invertColors}
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
