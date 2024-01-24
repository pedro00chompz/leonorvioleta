import {useState} from "react";

export default function NavBarSmallScreen(props) {

    const {handleComponentChange} = props;

    const [showWorkOptions,setShowWorkOptions] = useState(false);
    const [showGalleryOptions,setShowGalleryOptions] = useState(false);
    const [showShopOptions,setShowShopOptions] = useState(false);
    const [activeWork,setActiveWork] = useState(false);
    const [activeGallery,setActiveGallery] = useState(false);
    const [activeAbout,setActiveAbout] = useState(false);
    const [activeShop,setActiveShop] = useState(false);


    const handleOptionClick = (option) => {
        console.log('Option clicked:', option);
        handleComponentChange(option);
    };

    return (
        <>
        <div className="fixed-top overflow-x-hidden">

            <div
                className="text-uppercase text-start"
                style={{
                    padding: "1rem",
                    borderBottom: "0.08rem solid var(--violeta-white, #fff",
                    backgroundColor: "var(--violeta-black, #101010)",
                    color: "var(--violeta-white, #fff",
                    ...(activeGallery
                        ? {}
                        : {
                            padding: "1rem",
                            borderBottom: "0.08rem solid var(--violeta-black, #101010)",
                            backgroundColor: "var(--violeta-white, #fff",
                            color: "var(--violeta-black, #101010)",
                        }),
                }}
                onClick={()=>{
                    handleComponentChange("Home")
                    setActiveWork(false);
                    setActiveGallery(false);
                    setActiveAbout(false);
                    setActiveShop(false);
                    setShowWorkOptions(false);
                    setShowGalleryOptions(false);
                    setShowShopOptions(false);
                }}
            >
                leonor violeta
            </div>
            <div
                className="text-uppercase row justify-content-between overflow-x-hidden"
                style={{
                    padding: "1rem",
                    borderBottom: "0.08rem solid white",
                    backgroundColor: "black",
                    color: "white",
                    ...(activeGallery
                        ? {}
                        : {
                            padding: "1rem",
                            borderBottom: "0.08rem solid black",
                            backgroundColor: "white",
                            color: "black",
                        }),
                }}
            >
                <div
                    className={`col ${activeWork ? 'pinkText' : ''} p-0`}
                    onClick={() => {
                        setShowWorkOptions(!showWorkOptions);
                        setShowGalleryOptions(false);
                        setShowShopOptions(false);
                    }}
                >
                    work
                </div>
                <div
                    className={`col ${activeGallery ? 'greenText' : ''} p-0 text-center`}
                    onClick={() => {
                        setShowWorkOptions(false);
                        setShowGalleryOptions(!showGalleryOptions);
                        setShowShopOptions(false);
                    }}
                >
                    gallery
                </div>
                <div
                    className={`col ${activeAbout ? 'blueText' : ''} p-0 text-center`}
                    onClick={()=>{
                        setShowWorkOptions(false);
                        setShowGalleryOptions(false);
                        setShowShopOptions(false);
                        handleOptionClick("About")
                        setActiveWork(false);
                        setActiveGallery(false);
                        setActiveAbout(true);
                        setActiveShop(false);
                    }}
                >
                    about
                </div>
                <div
                    className={`col ${activeShop ? 'redText' : ''} p-0`}
                    onClick={() => {
                        setShowWorkOptions(false);
                        setShowGalleryOptions(false);
                        setShowShopOptions(!showShopOptions);
                    }}
                >
                    shop
                </div>
            </div>

            {/* Opções do Work */}

            { showWorkOptions && (
                <>
                    <div
                        className="text-start text-uppercase pinkBackground"
                        style={{padding:"1rem",borderBottom: "0.08rem solid black"}}
                        onClick={()=>{
                            setShowWorkOptions(false);
                            handleOptionClick("SelectedWork");
                            setActiveWork(true);
                            setActiveGallery(false);
                            setActiveAbout(false);
                            setActiveShop(false);
                        }}
                    >
                        selected
                    </div>
                    <div
                        className="text-start text-uppercase pinkBackground"
                        style={{padding:"1rem",borderBottom: "0.08rem solid black"}}
                        onClick={()=>{
                            setShowWorkOptions(false);
                            handleOptionClick("CollabsWork");
                            setActiveWork(true);
                            setActiveGallery(false);
                            setActiveAbout(false);
                            setActiveShop(false);
                        }}
                    >
                        collabs
                    </div>
                    <div
                        className="text-start text-uppercase pinkBackground"
                        style={{padding:"1rem",borderBottom: "0.08rem solid black"}}
                        onClick={()=>{
                            setShowWorkOptions(false);
                            handleOptionClick("MuralWork");
                            setActiveWork(true);
                            setActiveGallery(false);
                            setActiveAbout(false);
                            setActiveShop(false);
                        }}
                    >
                        mural
                    </div>
                    <div
                        className="text-start text-uppercase pinkBackground"
                        style={{padding:"1rem",borderBottom: "0.08rem solid black"}}
                        onClick={()=>{
                            setShowWorkOptions(false);
                            handleOptionClick("EditorialWork");
                            setActiveWork(true);
                            setActiveGallery(false);
                            setActiveAbout(false);
                            setActiveShop(false);
                        }}
                    >
                        editorial
                    </div>
                    <div
                        className="text-start text-uppercase pinkBackground"
                        style={{padding:"1rem",borderBottom: "0.08rem solid black"}}
                        onClick={()=>{
                            setShowWorkOptions(false);
                            handleOptionClick("ArtWork");
                            setActiveWork(true);
                            setActiveGallery(false);
                            setActiveAbout(false);
                            setActiveShop(false);
                        }}
                    >
                        art
                    </div>
                </>
            )}

            {/* Opções da Galeria */}


            { showGalleryOptions && (
                <>
                    <div
                        className="text-start text-uppercase greenBackground overflow-x-hidden"
                        style={{padding:"1rem",borderBottom: "0.08rem solid black"}}
                        onClick={()=>{
                            setShowGalleryOptions(false);
                            handleOptionClick("IllustrationGallery");
                            setActiveWork(false);
                            setActiveGallery(true);
                            setActiveAbout(false);
                            setActiveShop(false);
                        }}
                    >
                        illustration
                    </div>
                    <div
                        className="text-start text-uppercase greenBackground"
                        style={{padding:"1rem",borderBottom: "0.08rem solid black"}}
                        onClick={()=>{
                            setShowGalleryOptions(false);
                            handleOptionClick("DailyGallery");
                            setActiveWork(false);
                            setActiveGallery(true);
                            setActiveAbout(false);
                            setActiveShop(false);
                        }}
                    >
                        daily
                    </div>
                    <div
                        className="text-start text-uppercase greenBackground"
                        style={{padding:"1rem",borderBottom: "0.08rem solid black"}}
                        onClick={()=>{
                            setShowGalleryOptions(false);
                            handleOptionClick("LoveGallery");
                            setActiveWork(false);
                            setActiveGallery(true);
                            setActiveAbout(false);
                            setActiveShop(false);
                        }}
                    >
                        love
                    </div>
                </>
            )}

            {/* Opções da Shop */}


            {showShopOptions && (
                <>
                    <div
                        className="text-start text-uppercase redBackground"
                        style={{padding:"1rem",borderBottom: "0.08rem solid black"}}
                        onClick={()=>{
                            setShowShopOptions(false);
                            handleOptionClick("PrintShop");
                            setActiveWork(false);
                            setActiveGallery(false);
                            setActiveAbout(false);
                            setActiveShop(true);
                        }}
                    >
                        print
                    </div>
                    <div
                        className="text-start text-uppercase redBackground"
                        style={{padding:"1rem",borderBottom: "0.08rem solid black"}}
                        onClick={()=>{
                            setShowShopOptions(false);
                            handleOptionClick("CanvasShop");
                            setActiveWork(false);
                            setActiveGallery(false);
                            setActiveAbout(false);
                            setActiveShop(true);
                        }}
                    >
                        canvas
                    </div>
                    <div
                        className="text-start text-uppercase redBackground"
                        style={{padding:"1rem",borderBottom: "0.08rem solid black"}}
                        onClick={()=>{
                            setShowShopOptions(false);
                            handleOptionClick("CollabsShop");
                            setActiveWork(false);
                            setActiveGallery(false);
                            setActiveAbout(false);
                            setActiveShop(true);
                        }}
                    >
                        collabs
                    </div>
                    <div
                        className="text-start text-uppercase redBackground"
                        style={{padding:"1rem",borderBottom: "0.08rem solid black"}}
                        onClick={()=>{
                            setShowShopOptions(false);
                            handleOptionClick("AllShop");
                            setActiveWork(false);
                            setActiveGallery(false);
                            setActiveAbout(false);
                            setActiveShop(true);
                        }}
                    >
                        all
                    </div>
                </>
            )}
        </div>
        </>
    );
}
