import { Link } from "react-router-dom";

export default function CardItemLink({title, date, path}) {
    return (
        <Link
            className="card-row__title"
            to={path}
            title={date}             
        >
            &bull;&nbsp;&nbsp;{title}
        </Link>         
    )
}