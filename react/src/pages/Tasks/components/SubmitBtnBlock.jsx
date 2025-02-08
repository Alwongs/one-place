import SubmitBtn from "@components/btn/SubmitBtn";

export default function SubmitBtnBlock({ classes = "", id = null }) {
    return (
        <div className={`btn-block ${classes}`}>

            <SubmitBtn title={ id ? "Save" : "Create" } />

        </div>        
    )
}