import WorkPost from "./WorkPost";

export default function SelectedWork(props){

    const {navbarHeight} = props;

    const divStyles = {
        marginTop: '114px',
        ...(window.innerWidth >= 768 && { marginBottom: "56px" })
    };

    return(
        <>
            <div style={divStyles}>
                <WorkPost navbarHeight={navbarHeight}/>
                <WorkPost navbarHeight={navbarHeight}/>
                <WorkPost navbarHeight={navbarHeight}/>
            </div>
        </>
    )
}