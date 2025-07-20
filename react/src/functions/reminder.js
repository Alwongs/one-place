export const buildStilesForEventCard = (title, events) => {

    const red = 'rgb(255, 0, 0)';
    const green = 'rgba(0, 134, 54, 1)';
    const blue = 'rgba(2, 0, 139, 1)';
    const greyBlue = 'rgba(44, 43, 87, 1)';

    let styles = {};
    switch (title) {
        case "overdue":
            styles = events?.length === 0 ? { border: `1px solid ${red}` } : { border: `3px solid ${red}` }
            break;

        case "today":
            styles = events?.length === 0 ? { border: `2px solid ${green}` } : { border: `4px solid ${green}`, padding: '20px 10px', boxSizing: 'content-box' }
            break;

        case "tomorrow":
            styles = events?.length === 0 ? { border: `2px solid ${blue}` } : { border: `3px solid ${blue}` }
            break;    
            
        default:
            styles = events?.length === 0 ? { border: `1px solid ${greyBlue}` } : { border: `2px solid ${greyBlue}` }
            break;            
    }
    return styles;
}

export const buildStilesForEventCardRow = (title) => {

    const red = 'rgb(255, 0, 0)';
    const green = 'rgba(0, 134, 54, 1)';
    const blue = 'rgba(0, 24, 118, 1)';
    const greyBlue = 'rgba(0, 24, 118, 0.6)';

    let styles = {};
    switch (title) {
        case "overdue":
            styles = { color: red, fontSize: '16px' }
            break;

        case "today":
            styles = { color: green, fontWeight: 600, fontSize: '20px' }
            break;

        case "tomorrow":
            styles = { color: blue, fontSize: '18px' }
            break;    
            
        default:
            styles = { color: greyBlue, fontSize: '16px' }
            break;            
    }
    return styles;
}


