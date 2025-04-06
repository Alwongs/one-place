export default function SalaryElement({ label, value, unit = "", classes = "" }) {
    return (
        <div className={`schedule-month-info__row ${classes}`}>
            <label className="schedule-month-info__label">{label}:</label>
            <div className="schedule-month-info__value">
                <strong>{value}</strong> <small>{unit}</small>
            </div>
        </div>
    )
}