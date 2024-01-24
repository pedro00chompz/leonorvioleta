import {useState} from "react";

export default function NavBarLargeScreen(props) {

    const {handleComponentChange} = props;

    const [showWorkOptions, setShowWorkOptions] = useState(false);
    const [showGalleryOptions, setShowGalleryOptions] = useState(false);
    const [showShopOptions, setShowShopOptions] = useState(false);
    const [activeWork, setActiveWork] = useState(false);
    const [activeGallery, setActiveGallery] = useState(false);
    const [activeAbout, setActiveAbout] = useState(false);
    const [activeShop, setActiveShop] = useState(false);
    const [activeSelected, setActiveSelected] = useState(false);
    const [collabsSelected, setCollabsSelected] = useState(false);
    const [muralSelected, setMuralSelected] = useState(false);
    const [editorialSelected, setEditorialSelected] = useState(false);
    const [artSelected, setArtSelected] = useState(false);
    const [illustrationSelected, setIllustrationSelected] = useState(false);
    const [dailySelected, setDailySelected] = useState(false);
    const [loveSelected, setLoveSelected] = useState(false);
    const [printSelected, setPrintSelected] = useState(false);
    const [canvasSelected, setCanvasSelected] = useState(false);
    const [shopCollabsSelected, setShopCollabsSelected] = useState(false);
    const [allSelected, setAllSelected] = useState(false);


    const handleOptionClick = (option) => {
        console.log('Option clicked:', option);
        handleComponentChange(option);
    };

    return (
        <>
            <div className="fixed-top text-uppercase"
            >
                <div
                    className="row"
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
                        className="col-5 text-start"
                        style={{paddingLeft: "2rem"}}
                        onClick={() => {
                            handleOptionClick("Home");
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
                    <div className="col-7">
                        <div className="row justify-content-between">
                            <div
                                className={`col ${activeWork ? 'pinkText' : ''} text-start`}
                                onClick={() => {
                                    handleOptionClick("SelectedWork")
                                    setShowWorkOptions(true);
                                    setShowGalleryOptions(false);
                                    setShowShopOptions(false);
                                    setActiveWork(true);
                                    setActiveGallery(false);
                                    setActiveAbout(false);
                                    setActiveShop(false);
                                    setActiveSelected(true);
                                    setCollabsSelected(false);
                                    setMuralSelected(false);
                                    setEditorialSelected(false);
                                    setArtSelected(false);
                                }}
                            >
                                work
                            </div>
                            <div
                                className={`col ${activeGallery ? 'greenText' : ''} text-start`}
                                onClick={() => {
                                    handleOptionClick("IllustrationGallery")
                                    setShowWorkOptions(false);
                                    setShowGalleryOptions(true);
                                    setShowShopOptions(false);
                                    setActiveWork(false);
                                    setActiveGallery(true);
                                    setActiveAbout(false);
                                    setActiveShop(false);
                                    setIllustrationSelected(true);
                                    setDailySelected(false);
                                    setLoveSelected(false);
                                }}
                            >
                                gallery
                            </div>
                            <div
                                className={`col ${activeAbout ? 'blueText' : ''} text-center`}
                                onClick={() => {
                                    handleOptionClick("About")
                                    setShowWorkOptions(false);
                                    setShowGalleryOptions(false);
                                    setShowShopOptions(false);
                                    setActiveWork(false);
                                    setActiveGallery(false);
                                    setActiveAbout(true);
                                    setActiveShop(false);
                                }}
                            >
                                about
                            </div>
                            <div
                                className={`col ${activeShop ? 'redText' : ''} text-end`}
                                style={{ paddingRight: "2rem"}}
                                onClick={() => {
                                    handleOptionClick("PrintShop")
                                    setShowWorkOptions(false);
                                    setShowGalleryOptions(false);
                                    setShowShopOptions(true);
                                    setActiveWork(false);
                                    setActiveGallery(false);
                                    setActiveAbout(false);
                                    setActiveShop(true);
                                    setPrintSelected(true);
                                    setCanvasSelected(false);
                                    setShopCollabsSelected(false);
                                    setAllSelected(false);
                                }}
                            >
                                shop
                            </div>
                        </div>
                    </div>
                </div>

                {/* Opções do Work */}

                {showWorkOptions && (
                    <>
                        <div className="row"
                             style={{
                                 padding: "1rem",
                                 borderBottom: "0.08rem solid black",
                                 backgroundColor: "white",
                             }}
                        >
                            <div className="col-5">

                            </div>
                            <div className="col-7">
                                <div className="row justify-content-between">
                                    <div
                                        className={`col ${activeSelected ? 'pinkText' : ''} text-start`}
                                        onClick={() => {
                                            handleOptionClick("SelectedWork")
                                            setActiveWork(true);
                                            setActiveGallery(false);
                                            setActiveAbout(false);
                                            setActiveShop(false);
                                            setActiveSelected(true);
                                            setCollabsSelected(false);
                                            setMuralSelected(false);
                                            setEditorialSelected(false);
                                            setArtSelected(false);
                                        }}
                                    >
                                        selected
                                    </div>
                                    <div
                                        className={`col ${collabsSelected ? 'pinkText' : ''} text-start`}
                                        onClick={() => {
                                            handleOptionClick("CollabsWork")
                                            setActiveWork(true);
                                            setActiveGallery(false);
                                            setActiveAbout(false);
                                            setActiveShop(false);
                                            setActiveSelected(false);
                                            setCollabsSelected(true);
                                            setMuralSelected(false);
                                            setEditorialSelected(false);
                                            setArtSelected(false);
                                        }}
                                    >
                                        collabs
                                    </div>
                                    <div
                                        className={`col ${muralSelected ? 'pinkText' : ''} text-center`}
                                        onClick={() => {
                                            handleOptionClick("MuralWork")
                                            setActiveWork(true);
                                            setActiveGallery(false);
                                            setActiveAbout(false);
                                            setActiveShop(false);
                                            setActiveSelected(false);
                                            setCollabsSelected(false);
                                            setMuralSelected(true);
                                            setEditorialSelected(false);
                                            setArtSelected(false);
                                        }}
                                    >
                                        mural
                                    </div>
                                    <div
                                        className={`col ${editorialSelected ? 'pinkText' : ''} text-end`}
                                        onClick={() => {
                                            handleOptionClick("EditorialWork")
                                            setActiveWork(true);
                                            setActiveGallery(false);
                                            setActiveAbout(false);
                                            setActiveShop(false);
                                            setActiveSelected(false);
                                            setCollabsSelected(false);
                                            setMuralSelected(false);
                                            setEditorialSelected(true);
                                            setArtSelected(false);
                                        }}
                                    >
                                        editorial
                                    </div>
                                    <div
                                        className={`col ${artSelected ? 'pinkText' : ''} text-end`}
                                        style={{ paddingRight: "2rem"}}
                                        onClick={() => {
                                            handleOptionClick("ArtWork")
                                            setActiveWork(true);
                                            setActiveGallery(false);
                                            setActiveAbout(false);
                                            setActiveShop(false);
                                            setActiveSelected(false);
                                            setCollabsSelected(false);
                                            setMuralSelected(false);
                                            setEditorialSelected(false);
                                            setArtSelected(true);
                                        }}
                                    >
                                        art
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Opções da Gallery */}

                {showGalleryOptions && (
                    <>
                        <div className="row"
                             style={{
                                 padding: "1rem",
                                 borderBottom: "0.08rem solid white",
                                 backgroundColor: "black",
                                 color: "white",
                             }}
                        >
                            <div className="col-5">

                            </div>
                            <div className="col-7">
                                <div className="row justify-content-between">
                                    <div
                                        className={`col ${illustrationSelected ? 'greenText' : ''} text-start`}
                                        onClick={() => {
                                            handleOptionClick("IllustrationGallery")
                                            setActiveWork(false);
                                            setActiveGallery(true);
                                            setActiveAbout(false);
                                            setActiveShop(false);
                                            setIllustrationSelected(true);
                                            setDailySelected(false);
                                            setLoveSelected(false);
                                        }}
                                    >
                                        illustration
                                    </div>
                                    <div
                                        className={`col ${dailySelected ? 'greenText' : ''} text-center`}
                                        onClick={() => {
                                            handleOptionClick("DailyGallery")
                                            setActiveWork(false);
                                            setActiveGallery(true);
                                            setActiveAbout(false);
                                            setActiveShop(false);
                                            setIllustrationSelected(false);
                                            setDailySelected(true);
                                            setLoveSelected(false);
                                        }}
                                    >
                                        daily
                                    </div>
                                    <div
                                        className={`col ${loveSelected ? 'greenText' : ''} text-end`}
                                        style={{ paddingRight: "2rem"}}
                                        onClick={() => {
                                            handleOptionClick("LoveGallery")
                                            setActiveWork(false);
                                            setActiveGallery(true);
                                            setActiveAbout(false);
                                            setActiveShop(false);
                                            setIllustrationSelected(false);
                                            setDailySelected(false);
                                            setLoveSelected(true);
                                        }}
                                    >
                                        love
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Opções da Shop */}

                {showShopOptions && (
                    <>
                        <div className="row"
                             style={{
                                 padding: "1rem",
                                 borderBottom: "0.08rem solid black",
                                 backgroundColor: "white",
                             }}
                        >
                            <div className="col-5">

                            </div>
                            <div className="col-7">
                                <div className="row justify-content-between">
                                    <div
                                        className={`col ${printSelected ? 'redText' : ''} text-start`}
                                        onClick={() => {
                                            handleOptionClick("PrintShop")
                                            setActiveWork(false);
                                            setActiveGallery(false);
                                            setActiveAbout(false);
                                            setActiveShop(true);
                                            setPrintSelected(true);
                                            setCanvasSelected(false);
                                            setShopCollabsSelected(false);
                                            setAllSelected(false);
                                        }}
                                    >
                                        print
                                    </div>
                                    <div
                                        className={`col ${canvasSelected ? 'redText' : ''} text-start`}
                                        onClick={() => {
                                            handleOptionClick("CanvasShop")
                                            setActiveWork(false);
                                            setActiveGallery(false);
                                            setActiveAbout(false);
                                            setActiveShop(true);
                                            setPrintSelected(false);
                                            setCanvasSelected(true);
                                            setShopCollabsSelected(false);
                                            setAllSelected(false);
                                        }}
                                    >
                                        canvas
                                    </div>
                                    <div
                                        className={`col ${shopCollabsSelected ? 'redText' : ''} text-center`}
                                        onClick={() => {
                                            handleOptionClick("CollabsShop")
                                            setActiveWork(false);
                                            setActiveGallery(false);
                                            setActiveAbout(false);
                                            setActiveShop(true);
                                            setPrintSelected(false);
                                            setCanvasSelected(false);
                                            setShopCollabsSelected(true);
                                            setAllSelected(false);
                                        }}
                                    >
                                        collabs
                                    </div>
                                    <div
                                        className={`col ${allSelected ? 'redText' : ''} text-end`}
                                        style={{ paddingRight: "2rem"}}
                                        onClick={() => {
                                            handleOptionClick("AllShop")
                                            setActiveWork(false);
                                            setActiveGallery(false);
                                            setActiveAbout(false);
                                            setActiveShop(true);
                                            setPrintSelected(false);
                                            setCanvasSelected(false);
                                            setShopCollabsSelected(false);
                                            setAllSelected(true);
                                        }}
                                    >
                                        all
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}