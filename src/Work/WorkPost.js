import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';

export default function WorkPost(props) {

    const {navbarHeight} = props;

    const navbarHeightInPixels = navbarHeight * 2;
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const navbarHeightInRem = navbarHeightInPixels / rootFontSize;


    const [showDescription, setShowDescription] = useState(false);
    const container = useRef(null);
    const [maxHeight, setMaxHeight] = useState(0);
    const [windowHeightInRem, setWindowHeightInRem] = useState(0);
    const [windowValueToUse,setWindowValueToUse] = useState(0);

    useEffect(() => {
        const calculateWindowHeightInRem = () => {
            const baseFontSize = 16; // Default base font size in pixels
            const windowHeightInRem = window.innerHeight / baseFontSize;
            setWindowHeightInRem(windowHeightInRem);
            setWindowValueToUse(windowHeightInRem - 10); // Set windowValueToUse to windowHeightInRem
        };

        // Initial calculation
        calculateWindowHeightInRem();

        // Recalculate on window resize
        window.addEventListener('resize', calculateWindowHeightInRem);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', calculateWindowHeightInRem);
        };
    }, []);

    console.log(windowValueToUse);

    const workData = {
        title: "agenda paralelo",
        event: "ágora porto",
        local: "teatro municipal do porto",
        year: "2020",
        description: "Paralelo is the schedule of Teatro Municipal do Porto dedicated to schools and families. Graphic design by Studio Eduardo Aires. ",
        images: [
            "https://i.ibb.co/3Tdkkmb/template-Img-Violeta.png",
            "https://i.ibb.co/3Tdkkmb/template-Img-Violeta.png",
            "https://i.ibb.co/3Tdkkmb/template-Img-Violeta.png"
        ],
    }

    useEffect(() => {
        if (container.current) {
            setMaxHeight(container.current.scrollHeight);
        }
    }, []);

    const handleShowDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <>
            {/* Work posts for Small Screens */}

            <div className="d-sm-block d-md-none overflow-x-hidden">
                <div style={{ padding: "1rem", borderBottom: "0.08rem solid black", backgroundColor: "white", }}>
                    <div className="text-start text-uppercase" style={{ paddingBottom: "1rem" }}>
                        {workData.title}
                    </div>
                    <div className="text-start text-uppercase">
                        {workData.event}
                    </div>
                    <div className="text-start text-uppercase">
                        {workData.local}
                    </div>
                    <div className="text-start text-uppercase" style={{ paddingBottom: "1rem" }}>
                        {workData.year}
                    </div>
                    <div className="text-start" onClick={handleShowDescription}>
                        <FontAwesomeIcon
                            icon={faPlus}
                            style={{
                                transform: showDescription ? 'rotate(45deg)' : 'rotate(0deg)',
                                color: showDescription ? "#E474AB" : "black",
                                transition: 'transform 0.3s ease-out',
                            }}
                        />
                    </div>
                    <div
                        className="text-start"
                        style={{
                            height: showDescription ? `${maxHeight}px` : '0px',
                            opacity: showDescription ? '1' : '0',
                            overflow: 'hidden',
                            transition: 'height 0.3s ease-out, opacity 0.3s ease-out',
                            lineHeight: "1.2rem",
                        }}
                        ref={container}
                    >
                        {workData.description}
                    </div>
                    <Carousel interval={null} indicators={false} style={{paddingTop:"1rem"}}>
                        {workData.images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img className="d-block w-100" src={image} alt={`Slide ${index}`}/>
                            </Carousel.Item>
                        ))}
                    </Carousel>                </div>
            </div>

            {/* Work posts for Large Screens */}

            <div className="d-none d-md-block overflow-x-hidden">
                <div className="row" style={{height:`${windowValueToUse}rem`,backgroundColor:"white",borderBottom:"0.08rem solid black"}}>
                    <div className="col-4" style={{paddingLeft:"3rem",paddingTop:`${navbarHeight}px`,borderRight:"0.08rem solid black"}}>
                        <div className="text-start text-uppercase" style={{ paddingBottom: "1rem" }}>
                            {workData.title}
                        </div>
                        <div className="text-start text-uppercase">
                            {workData.event}
                        </div>
                        <div className="text-start text-uppercase">
                            {workData.local}
                        </div>
                        <div className="text-start text-uppercase" style={{ paddingBottom: "1rem" }}>
                            {workData.year}
                        </div>
                        <div className="col-10 text-start" style={{lineHeight:"1.2rem"}}>
                            {workData.description}
                        </div>
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col-7 text-start forceBottomPadding " style={{paddingLeft:"1rem",paddingTop:`${navbarHeight}px`}}>
                        <Carousel
                            style={{width:"49.5rem"}}
                            interval={null}
                            indicators={false}
                        >
                            {workData.images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img className="d-block w-100" src={image} alt={`Slide ${index}`} style={{height: `${windowValueToUse - navbarHeightInRem}rem`,width:"49.5rem"}}/>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}
