import { useState } from "react";
import EditBtn from "./btn/EditBtn";
import DeleteBtn from "./btn/DeleteBtn";
import PostponeBtn from "@components/table/btn/PostponeBtn";

export default function TableActions({ itemId, itemType = null, editPath, returnPath, deleteMutation, postponeMutation = null, template }) {
    const [ deleteItem ] = deleteMutation();
    const [ postponeItem ] = postponeMutation ? postponeMutation() : [];
    const [ loadingId, setLoadingId ] = useState();

    const handleDelete = async () => {
        setLoadingId(itemId);
        await deleteItem(itemId);
    }

    const handlePostpone = async () => {
        setLoadingId(itemId);
        await postponeItem(itemId);
    }    

    return (
        <div className={`${template}-row__actions`}>
            {loadingId === itemId && <span>loading...</span>}

            <PostponeBtn
                visible={postponeMutation}
                id={itemId}
                type={itemType}
                onClick={handlePostpone}
            /> 
            
            <EditBtn
                path={editPath}
                returnPath={returnPath}
            />    

            <DeleteBtn onClick={handleDelete} />
        </div>      
    )
}
