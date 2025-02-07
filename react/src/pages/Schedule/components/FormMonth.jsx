import { MONTHS_OPTIONS, YEARS_OPTIONS, WORK_SCHEDULE_INDEX_OPTIONS } from "@functions/selectOptions.jsx";
import SubmitBtnBlock from "./BtnBlockSubmit";
import SelectField from "@components/form/SelectField";

export default function FormMonth({ onSubmit, onChange, formData }) {

    return (
        <form className="form" onSubmit={onSubmit}>

            <SelectField
                classes="form__element"
                id="ScheduleDaysFormYear"
                label="Year"
                name="year"
                value={formData.year}
                onChange={onChange}
                options={YEARS_OPTIONS}
                disabled={true}
            />

            <SelectField
                classes="form__element"
                id="ScheduleDaysFormMonth"
                label="Month"
                name="month"
                value={formData.month}
                onChange={onChange}
                options={MONTHS_OPTIONS}
                disabled={true}
            />

            <SelectField
                classes="form__element"
                id="ScheduleDaysFormFirstDayIndex"
                label="First Day Index"
                name="first_day_shift_index"
                value={formData.first_day_shift_index}
                onChange={onChange}
                options={WORK_SCHEDULE_INDEX_OPTIONS}
            />                                                          

            <SubmitBtnBlock
                id={formData?.id}
                classes="flex-end"
            />
        </form>        
    )
}