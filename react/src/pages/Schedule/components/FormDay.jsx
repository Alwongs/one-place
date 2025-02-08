import { WORK_SCHEDULE_OPTIONS } from "@functions/selectOptions.jsx";
import SubmitBtnBlock from "./BtnBlockSubmit";
import SelectField from "@components/form/SelectField";
import TextareaField from "@components/form/TextareaField";

export default function FormDay({ onSubmit, onChange, formData }) {

    return (
        <form className="form" onSubmit={onSubmit}>

            <SelectField
                classes="form__element"
                id="ScheduleDaysFormShiftType"
                label="Shift type"
                name="shift_type"
                value={formData.shift_type}
                onChange={onChange}
                options={WORK_SCHEDULE_OPTIONS}
            />    

            <TextareaField
                id="ScheduleDaysFormDescription"
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