import { useParams } from "react-router-dom";
import { useGetIdeaQuery } from "@api/ideasApi";
import Header from "@components/Header";

export default function Idea() {
    const { id } = useParams();
    const { data = {}, isLoading } = useGetIdeaQuery(id);

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