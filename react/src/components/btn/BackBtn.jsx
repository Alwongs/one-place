import { Link } from "react-router-dom";

export default function BackBtn({ title, path }) {
    return (
        <Link
            className="btn btn-blue"
            to={path}
        >
            {title}
        </Link>  
    )
}