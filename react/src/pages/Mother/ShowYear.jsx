import { useParams } from "react-router-dom";
import { useGetScheduleDaysInMonthCountQuery } from "@api/motherScheduleDaysApi";
import { MONTHS_ARRAY } from "@functions/constants";
import MonthItem from "./components/ItemMonth";
import Breadcrumbs from "./components/Breadcrumbs";

export default function ShowYear() {
    const { year } = useParams();
    const { data, isLoading } = useGetScheduleDaysInMonthCountQuery(year);

    return (
        <>
            <Breadcrumbs year={year} />

            <main className="main">
                <section className="section">
                    <div className="section__col col-6">
                        <ul className="schedule-months">
                            {MONTHS_ARRAY?.map((month) => (
                                <MonthItem
                                    key={month.number}
                                    title={month.title}
                                    classes={!data?.counts[`month_${month.number}`] ? "mute" : ""}
                                    path={`/mother-schedule/${year}/${month.number}`}
                                />
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </> 
    )
}