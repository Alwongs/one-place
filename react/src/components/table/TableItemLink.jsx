import { Link } from "react-router-dom";

export default function TableItemLink({title, path}) {
    return (
        <Link
            className="table-row__title"
            to={path}                
        >
            {title}
        </Link>         
    )
}