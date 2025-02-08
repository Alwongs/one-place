import { useParams } from "react-router-dom";
import { useGetScheduleDayQuery } from "@api/scheduleDaysApi";
import { getShiftTypeTitle } from "@functions/constants";
import DetailBtnBlock from "./components/BtnBlockDetail";
import Breadcrumbs from "./components/Breadcrumbs";

export default function ShowDay() {
    const { id, year, month, day } = useParams();
    const { data: schedule_day, isLoading } = useGetScheduleDayQuery( id );

    return schedule_day && (
        <>
            <Breadcrumbs
                year={schedule_day.year}
                month={schedule_day.month}
                day={schedule_day.day}
            />

            <main className="main">
                <DetailBtnBlock
                    editPath={`/schedule/${year}/${month}/${day}/${id}/edit/`}
                    returnAfterEditPath={`/schedule/${schedule_day?.year}/${schedule_day?.month}`}
                />

                <section className="section">
                    <div className="section__col col-6">
                        <div className="detail">
                            <div className="detail-element">
                                <p className="detail-element__label">Day shift:</p>
                                <p className="detail-element__value">{getShiftTypeTitle(schedule_day?.shift_type)}</p>
                            </div>
                            <div className="detail-element">
                                <p className="detail-element__label">Description:</p>
                                <p className="detail-element__value">{schedule_day?.description}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </> 
    )
}