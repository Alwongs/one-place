import CardItem from "./CardItem";
import { buildStilesForEventCard } from "@functions/reminder";
import EmptyList from "@components/table/EmptyList";

export default function ReminderCard({ title, events }) {

    const styles = buildStilesForEventCard(title, events)

    return (
        <li className={`reminder-card ${title}`} style={styles}>
            <h3 className={`reminder-card__title ${title}`}>{title}</h3>

            <ul className="reminder-card__list">
                {events?.map((event) => (
                    <CardItem
                        key={event.id}
                        item={event}
                        cardTitle={title}
                        object={"events"}
                    />
                ))}
                {events.length === 0 && <EmptyList />}
            </ul>
        </li>               
    )
}