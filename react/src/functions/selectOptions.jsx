import { YEARS_ARRAY, MONTHS_ARRAY, DAYS_ARRAY, EVENT_TYPES, IMPORTANT_STATUSES, WORK_SCHEDULE, FULL_DAY_PERIOD } from "./constants";

export const DAYS_OPTIONS = DAYS_ARRAY.map((day) => <option key={day} value={day}>{day}</option> );
export const MONTHS_OPTIONS = MONTHS_ARRAY.map((month) => <option key={month.number} value={month.number}>{month.title}</option> );
export const YEARS_OPTIONS = YEARS_ARRAY.map((year) => <option key={year} value={year}>{year}</option> );

export const EVENT_TYPES_OPTIONS = EVENT_TYPES.map((type) => <option key={type.code} value={type.code}>{type.title}</option> );



export const IMPORTANT_STATUSES_OPTIONS = IMPORTANT_STATUSES.map((item) => (
    <option
        className={`square-${item.code.toLowerCase()}`}
        key={item.code}
        value={item.code}
    >
        {item.title}
    </option> 
));





export const WORK_SCHEDULE_INDEX_OPTIONS = WORK_SCHEDULE.map((item, index) => (
    <option
        className={`option-${item.toLowerCase()}`}
        key={Math.random() * 1000}
        value={index}
    >
        {FULL_DAY_PERIOD[item]}
    </option>
));

export const WORK_SCHEDULE_OPTIONS = WORK_SCHEDULE.map((item) => (
    <option
        className={`option-${item.toLowerCase()}`}
        key={Math.random() * 1000}
        value={item}
    >
        {FULL_DAY_PERIOD[item]}
    </option>
));