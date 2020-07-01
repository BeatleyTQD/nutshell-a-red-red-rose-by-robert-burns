import EventListeners from '../EventListeners.js';
import data from '../main.js';

let friendObj;
export default function CommentsTemplate(arr){
    let html = ``;
    friendObj = trackFriends(data.friends);
    html += commentInput();
    html += commentsGenerator(arr)
    
    renderComments(html);
    EventListeners.saveCommentEvent();
    EventListeners.editDeleteComment();
    EventListeners.addFriendCommentEvent();

}
const trackFriends=(list)=>{
  let obj = {};
  for(let i = 0; i < list.length; i++){
    obj[list[i].userId] = list[i].userId
  }
  return obj;
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
  let html = `
  <div class="card text-center">
  <div class="card-header"></div>
  ${ obj.userId != window.sessionStorage.activeUser && !friendObj[obj.userId] ?`<button type="button" id="add-friend-comment" name=${obj.userId}>Add Friend</button>` : "" }
  <div class="card-body">
    <h5 class="card-title comment-title">${obj.userId}</h5>
    <p id="commentText-${obj.id}" class="card-text">${obj.comment}</p>
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
  <input type="hidden" id="commentId" value="" />
      <div class="input-group-prepend">
        <span class="input-group-text">What's on your mind?</span>
      </div>
      <textarea id="comment-text-input" name="comment-text" value="" class="form-control user-text" aria-label="What's on your mind?"></textarea>
      <button type="button" id="save-comment-btn" class="btn btn-secondary">Submit</button>
    </div>
    <hr/>
 
</section>`
}
