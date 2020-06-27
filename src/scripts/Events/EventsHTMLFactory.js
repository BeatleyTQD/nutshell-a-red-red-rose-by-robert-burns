import API from "../API.js"
const eventsConverter = (eventsItem) => {
    let eventsHTML = 
    `<div class="card text-center">
    <div class="card-header"></div>
    <div class="card-body">
    <h5 class="card-title">${eventsItem.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${eventsItem.date}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${eventsItem.location}</h6>
    <p class="card-text">${eventsItem.synopsis}</p>
    <button type="button" class="btn btn-outline-danger">Delete</button>
    </div>
    <div class="card-footer text-muted"></div>
    </div>
    <hr/>`
    return eventsHTML
}



export default eventsConverter