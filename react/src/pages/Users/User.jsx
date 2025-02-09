import { useParams } from "react-router-dom";
import { useGetUserQuery } from "@api/usersApi";
import Header from "@components/Header";
import Loading from "@components/Loading";

export default function User() {
    const { id } = useParams();
    const { data = {}, isLoading } = useGetUserQuery(id);

    return (
        <>
            <Header title={data.email} />     

            <main className="main">
                <div className="section">
                    <div className="section__col col-6">
                        <p>{data.name}</p>
                    </div>
                </div>
            </main>         
        </>  
    )
}