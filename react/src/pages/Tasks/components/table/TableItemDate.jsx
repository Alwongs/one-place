import { timestampToDate } from "@functions/datetime";

export default function TableItemDate({ timestamp = null, hideInMobile = false }) {
    if (!timestamp) {
        return null;
    }

    const classes = hideInMobile ? "square-item__date hide" : "square-item__date";

    return (
        <div className={classes}>
            {timestampToDate(timestamp)}
        </div>     
    )
}