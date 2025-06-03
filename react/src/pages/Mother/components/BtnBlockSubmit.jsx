import SubmitBtn from "@components/btn/SubmitBtn";

export default function SubmitBtnBlock({ id = null }) {
    return (
        <div className={"btn-block flex-end"}>
            <SubmitBtn title={ id ? "Save" : "Create" } />
        </div>        
    )
}