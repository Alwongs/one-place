import { Link } from "react-router-dom";
import { FULL_DAY_PERIOD, getWeekDayTitle, getMonthTitle } from "@functions/constants";
import EditBtn from "@components/table/btn/EditBtn";

export default function ItemDay({ day }) {

    let classes;
    if (day.shift_type === "D") {
        classes = "day-shift";
    } else if (day.shift_type === "N") {
        classes = "night-shift";
    } else {
        classes = "";
    }

    const flag = day.description ? <div className="message-flag"></div> : "";

    const linkClass = (day.week_day == 6 || day.week_day == 7) ? "red-text" : "";

    return (
        <li className={`schedule-row ${classes}`}>

            <Link
                className={`schedule-row__left`}
                to={`/schedule/${day.year}/${day.month}/${day.day}/${day.id}`}
            >
                <div className={`schedule-row__date-wrapper ${linkClass}`}>
                    <div className="schedule-row__date">
                        {day.day} {getMonthTitle(day.month)}
                    </div>
                    <div className="schedule-row__week-day">
                        {getWeekDayTitle(day.week_day)}
                    </div>
                </div>
                <div className="schedule-row__shift_type">
                    {FULL_DAY_PERIOD[day.shift_type]}
                </div>
                {flag}
            </Link>
            

            <EditBtn
                path={`/schedule/${day.year}/${day.month}/${day.day}/${day.id}/edit/`}
                returnPath={`/schedule/${day.year}/${day.month}`}
            />  
        </li>          
    )
}