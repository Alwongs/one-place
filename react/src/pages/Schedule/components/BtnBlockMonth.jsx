import DeleteBtn from "@components/btn/DeleteBtn";
import AddBtn from "@components/btn/AddBtn";
import OpenModalBtn from "./OpenModalBtn";

export default function MonthBtnBlock({ year, month, onClick, isContent, openModalHandler }) {
    return (
        <div className={"btn-block flex-end"}>
            <OpenModalBtn
                title="Salary"
                onClick={openModalHandler}
            />
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