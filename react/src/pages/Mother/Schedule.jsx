import { YEARS_ARRAY } from "@functions/constants";
import { useGetScheduleDaysInYearCountQuery } from "@api/motherScheduleDaysApi";
import ItemYear from "./components/ItemYear";
import Breadcrumbs from "./components/Breadcrumbs";

export default function Schedule() {
    const { data, isLoading } = useGetScheduleDaysInYearCountQuery({ "start": YEARS_ARRAY[0], "end": YEARS_ARRAY[YEARS_ARRAY.length - 1] });

    return (
        <>
            <Breadcrumbs />

            <main className="main">
                <section className="section">
                    <div className="section__col col-6">
                        <ul className="schedule-years">
                            {YEARS_ARRAY?.map((year) => (
                                <ItemYear
                                    key={year}
                                    year={year}
                                    classes={!data?.counts[`year_${year}`] ? "mute" : ""}
                                />
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </>         
    )
}