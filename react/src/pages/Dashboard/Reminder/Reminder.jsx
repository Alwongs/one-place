import { useGetReminderQuery } from "@api/eventsApi";
import Loading from "@components/Loading";
import ReminderCard from "./components/ReminderCard";
import AddBtnBlock from "./components/AddBtnBlock";

export default function Reminder() {
    const { data = {}, isLoading } = useGetReminderQuery();

    return (
        <>
            <h2 className="reminder__title">Reminder</h2>

            <AddBtnBlock />

            <Loading isLoading={isLoading} />
            
            {!isLoading && (
                <ul className="reminder__list">
                    {data.overdue.length !== 0 && <ReminderCard title="overdue" events={data.overdue} /> }
                    <ReminderCard title="today" events={data.today} />
                    <ReminderCard title="tomorrow" events={data.tomorrow} />
                    <ReminderCard title="in week" events={data.in_week} />
                </ul>
            )}        
        </>
    )
}