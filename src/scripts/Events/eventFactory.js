const eventFactory = (title, date, location, description) => {
    return {
        "userId": window.sessionStorage.activeUser,
        "name": title,
        "date": date,
        "location": location,
        "description": description
    }
}

export default eventFactory