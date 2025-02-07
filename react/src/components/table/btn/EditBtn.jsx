import { Link } from "react-router-dom";

export default function EditBtn({path, returnPath}) {
    return (
        <Link
            className={`cell-btn btn-icon-edit`}
            to={path}
            state={{ from: returnPath }}
        ></Link>        
    )
}