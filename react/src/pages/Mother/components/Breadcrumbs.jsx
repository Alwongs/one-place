import { Link } from "react-router-dom";
import { getMonthTitle } from "@functions/constants";

export default function Breadcrumbs({ year=null, month=null, day=null, add=false, edit=false }) {

    return (
        <div className="breadcrumbs">
            { !year && !add && <Link to={"/"}>Dashboard</Link> }
            { year && <Link to={"/schedule"}>Years</Link> }

            { year && <span> / </span> }
            { year && <Link to={`/schedule/${year}`}>{year}</Link> }

            { month && <span> / </span> }
            { month && <Link to={`/schedule/${year}/${month}`}>{getMonthTitle(month)}</Link> }

            { day && <span> / </span> }
            { day && <Link to={`/schedule/${year}/${month}/${day}`}>{day}</Link> }

            { add && <span> / </span> }
            { add && <span>New Schedule</span> }

            { edit && <span> / </span> }
            { edit && <span>Edit</span> }
        </div>        
    )
}