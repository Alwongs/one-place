export default function DatePicker({ day, month, year, onChange }) {
    return (
        <div className="form__element-date form-element-date">
            <div className="form-element-date__element form-element-date__element-day">
                <label htmlFor="datePickerDay">
                    <strong>Day</strong>
                </label>
                <input
                    id="datePickerDay"
                    name="day"
                    value={day}
                    onChange={onChange}
                />
            </div>

            <div className="form-element-date__element form-element-date__element-month">
                <label htmlFor="datePickerMonth">
                    <strong>Month</strong>
                </label>
                <input
                    id="datePickerMonth"
                    name="month"
                    value={month}
                    onChange={onChange}
                />
            </div>

            <div className="form-element-date__element form-element-date__element-year">
                <label htmlFor="datePickerYear">
                    <strong>Year</strong>
                </label>
                <input
                    id="datePickerYear"
                    name="year"
                    value={year}
                    onChange={onChange}
                />
            </div>
        </div>        
    )
}