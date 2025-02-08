export default function SelectField({ classes, id, name, value, onChange, label, options, disabled = false }) {
    return (
        <div className={classes}>
            <label htmlFor={id} >{label}:</label>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
            >
                {options}
            </select>
        </div>        
    )
}