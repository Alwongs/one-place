export default function OpenModalBtn({hide = false, onClick, title}) {

    if ( hide ) return false;

    return (
        <button
            className="btn btn-blue"
            onClick={onClick}
        >
            {title}
        </button>      
    )
}