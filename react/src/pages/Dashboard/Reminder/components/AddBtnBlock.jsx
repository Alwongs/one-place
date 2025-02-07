import AddBtn from "@components/btn/AddBtn";

export default function AddBtnBlock({ classes = "" }) {
    return (
        <div className={`btn-block ${classes}`}>

            <AddBtn
                title="Add Event"
                addPath={`/events/create`}
                returnPath="/"
            />
        </div>        
    )
}