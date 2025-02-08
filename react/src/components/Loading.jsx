export default function Loading({isLoading}) {
    if (!isLoading) return null;

    return (
        <div className="loading">
            <p className="loading__modal">Loading...</p>
        </div>
    )
}