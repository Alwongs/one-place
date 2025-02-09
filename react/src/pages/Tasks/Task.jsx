import { useParams } from "react-router-dom";
import { useGetTaskQuery } from "@api/tasksApi";
import Header from "@components/Header";

export default function Task() {
    const { id } = useParams();
    const { data = {}, isLoading } = useGetTaskQuery(id);

    return (
        <>
            <Header title={data.title} />

            <main className="main">
                <div className="section">
                    <div className="section__col col-6">
                        <p>{data.description}</p>
                    </div>
                </div>
            </main>
        </>
    )
}