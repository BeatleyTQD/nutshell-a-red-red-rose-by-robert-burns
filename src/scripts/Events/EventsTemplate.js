//Module by Brandon W. Responsible for iterating through event data to generate HTML string with each entry as well as field for adding new event article.
//Module API Integration,css for first post integration and sorting logic by Tyler H.
import EventListeners from "../EventListeners.js"
export default function EventsTemplate(events){
        let EventsTemplate = document.querySelector(".bottom-section")
        EventsTemplate.innerHTML = ""
        EventsTemplate.innerHTML += eventsInputField()
        events.forEach(event => {
        EventsTemplate.innerHTML += eventsConverter(event)
    })
    let firstPost = document.querySelector(".card-body-event")
    
    if(events != ""){
        firstPost.classList = "firstPost"
      
        
    }

    EventListeners.setEventDelete()
    EventListeners.setEventSave()
}

const eventsConverter = (eventsItem) => {
    let month = eventsItem.date.split("-")[1]
    let day = eventsItem.date.split("-")[2]
    let year = eventsItem.date.split("-")[0]
    if(eventsItem.userId == window.sessionStorage.activeUser){
        let eventsHTML = 
    `<div class="card text-center">
    <div class="card-header"></div>
    <div class="card-body-event">
    <h5 class="card-title">${eventsItem.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${month}-${day}-${year}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${eventsItem.location}</h6>
    <p class="card-text">${eventsItem.description}</p>
    ${eventsItem.userId == window.sessionStorage.activeUser ? `<button type="button" name=${eventsItem.id} id="delete-events-btn"class="btn btn-outline-danger">Delete</button>`: ""}
    </div>
    <div class="card-footer text-muted"></div>
    </div>
    <hr/>`
    return eventsHTML
    }else {
        let eventsHTML = 
    `<div class="card text-center">
    <div class="card-header"></div>
    <div class="card-body-friend">
    <h5 class="card-title">${eventsItem.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${month}-${day}-${year}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${eventsItem.location}</h6>
    <p class="card-text">${eventsItem.description}</p>
    ${eventsItem.userId == window.sessionStorage.activeUser ? `<button type="button" name=${eventsItem.id} id="delete-events-btn"class="btn btn-outline-danger">Delete</button>`: ""}
    </div>
    <div class="card-footer text-muted"></div>
    </div>
    <hr/>`
    return eventsHTML
    }
    
}

const eventsInputField = () => {
    let html = `<section class="enter-new-article"></section>
    <h3 class="mx-auto" style="width: 170px;">Add an Event</h3>
    <div class="input-group mb-3">
       <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Title</span>
      </div>
      <input type="text" id="title-event-input" class="form-control user-text" aria-label="Default" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-3">
       <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Date</span>
      </div>
      <input type="date" id="date-event-input"class="form-control user-text" aria-label="Default" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-3">
      <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Location</span>
      </div>
      <input type="text" id="location-event-input"class="form-control  user-text" aria-label="Default" aria-describedby="inputGroup-sizing-default">
      </div>
      <div class="input-group mb-3">
      <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Description</span>
      </div>
      <input type="text" id="description-event-input"class="form-control user-text" aria-label="Default" aria-describedby="inputGroup-sizing-default">
      </div>
      <button type="button" id="save-event-btn"class="btn btn-secondary float-right">Submit</button>
  </section>
  </section><br><br><br><br><br><br>`
  return html
}

