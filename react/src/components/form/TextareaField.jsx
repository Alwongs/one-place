export default function TextareaField({ id, name, value, onChange, label, disabled = false }) {
    return (
        <div className="form__element">
            <label htmlFor={id}>
                <strong>{label}</strong>
            </label>
            <textarea
                id={id}
                name={name}
                value={value || ""}
                onChange={onChange}
                disabled={disabled}
            ></textarea>
        </div>        
    )
}