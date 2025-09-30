import { Link } from "react-router-dom";

export default function TableItemLink({title, path}) {
    return (
        <Link
            className="square-item__title"
            to={path}                
        >
            {title}
        </Link>         
    )
}