import EventListeners from '../EventListeners.js';


export default function CommentsTemplate(arr){
    let html = ``;
    html = commentsGenerator(arr)
    html += commentInput();
    renderComments(html);
    EventListeners.editDeleteComment()
    EventListeners.saveCommentEvent()

}
const renderComments=(html)=>{
    document.querySelector(".bottom-section").innerHTML = html 
}
const commentsGenerator =(arr)=>{
  let html = ``;
  for(let i = 0; i < arr.length; i++){
    html += commentCard(arr[i]);
  }
  return html;
}
const commentCard= (obj)=>{
  console.log(obj, window.sessionStorage.activeUser)
  let html = `
  <div class="card text-center">
  <div class="card-header"></div>
  <div class="card-body">
    <h5 class="card-title">User Who Posted</h5>
    <p class="card-text">Cronut glossier vexillologist, art party irony banh mi fanny pack polaroid listicle church-key butcher you probably haven't heard of them portland put a bird on it. You probably haven't heard of them gochujang fam biodiesel hella, bitters kale chips. Heirloom hashtag tattooed authentic, selfies leggings sartorial kitsch man bun blue bottle pour-over aesthetic echo park viral 90's.</p>
  </div>
  ${obj.userId == window.sessionStorage.activeUser ? `<button type="button" name=${obj.id} id="edit-comment-btn">Edit</button><button type="button" name=${obj.id} id="delete-comment-btn">Delete</button>` : ""}
  <div class="card-footer text-muted"></div>
</div>
<hr/>
`
return html;
}
const commentInput = () =>{
  return ` <section class="enter-chat-message">
  <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">What's on your mind?</span>
      </div>
      <textarea id="comment-text-input" class="form-control user-text" aria-label="What's on your mind?"></textarea>
      <button type="button" id="save-comment-btn" class="btn btn-secondary">Submit</button>
    </div>
    <hr/>
 
</section>`
}
