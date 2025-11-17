import { useParams } from "react-router-dom";
import { useGetProductQuery } from "@api/productsApi";
import Header from "@components/Header";

export default function Product() {
    const { id } = useParams();
    const { data = {}, isLoading } = useGetProductQuery(id);

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