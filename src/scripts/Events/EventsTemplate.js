export default function EventsTemplate(){
    let html = `
   
    <section class="friend-list">
    <!-- INDIVIDUAL FRIEND ENTRIES -->
    <div class="friend-entry">
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Friend Picture</h5>
                <p class="card-text">Friend Details</p>
                <a href="#" class="btn purple-button">?Add friend?</a>
            </div>
            </div>
    </div>
    <div class="friend-entry">
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Friend Picture</h5>
                <p class="card-text">Friend Details</p>
                <a href="#" class="btn purple-button">?Add friend?</a>
            </div>
            </div>
    </div>
    <div class="friend-entry">
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Friend Picture</h5>
                <p class="card-text">Friend Details</p>
                <a href="#" class="btn purple-button">?Add friend?</a>
            </div>
            </div>
    </div>
    <div class="friend-entry">
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Friend Picture</h5>
                <p class="card-text">Friend Details</p>
                <a href="#" class="btn purple-button">?Add friend?</a>
            </div>
            </div>
    </div>
    <!-- BUTTON TO MANUALLY ADD FRIENDS BY SEARCHING FOR NAME -->
        <button type="button" class="btn gray-button btn-lg">Add Friend</button>
</section>
        <section class="container">
        <div class="card text-center">
            <div class="card-header"></div>
            <div class="card-body">
              <h5 class="card-title">Event Name</h5>
              <h6 class="card-subtitle mb-2 text-muted">Date of the Event</h6>
              <h6 class="card-subtitle mb-2 text-muted">Location of the Event</h6>
              <p class="card-text">One to two sentences describing the event.Celiac marfa semiotics deep v. Deep v cliche tumeric poke jean shorts hoodie pork belly squid photo booth hella scenester kickstarter celiac blue bottle. </p>
              <button type="button" class="btn btn-outline-danger">Delete</button>
            </div>
            <div class="card-footer text-muted"></div>
          </div>
          <hr/>

          <div class="card text-center">
            <div class="card-header"></div>
            <div class="card-body">
              <h5 class="card-title">Event Name</h5>
              <h6 class="card-subtitle mb-2 text-muted">Date of the Event</h6>
              <h6 class="card-subtitle mb-2 text-muted">Location of the Event</h6>
              <p class="card-text">One to two sentences describing the event.Celiac marfa semiotics deep v. Deep v cliche tumeric poke jean shorts hoodie pork belly squid photo booth hella scenester kickstarter celiac blue bottle. </p>
              <button type="button" class="btn btn-outline-danger">Delete</button>
            </div>
            <div class="card-footer text-muted"></div>
          </div>
          <hr/>

          <div class="card text-center">
            <div class="card-header"></div>
            <div class="card-body">
              <h5 class="card-title">Event Name</h5>
              <h6 class="card-subtitle mb-2 text-muted">Date of the Event</h6>
              <h6 class="card-subtitle mb-2 text-muted">Location of the Event</h6>
              <p class="card-text">One to two sentences describing the event.Celiac marfa semiotics deep v. Deep v cliche tumeric poke jean shorts hoodie pork belly squid photo booth hella scenester kickstarter celiac blue bottle. </p>
              <button type="button" class="btn btn-outline-danger">Delete</button>
            </div>
            <div class="card-footer text-muted"></div>
          </div>
          <hr/>

        <section class="enter-new-article"></section>
          <h3 class="mx-auto" style="width: 170px;">Add an Event</h3>
            <div class="input-group mb-3">
             <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Date</span>
            </div>
            <input type="text" class="form-control user-text" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Location</span>
            </div>
            <input type="text" class="form-control  user-text" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Description</span>
            </div>
            <input type="text" class="form-control user-text" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <button type="button" class="btn btn-secondary">Submit</button>
        </section>
        </section>

    `
    renderEvents(html);
}
const renderEvents = (html)=>{
    document.querySelector(".bottom-section").innerHTML = html
}