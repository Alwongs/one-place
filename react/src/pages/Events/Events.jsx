import { useGetEventsQuery, useDeleteEventMutation } from "@api/eventsApi";
import Header from "@components/Header";
import Loading from "@components/Loading";
import TableItem from "@components/table/TableItem";
import AddBtnBlock from "./components/AddBtnBlock";

export default function Events() {
    const { data = [], isLoading } = useGetEventsQuery();

    return (
        <>
            <Header title="Events" />

            <main className="main">
                <div className="section">
                    <div className="section__col col-6">
                        <AddBtnBlock />

                        <Loading isLoading={isLoading} />

                        <ul className="table">
                            {data.events?.map((event) => (
                                <TableItem
                                    key={event.id}
                                    item={event}
                                    object="events"
                                    deleteMutation={useDeleteEventMutation}
                                />  
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

