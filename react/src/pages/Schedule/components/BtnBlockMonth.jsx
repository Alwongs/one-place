import DeleteBtn from "@components/btn/DeleteBtn";
import AddBtn from "@components/btn/AddBtn";

export default function MonthBtnBlock({ year, month, onClick, isContent }) {
    return (
        <div className={"btn-block flex-end"}>
            <DeleteBtn
                title="Delete"
                onClick={onClick}
                hide={!isContent}
            />
            <AddBtn
                title="Add Schedule days"
                addPath={`/schedule/${year}/${month}/create`}
                returnPath="/schedule"
                hide={isContent}
            />
        </div>        
    )
}