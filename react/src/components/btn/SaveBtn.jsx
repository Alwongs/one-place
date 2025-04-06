export default function SubmitBtn({title, onClick}) {
    return (
        <button
            className="btn btn-green"
            onClick={onClick}
        >
            {title}
        </button>
    )
}