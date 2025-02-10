import { Link } from "react-router-dom";

export default function CardItemLink({ cardTitle, title, date, path }) {
    return (
        <Link
            className={`card-row__title ${cardTitle}`}
            to={path}
            title={date}             
        >
            &bull;&nbsp;{title}
        </Link>         
    )
}