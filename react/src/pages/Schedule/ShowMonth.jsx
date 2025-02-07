import { useParams } from "react-router-dom";
import { useGetScheduleMonthQuery, useDeleteScheduleMonthMutation } from "@api/scheduleDaysApi";
import MonthBtnBlock from "./components/BtnBlockMonth";
import ItemDay from "./components/ItemDay";
import Breadcrumbs from "./components/Breadcrumbs";

export default function ShowMonth() {
    const { year, month } = useParams();
    const { data = [], isLoading } = useGetScheduleMonthQuery({ year, month });
    const [ deleteScheduleMonth, { isSuccess, isError } ] = useDeleteScheduleMonthMutation();
    const handleDeleteMonth = async (e) => {
        e.preventDefault();
        await deleteScheduleMonth({ year, month });
    }; 

    return (
        <>
            <Breadcrumbs
                year={year}
                month={month}
            />

            <main className="main">
                <MonthBtnBlock
                    isContent={data.schedule_days?.length !== 0}
                    onClick={handleDeleteMonth}
                    backPath={`/schedule/${year}`}
                    year={year}
                    month={month}
                />    

                <section className="section">
                    <div className="section__col col-6">
                        {data.schedule_days?.length !== 0 && (
                            <ul className="table">
                                {data.schedule_days?.map((day) => (
                                    <ItemDay key={day.id} day={day} />
                                ))}
                            </ul>
                        )}
                    </div>
                </section>
            </main> 
        </>      
    )
}