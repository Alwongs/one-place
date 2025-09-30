import TableActions from "./TableActions";
import TableItemLink from "./TableItemLink";
import TableDate from "./TableItemDate";

export default function TableItem({ item, object, deleteMutation }) {  
    
    return (
        <li className="square-item">

            <TableDate
                timestamp={item.timestamp}
                hideInMobile={true}
            />

            <TableItemLink
                title={item.title}
                path={`/${object}/${item.id}`}
            />

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