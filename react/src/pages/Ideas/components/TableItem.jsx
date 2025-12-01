import TableActions from "@components/table/TableActions";
import TableItemLink from "@components/table/TableItemLink";
import TableDate from "@components/table/TableItemDate";

export default function TableItem({ item, object, deleteMutation }) {  
    
    return (
        <li className="table-row">
            
            <TableItemLink
                title={item.title}
                path={`/${object}/${item.id}`}
            />

            <div className="table-row__qty">
                <b>{item.qty}</b> <small>pс</small>
            </div>

            <TableActions
                itemId={item.id}
                eventType={item.type}
                editPath={`/${object}/edit/${item.id}`}
                returnPath={`/${object}`}
                deleteMutation={deleteMutation}
                template="table"          
            />
        </li>     
    )
}