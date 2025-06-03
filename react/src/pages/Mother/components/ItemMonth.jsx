import { Link } from "react-router-dom";

export default function ItemMonth({ title, classes, path }) {
    return (
        <li className="schedule-months__item">
            <Link
                className={`schedule-months__item-link ${classes}`}
                to={path}
            >
                {title}
            </Link>
        </li>        
    )
}