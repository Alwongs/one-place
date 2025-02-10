import { usePostponeEventMutation, useDeleteEventMutation } from "@api/eventsApi";
import { timestampToDate } from "@functions/datetime";
import TableActions from "@components/table/TableActions";
import CardItemLink from "./CardItemLink";

export default function CardItem({item, cardTitle, object}) {

    return (
        <li className={`card-row ${cardTitle}`}>

            <CardItemLink
                cardTitle={cardTitle}
                title={item.title}
                path={`/${object}/${item.id}`}
                date={timestampToDate(item.timestamp)}
            />

            <TableActions
                itemId={item.id}
                itemType={item.type}
                editPath={`/${object}/edit/${item.id}`}
                returnPath={'/'}
                deleteMutation={useDeleteEventMutation}
                postponeMutation ={usePostponeEventMutation}
                template={"card"}       
            />
        </li>        
    )
}