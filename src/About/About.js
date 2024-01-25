import {useEffect, useState} from "react";

export default function About(){

    const [windowHeightInRem, setWindowHeightInRem] = useState(0);
    const [windowValueToUse,setWindowValueToUse] = useState(0);

    useEffect(() => {
        const calculateWindowHeightInRem = () => {
            const baseFontSize = 16; // Default base font size in pixels
            const windowHeightInRem = window.innerHeight / baseFontSize;
            setWindowHeightInRem(windowHeightInRem);
            setWindowValueToUse(windowHeightInRem - 6); // Set windowValueToUse to windowHeightInRem
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

    const halfValue = windowValueToUse /2;

    console.log(halfValue);

    const handleEmailClick = () => {
        window.open('mailto:aleonorvioleta@gmail.com', '_blank');
    };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/leonorvioleta/', '_blank');
    };

    return(
        <>
            {/* Small Screens */}
            <div className="d-sm-block d-md-none" style={{marginTop:"7rem"}}>
                <img
                    src={process.env.PUBLIC_URL + '/aboutProfilePhoto.png'}
                    className="img-fluid"
                    style={{
                        padding:"1rem",
                        borderBottom:"0.08rem solid black",
                    }}
                    alt="Leonor Violeta Profile Photo"
                />
                <div
                    style={{
                        padding:"1rem",
                        borderBottom:"0.08rem solid black",
                    }}
                    className="text-start"
                >
                    <div className="text-uppercase" style={{paddingBottom:"1rem"}}>
                        contact
                    </div>
                    <div>
                        Hello ☺ I’m available to freelance projects, collaborations, comissioned illustrations.
                    </div>
                    <div style={{paddingBottom:"1rem"}}>
                        Feel free to contact me :)
                    </div>
                    <div className="text-decoration-underline" onClick={handleEmailClick}>
                        aleonorvioleta@gmail.com
                    </div>
                    <div className="text-decoration-underline" onClick={handleInstagramClick}>
                        instagram
                    </div>
                </div>
                <div
                    style={{
                        padding:"1rem",
                        borderBottom:"0.08rem solid black",
                    }}
                    className="text-start"
                >
                    <div>Leonor Violeta, 1995</div>
                    <div>
                        <p className="mb-0">Illustrator based in Porto that loves sun, chocolats and her cat ☺</p>
                        <p className="mb-0">BA in Communication Design at ESAD Matosinhos, she also worked as a designer at R2 Design and Colonia Studio.</p>
                        <p className="mb-0">Currently working as an illustrator, likes to explore different approaches and supports, but most of the times she divides her work into digital illustration, papercuts and mural paintings.</p>
                        <p className="mb-0">Already works for brands as WeTransfer, Ágora Porto, Lemon Jelly, Cerveja MUSA, Parfois and Unwind Studio. Always interested in new projects and collaborations.</p>
                    </div>
                </div>
                <div
                    style={{
                            padding: "1rem",
                        }}
                    className="text-start"
                >
                    You can also find my work at
                    <div style={{paddingTop:"1rem"}}>
                        <a className="mb-0 text-decoration-underline d-block text-black" href="#" target="_blank">
                            Águas Furtadas
                        </a>
                        <a className="mb-0 text-decoration-underline d-block text-black" href="#" target="_blank">
                            Oficina Mescla
                        </a>
                        <a className="mb-0 text-decoration-underline d-block text-black" href="#" target="_blank">
                            Lusco Fusco
                        </a>
                        <a className="mb-0 text-decoration-underline d-block text-black" href="#" target="_blank">
                            Malapata Gallery
                        </a>
                        <a className="mb-0 text-decoration-underline d-block text-black" href="#" target="_blank">
                            Unwind Studio
                        </a>
                    </div>
                </div>
            </div>

            {/* Large Screens */}
            <div className="d-none d-md-block" style={{marginTop:"3.5rem",fontSize:"0.9rem",overflow:"hidden"}}>
                <img
                    src={process.env.PUBLIC_URL + '/aboutProfilePhoto.png'}
                    className="align-self-start"
                    alt="Leonor Violeta Profile Photo"
                    style={{ paddingRight: "2rem",height:"22rem",width:"auto",zIndex:"1000",position:"fixed",top:"6.5rem",right:"0.5em" }}
                />
                <div className="row text-start"
                     style={{
                         borderBottom:"0.08rem solid black",
                         height:`${halfValue}rem`,
                }}>
                    <div
                        className="col-4"
                        style={{
                            borderRight:"0.08rem solid black",
                            paddingLeft:"3rem",
                        }}
                    >
                        <div
                            className="text-uppercase"
                            style={{
                                paddingTop:"3rem",
                                paddingBottom:"1rem",
                        }}>
                            contact
                        </div>
                        <div>
                            Hello ☺ I’m available to freelance projects, collaborations, comissioned illustrations.
                        </div>
                        <div style={{paddingBottom:"1rem"}}>
                            Feel free to contact me :)
                        </div>
                        <div className="text-decoration-underline aboutLink" onClick={handleEmailClick}>
                            aleonorvioleta@gmail.com
                        </div>
                        <div className="text-decoration-underline aboutLink" onClick={handleInstagramClick}>
                            instagram
                        </div>
                    </div>
                    <div
                        className="col-1"
                    >
                    </div>
                    <div
                        className="col-7"
                        style={{
                            paddingLeft:"1rem",
                            paddingTop:"3rem",
                        }}
                    >
                        <div>
                            Leonor Violeta, 1995
                        </div>
                        <div className="col-6" style={{paddingBottom:"3rem"}}>
                            <p className="mb-0">Illustrator based in Porto that loves sun, chocolats and her cat ☺</p>
                            <p className="mb-0" style={{paddingBottom:"1rem"}}>BA in Communication Design at ESAD Matosinhos, she also worked as a designer at R2 Design and Colonia Studio.</p>
                            <p className="mb-0">Currently working as an illustrator, likes to explore different approaches and supports, but most of the times she divides her work into digital illustration, papercuts and mural paintings.</p>
                            <p className="mb-0">Already works for brands as WeTransfer, Ágora Porto, Lemon Jelly, Cerveja MUSA, Parfois and Unwind Studio. Always interested in new projects and collaborations.</p>
                        </div>
                    </div>
                </div>
                <div className="row text-start"
                     style={{
                         borderBottom:"0.08rem solid black",
                         height:`${halfValue}rem`,
                     }}>
                    <div
                        className="col-4"
                        style={{
                            borderRight:"0.08rem solid black",
                            paddingLeft:"3rem",
                        }}
                    >
                        <div
                            style={{
                                paddingTop:"3rem",
                            }}>
                            You can also find my work at
                        </div>
                        <div style={{paddingTop:"1rem"}}>
                            <a className="mb-0 text-decoration-underline d-block aboutLink" href="#" target="_blank">
                                Águas Furtadas
                            </a>
                            <a className="mb-0 text-decoration-underline d-block  aboutLink" href="#" target="_blank">
                                Oficina Mescla
                            </a>
                            <a className="mb-0 text-decoration-underline d-block  aboutLink" href="#" target="_blank">
                                Lusco Fusco
                            </a>
                            <a className="mb-0 text-decoration-underline d-block  aboutLink" href="#" target="_blank">
                                Malapata Gallery
                            </a>
                            <a className="mb-0 text-decoration-underline d-block  aboutLink" href="#" target="_blank">
                                Unwind Studio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}