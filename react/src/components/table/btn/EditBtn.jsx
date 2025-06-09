import { Link } from "react-router-dom";

export default function EditBtn({path, returnPath, hide = false}) {

    if (hide) {
        return false;
    }

    return (
        <Link
            className={`cell-btn btn-icon-edit`}
            to={path}
            state={{ from: returnPath }}
        ></Link>        
    )
}