// Module by Tyler H. includes the delete and save event handlers
import API from "../API.js"
import data from "../main.js"
import EventsTemplate from "./EventsTemplate.js"
import eventFactory from "./eventFactory.js"
import APIFilter from "../APIFilter.js"

// Deletes the event from the API and then refreshes the entries
const deleteEventHandler = (id) => {
    API.deleteEvent(id).then(() => API.getEvents(APIFilter())).then((response) => {
        data.events = response
        EventsTemplate(response.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)))
    })
}
// saves new event entries to the API and then refreshes the entries
const saveEventHandler = (obj) => {
    let title = document.querySelector("#title-event-input").value
    let date = document.querySelector("#date-event-input").value
    let location = document.querySelector("#location-event-input").value
    let description = document.querySelector("#description-event-input").value

    
    API.saveEvents(eventFactory(title, date, location, description)).then(() => API.getEvents(APIFilter())).then((response) => {
        data.events = response
        EventsTemplate(response.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)))
    })
}

export {deleteEventHandler, saveEventHandler}