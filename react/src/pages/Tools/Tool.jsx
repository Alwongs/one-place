import { useParams } from "react-router-dom";
import { useGetToolQuery } from "@api/toolsApi";
import Header from "@components/Header";

export default function Tool() {
    const { id } = useParams();
    const { data = {}, isLoading } = useGetToolQuery(id);

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