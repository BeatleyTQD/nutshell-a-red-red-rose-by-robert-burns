import navigation from './Navigation.js';
import {deleteEventHandler, saveEventHandler} from "./Events/eventsEventHandlers.js"

const EventListeners = {
    setStandard(){
        this.setNavigation();

    },
    //login

    //registration

    //navigation
    setNavigation(){
        let navLinks = document.querySelectorAll('#nav');
        navLinks.forEach(link=>{
            link.addEventListener('click', navigation)
        })
    },
    //dashboard

    //tasks

    //friends

    //news

    //comments

    //events
    setEventDelete(){
        let eventDelete = document.querySelectorAll("#delete-events-btn")
        eventDelete.forEach(btn => {
            btn.addEventListener("click", deleteEvent => {
                deleteEvent.preventDefault()
                let id = deleteEvent.target.name
                deleteEventHandler(id)
            })
        })
        
    },
    setEventSave(){
        let eventSave = document.querySelectorAll("#save-event-btn")
        eventSave.forEach(btn => {
            btn.addEventListener("click", saveEvent => {
                let id = saveEvent.target.name
                saveEventHandler(id)
            })
        })
    }
    //users

    //friends page


}
export default EventListeners;