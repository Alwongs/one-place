export default function DevelpmentBlock() {

    let backend = "";
    let classes = "";
    if (import.meta.env.VITE_API_URL == "https://one-place") {
        backend = "Local";
        classes = "text-green";
    } else {
        backend = "Remote";
        classes = "text-blue";        
    }

    return (
        <div className="backend-info-block">
            <span className="backend-info-block__label">Backend:</span>
            <span className={`backend-info-block__value ${classes}`}>
                {backend}
            </span>
        </div>        
    )
}