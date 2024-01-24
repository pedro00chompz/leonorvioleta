export default function FooterLargeScreens(){
    const handleEmailClick = () => {
        window.open('mailto:aleonorvioleta@gmail.com', '_blank');
    };

    const handleBehanceClick = () => {
        window.open('https://www.behance.net/leonorvioleta', '_blank');

    };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/leonorvioleta/', '_blank');
    };

    return(
        <>
            <div className="fixed-bottom text-uppercase">
                <div
                    className="row"
                    style={{
                        padding: "1rem",
                        borderTop: "0.08rem solid black",
                        backgroundColor: "white",
                    }}
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