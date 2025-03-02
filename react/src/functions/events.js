import { getDateFromTimestamp, getMonthFromTimestamp, getFullYearFromTimestamp } from "@functions/datetime";

export const tsToDateManage = (events) => {

    const newArray = events?.map(event => ({
        ...event,
        day: getDateFromTimestamp(event.timestamp),
        month: getMonthFromTimestamp(event.timestamp),
        year: getFullYearFromTimestamp(event.timestamp),
        date: getDateFromTimestamp(event.timestamp) + "." + getMonthFromTimestamp(event.timestamp) + "." + getFullYearFromTimestamp(event.timestamp)
    }));

    return newArray;
}