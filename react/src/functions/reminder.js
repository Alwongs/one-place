export const buildStilesForEventCard = (title, events) => {
    let styles = {};
    switch (title) {
        case "overdue":
            styles = events?.length === 0 ? { border: "2px solid green" } : { border: "2px solid red" }
            break;

        case "today":
            styles = events?.length === 0 ? { border: "3px solid green" } : { border: "3px solid red" }
            break;
    }
    return styles;
}