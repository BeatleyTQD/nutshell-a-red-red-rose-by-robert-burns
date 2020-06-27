export default function CommentsTemplate(){
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
              <h5 class="card-title">User Who Posted</h5>
              <p class="card-text">Cronut glossier vexillologist, art party irony banh mi fanny pack polaroid listicle church-key butcher you probably haven't heard of them portland put a bird on it. You probably haven't heard of them gochujang fam biodiesel hella, bitters kale chips. Heirloom hashtag tattooed authentic, selfies leggings sartorial kitsch man bun blue bottle pour-over aesthetic echo park viral 90's.</p>
            </div>
            <div class="card-footer text-muted"></div>
          </div>
          <hr/>

          <div class="card text-center">
            <div class="card-header"></div>
            <div class="card-body">
              <h5 class="card-title">Post You Made</h5>
              <p class="card-text">Four loko mlkshk marfa bespoke, brunch williamsburg meditation normcore cloud bread. Gochujang vegan sriracha letterpress hammock messenger bag scenester semiotics wolf narwhal.</p>
              <button type="button" class="btn btn-outline-info">Edit Post</button>
            </div>
            <div class="card-footer text-muted"></div>
          </div>
          <hr/>

          <div class="card text-center">
            <div class="card-header"></div>
            <div class="card-body">
              <h5 class="card-title">User Who Posted</h5>
              <p class="card-text">Cronut glossier vexillologist, art party irony banh mi fanny pack polaroid listicle church-key butcher you probably haven't heard of them portland put a bird on it. You probably haven't heard of them gochujang fam biodiesel hella, bitters kale chips. Heirloom hashtag tattooed authentic, selfies leggings sartorial kitsch man bun blue bottle pour-over aesthetic echo park viral 90's.</p>
            </div>
            <div class="card-footer text-muted"></div>
          </div>
          <hr/>
          
        <section class="enter-chat-message">
            <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">What's on your mind?</span>
                </div>
                <textarea class="form-control user-text" aria-label="What's on your mind?"></textarea>
                <button type="button" class="btn btn-secondary">Submit</button>
              </div>
              <hr/>
           
        </section>
    `
    renderComments(html)
}
const renderComments=(html)=>{
    document.querySelector(".bottom-section").innerHTML = html 
}
