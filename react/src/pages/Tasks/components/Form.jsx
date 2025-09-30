import InputField from "@components/form/InputField";
import SelectField from "@components/form/SelectField";
import TextareaField from "@components/form/TextareaField";
import SubmitBtnBlock from "./SubmitBtnBlock";
import { IMPORTANT_STATUSES_OPTIONS } from "@functions/selectOptions";

export default function Form({ onSubmit, onChange, formData }) {

    return (
        <form className="form" onSubmit={onSubmit}>

            <InputField
                id="taskFormTitle"
                label="Title"
                name="title"
                value={formData.title}
                onChange={onChange}
            />

            <InputField
                id="taskFormRate"
                label="Rate"
                name="rate"
                value={formData.rate}
                onChange={onChange}
            />

            <InputField
                id="taskFormPosition"
                label="Position"
                name="position"
                value={formData.position}
                onChange={onChange}
            />

            <InputField
                id="taskFormStatus"
                label="Status"
                name="status"
                value={formData.status}
                onChange={onChange}
            />             

            <SelectField
                classes="form__element"
                id="taskFormImportantStatus"
                label="Important status"
                name="important_status"
                value={formData.important_status}
                onChange={onChange}
                options={IMPORTANT_STATUSES_OPTIONS}
            />            

            <TextareaField
                id="taskFormDecription"
                label="Description"
                name="description"
                value={formData.description}
                onChange={onChange}
            />            

            <SubmitBtnBlock
                id={formData?.id}
                classes="flex-end"
            />
        </form>        
    )
}