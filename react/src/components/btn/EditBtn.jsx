import { Link } from "react-router-dom";

export default function EditBtn({ title, path, returnPath }) {
    return (
        <Link
            className="btn btn-blue"
            to={path}
            state={{from: returnPath}}
        >
            {title}
        </Link>  
    )
}