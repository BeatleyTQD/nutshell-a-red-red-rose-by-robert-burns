const eventFactory = (title, date, location, description) => {
    return {
        "userId": parseInt(window.sessionStorage.activeUser),
        "name": title,
        "date": date,
        "location": location,
        "description": description
    }
}

export default eventFactory