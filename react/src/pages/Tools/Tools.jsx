import { useGetToolsQuery, useDeleteToolMutation } from "@api/toolsApi";
import Header from "@components/Header";
import Loading from "@components/Loading";
import TableItem from "./components/TableItem";
import AddBtnBlock from "./components/AddBtnBlock";


export default function Tools() {
    const { data = [], isLoading, error } = useGetToolsQuery();

    console.log(data)

    return (
        <div className="container">
            <Header title="Tools" />

            <main className="main">

                <div className="section">
                    <div className="section__col col-6">
                        <AddBtnBlock />

                        <Loading isLoading={isLoading} />

                        <ul>
                            {data.tools?.map((tool) => (
                                <TableItem
                                    key={tool.id}
                                    item={tool}
                                    object="tools"
                                    deleteMutation={useDeleteToolMutation}
                                />                            
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>        
    )
}