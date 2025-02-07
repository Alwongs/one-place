export default function InputField({ id, name, value, onChange, label, disabled = false }) {
    return (
        <div className="form__element">
            <label htmlFor={id} >{label}:</label>
            <input
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>        
    )
}