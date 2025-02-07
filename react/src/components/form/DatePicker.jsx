import { DAYS_OPTIONS, MONTHS_OPTIONS, YEARS_OPTIONS } from "@functions/selectOptions.jsx";
import SelectField from "./SelectField";

export default function DatePicker({ day, month, year, onChange }) {

    return (
        <div className="form__element-date form-element-date">
            
            <SelectField
                classes="form-element-date__element form-element-date__element-day"
                id="datePickerDay"
                label="Day"
                name="day"
                value={day}
                onChange={onChange}
                options={DAYS_OPTIONS}
            />

            <SelectField
                classes="form-element-date__element form-element-date__element-month"
                id="datePickerMonth"
                label="Month"
                name="month"
                value={month}
                onChange={onChange}
                options={MONTHS_OPTIONS}
            />   
                
            <SelectField
                classes="form-element-date__element form-element-date__element-year"
                id="datePickerYear"
                label="Year"
                name="year"
                value={year}
                onChange={onChange}
                options={YEARS_OPTIONS}
            />       
        </div>        
    )
}