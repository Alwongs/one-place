import { Link } from "react-router-dom";

export default function AddBtn({ title, addPath, returnPath, hide }) {

    if ( hide ) return false;

    return (
        <Link
            className="btn btn-blue"
            to={addPath}
            state={{ from: returnPath }}
        >
            {title}
        </Link>
    )
}