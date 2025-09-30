import TableItem from "./table/TableItem";

export default function Square({ description,  classes, tasks, deleteMutation }) {

    console.log(tasks)

    return (
        <div className={`square ${classes}`}>
            <p className="square-description">
                {description}
            </p>
            {tasks?.map((task) =>(
                <TableItem
                    key={task.id}
                    item={task}
                    object="tasks"
                    deleteMutation={deleteMutation}
                />                                  
            ))}
        </div>       
    )
}