import { useParams } from "react-router-dom";
import { useGetEventQuery } from "@api/eventsApi";
import { timestampToDate } from "@functions/datetime";
import Header from "@components/Header";

export default function Event() {
    const { id } = useParams();
    const { data = {}, isLoading } = useGetEventQuery(id);

    if (!data) return "loading";

    return (
        <>
            <Header title={data.title} />

            <main className="main">
                <section className="section">
                    <div className="section__col col-6">
                        <p>{timestampToDate(data?.timestamp)}</p>
                        <p>{data.description}</p>
                    </div>
                </section>
            </main>
        </>
    )
}