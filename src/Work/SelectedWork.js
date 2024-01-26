import WorkPost from "./WorkPost";

export default function SelectedWork(props){

    const {navbarHeight} = props;

    return(
        <>
            <div style={{marginTop:"7rem",marginBottom:"3rem"}}>
                <WorkPost navbarHeight={navbarHeight}/>
                <WorkPost navbarHeight={navbarHeight}/>
                <WorkPost navbarHeight={navbarHeight}/>
            </div>
        </>
    )
}