export default function PostponeBtn({visible, type, onClick}) {
    if (type === 'U' || visible === null) {
        return null;
    }

    return (      
        <button
            className={`cell-btn btn-icon-postpone`}
            onClick={onClick}
        ></button>  
    )
}