import API from "../API.js"
import data from "../main.js"
import EventsTemplate from "./EventsTemplate.js"
import eventFactory from "./eventFactory.js"

const deleteEventHandler = (id) => {
    API.deleteEvent(id).then(() => API.getEvents(data.user)).then((response) => {
        data.events = response
        EventsTemplate(response.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)))
    })
}

const saveEventHandler = (obj) => {
    let title = document.querySelector("#title-event-input").value
    let date = document.querySelector("#date-event-input").value
    let location = document.querySelector("#location-event-input").value
    let description = document.querySelector("#description-event-input").value

    
    API.saveEvents(eventFactory(title, date, location, description)).then(() => API.getEvents()).then((response) => {
        
        data.events = response
        EventsTemplate(response.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)))
    })
}

export {deleteEventHandler, saveEventHandler}