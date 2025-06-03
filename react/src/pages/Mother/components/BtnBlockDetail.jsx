import EditBtn from "@components/btn/EditBtn";

export default function detailBtnBlock({ editPath, returnAfterEditPath }) {
    return (
        <div className={"btn-block flex-end"}>
            <EditBtn
                title="Edit"
                path={editPath}
                returnPath={returnAfterEditPath}
            />
        </div>        
    )
}