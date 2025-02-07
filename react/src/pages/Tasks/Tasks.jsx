import { useGetTasksQuery, useDeleteTaskMutation } from "@api/tasksApi";
import Header from "@components/Header";
import Loading from "@components/Loading";
import TableItem from "@components/table/TableItem";
import AddBtnBlock from "./components/AddBtnBlock";


export default function Tasks() {
    const { data = [], isLoading, error } = useGetTasksQuery();

    return (
        <div className="container">
            <Header title="Tasks" />

            <main className="main">

                <div className="section">
                    <div className="section__col col-6">
                        <AddBtnBlock />

                        <Loading isLoading={isLoading} />

                        <ul>
                            {data.tasks?.map((task) => (
                                <TableItem
                                    key={task.id}
                                    item={task}
                                    object="tasks"
                                    deleteMutation={useDeleteTaskMutation}
                                />                            
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>        
    )
}