export default function DeleteBtn({title, onClick, hide}) {

    if (hide) return false;

    return (
        <button
            className="btn btn-red"
            onClick={onClick}
        >
            {title}
        </button>
    )
}