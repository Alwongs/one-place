import { Link } from "react-router-dom";

export default function ItemYear({year, classes}) {
    return (
        <li className="schedule-years__item">
            <Link
                className={`schedule-years__item-link ${classes}`}
                to={`/mother-schedule/${year}`}
            >
                {year}
            </Link>
        </li>        
    )
}