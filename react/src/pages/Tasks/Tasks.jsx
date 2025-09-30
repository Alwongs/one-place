import { useGetTasksQuery, useDeleteTaskMutation } from "@api/tasksApi";
import Header from "@components/Header";
import Loading from "@components/Loading";
import AddBtnBlock from "./components/AddBtnBlock";
import Square from "./components/Square";

export default function Tasks() {
    const { data = [], isLoading, error } = useGetTasksQuery();
    
    return (
        <div className="container">
            <Header title="Tasks" />
            <main className="main">
                <div className="section">
                    <div className="section__col col-auto">
                        <AddBtnBlock />
                        <Loading isLoading={isLoading} />
                        <div className="main-square-container">
                            <Square
                                description="Кризисные ситуации"
                                classes="square-a"
                                tasks={data.a}
                                deleteMutation={useDeleteTaskMutation}
                            />
                            <Square
                                description="Работа на перспективу"
                                classes="square-b"
                                tasks={data.b}
                                deleteMutation={useDeleteTaskMutation}
                            />
                            <Square
                                description="Помехи, чужие дела"
                                classes="square-c"
                                tasks={data.c}
                                deleteMutation={useDeleteTaskMutation}
                            />   
                            <Square
                                description="Мелочи, отнимающие время"
                                classes="square-d"
                                tasks={data.d}
                                deleteMutation={useDeleteTaskMutation}
                            />  
                        </div>                                                                   
                    </div>
                </div>
            </main>
        </div>        
    )
}
