const readUserFromLocalStorage = () => {

    const userJSON = localStorage.getItem("USER")

    if (userJSON === null) return undefined;

    try {
        return JSON.parse(userJSON);
    } catch (e) {
        localStorage.removeItem("USER");
        return undefined;
    }
}

export default readUserFromLocalStorage;