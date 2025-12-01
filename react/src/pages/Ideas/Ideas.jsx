import { useGetIdeasQuery, useDeleteIdeaMutation } from "@api/ideasApi";
import Header from "@components/Header";
import Loading from "@components/Loading";
import TableItem from "./components/TableItem";
import AddBtnBlock from "./components/AddBtnBlock";


export default function Ideas() {
    const { data = [], isLoading, error } = useGetIdeasQuery();

    console.log(data)

    return (
        <div className="container">
            <Header title="Ideas" />

            <main className="main">

                <div className="section">
                    <div className="section__col col-6">
                        <AddBtnBlock />

                        <Loading isLoading={isLoading} />

                        <ul>
                            {data.ideas?.map((idea) => (
                                <TableItem
                                    key={idea.id}
                                    item={idea}
                                    object="ideas"
                                    deleteMutation={useDeleteIdeaMutation}
                                />                            
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>        
    )
}