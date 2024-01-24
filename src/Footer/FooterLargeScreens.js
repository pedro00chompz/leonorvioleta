export default function FooterLargeScreens({footerColor}){
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
        borderTop: "0.08rem solid var(--violeta-black, #101010)",
    }

    const invertColors = {
        backgroundColor: "var(--violeta-black, #101010)",
        padding: "1rem",
        borderTop: "0.08rem solid var(--violeta-white, #fff)",
        color: "var(--violeta-white, #fff)",
    }

    return(
        <>
            <div className="fixed-bottom text-uppercase">
                <div
                    className="row"
                    style={footerColor === "normalColors" ? normalColors : invertColors}
                >
                    <div className="col text-start" style={{paddingLeft:"2rem"}} onClick={handleEmailClick}>
                        aleonorvioleta@gmail.com
                    </div>
                    <div className="col" onClick={handleBehanceClick}>
                        behance
                    </div>
                    <div className="col text-end" style={{paddingRight:"2rem"}} onClick={handleInstagramClick}>
                        instagram
                    </div>
                </div>
            </div>
        </>
    )
}