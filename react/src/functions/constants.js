export const DAYS_ARRAY = [...Array(31 + 1).keys()].slice(1);
export const YEARS_ARRAY = [...Array(4 + 2025).keys()].slice(2025);
export const WEEK_DAYS_ARRAY = [
    { number: 1,  title: "Monday", shortTitle: "Mon" },
    { number: 2,  title: "Tuesday", shortTitle: "Tue" },
    { number: 3,  title: "Wednesday", shortTitle: "Wed" },
    { number: 4,  title: "Thursday", shortTitle: "Thu" },
    { number: 5,  title: "Friday", shortTitle: "Fri" },
    { number: 6,  title: "Saturday", shortTitle: "Sat" },
    { number: 7,  title: "Sunday", shortTitle: "Sun" },
];
export const MONTHS_ARRAY = [
    { number: 1,  title: "January" },
    { number: 2,  title: "February" },
    { number: 3,  title: "March" },
    { number: 4,  title: "April" },
    { number: 5,  title: "May" },
    { number: 6,  title: "June" },
    { number: 7,  title: "July" },
    { number: 8,  title: "August" },
    { number: 9,  title: "September" },
    { number: 10, title: "October" },
    { number: 11, title: "November" },
    { number: 12, title: "December" },
];
export const EVENT_TYPES = [
    { code: "U", title: "Unique" },
    { code: "M", title: "Monthly" },
    { code: "A", title: "Annual" },
];

export const IMPORTANT_STATUSES = [
    { code: "A", title: "IMPORTANT ,,,, URGENT" },
    { code: "B", title: "IMPORTANT ,,,, not urgent" },
    { code: "C", title: "not important ,,,, URGENT" },
    { code: "D", title: "not important ,,,, not urgent" },
];

export const DAY = 'D';
export const NIGHT = 'N';
export const DAY_OFF = 'O';
export const FULL_DAY_PERIOD = {
    [DAY]: 'Day',
    [NIGHT]: 'Night',
    [DAY_OFF]: 'Day off'
};
export const WORK_SCHEDULE = [
    DAY, DAY, DAY,
    DAY_OFF, DAY_OFF, DAY_OFF,
    NIGHT, NIGHT, NIGHT,
    DAY_OFF, DAY_OFF, DAY_OFF,
]; 


export const getWeekDayTitle = (number) => {
    return WEEK_DAYS_ARRAY[number-1].title;
}
export const getWeekDayShortTitle = (number) => {
    return WEEK_DAYS_ARRAY[number-1].shortTitle;
}
export const getMonthTitle = (number) => {
    return MONTHS_ARRAY[number-1].title;
}
export const getShiftTypeTitle = (code) => {
    return FULL_DAY_PERIOD[code];
}
