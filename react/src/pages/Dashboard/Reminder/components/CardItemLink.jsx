import { Link } from "react-router-dom";
import { buildStilesForEventCardRow } from "@functions/reminder";

export default function CardItemLink({ cardTitle, title, date, path }) {

    const styles = buildStilesForEventCardRow(cardTitle)

    return (
        <Link
            className={`card-row__title ${cardTitle}`}
            to={path}
            title={date}
            style={styles}      
        >
            &bull;&nbsp;{title}
        </Link>         
    )
}