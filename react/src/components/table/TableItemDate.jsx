import { timestampToDate } from "@functions/datetime";

export default function TableItemDate({ timestamp = null, hideInMobile = false }) {
    if (!timestamp) {
        return null;
    }

    const classes = hideInMobile ? "table-row__date hide" : "table-row__date";

    return (
        <div className={classes}>
            {timestampToDate(timestamp)}
        </div>     
    )
}