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


// eventsHTMLInjector = () => {
//     for loop going through the object converter{  

//     }
//     `<section class="enter-new-article"></section>
//     <h3 class="mx-auto" style="width: 170px;">Add an Event</h3>
//       <div class="input-group mb-3">
//        <div class="input-group-prepend">
//           <span class="input-group-text" id="inputGroup-sizing-default">Date</span>
//       </div>
//       <input type="text" class="form-control user-text" aria-label="Default" aria-describedby="inputGroup-sizing-default">
//       </div>
//       <div class="input-group mb-3">
//       <div class="input-group-prepend">
//           <span class="input-group-text" id="inputGroup-sizing-default">Location</span>
//       </div>
//       <input type="text" class="form-control  user-text" aria-label="Default" aria-describedby="inputGroup-sizing-default">
//       </div>
//       <div class="input-group mb-3">
//       <div class="input-group-prepend">
//           <span class="input-group-text" id="inputGroup-sizing-default">Description</span>
//       </div>
//       <input type="text" class="form-control user-text" aria-label="Default" aria-describedby="inputGroup-sizing-default">
//       </div>
//       <button type="button" class="btn btn-secondary">Submit</button>
//   </section>
//   </section>`
// }


export default eventsConverter