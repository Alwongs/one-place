export const timestampToDate = (ts) => {
    return getDateFromTimestamp(ts)
        .padStart(2, '0') + "." + getMonthFromTimestamp(ts)
        .padStart(2, '0') + "." + getFullYearFromTimestamp(ts);
}

export const getDateFromTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // if data from PHP, needs timestamp * 1000
    return String(date.getDate())
}
export const getMonthFromTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // if data from PHP, needs timestamp * 1000
    return String(date.getMonth()+1);
}
export const getFullYearFromTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // if data from PHP, needs timestamp * 1000
    return String(date.getFullYear());
}


export const getCurrentDate = () => {
    const now = new Date();
    return String(now.getDate()).padStart(2, '0');
}
export const getCurrentMonth = () => {
    const now = new Date();
    return String(now.getMonth()+1).padStart(2, '0');
}
export const getCurrentYear = () => {
    const now = new Date();
    return String(now.getFullYear());
}

export const getTimestampFromDate = ({ day, month, year }) => {
    const date = year + "-" + month + "-" + day;
    return Math.floor(new Date(date).getTime() / 1000);
}