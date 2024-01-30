import WorkPost from "./WorkPost";

export default function SelectedWork(props){

    const {navbarHeight} = props;

    const divStyles = {
        marginTop: '7rem',
        ...(window.innerWidth >= 768 && { marginBottom: '3rem' })
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