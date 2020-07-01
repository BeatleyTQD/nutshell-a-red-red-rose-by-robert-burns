import API from "../API.js"
import CommentTemplate from "./CommentsTemplate.js"
import data from "../main.js";
import commentFactory from "./commentFactory.js";
import EventListeners from "../EventListeners.js"

let newComment =  {
    "comment": "test1",
  }


let newFriendRelationShip = {
    "activeUserId": undefined,
    "userId": undefined
  }
const commentEventHandler = {
    async deleteComment(e){
        e.preventDefault();
        await API.deleteComments(e.target.name);
        let arr = await API.getComments();
        CommentTemplate(arr);
        console.log('Deleting Comment')
    },
    editComment(e){
        e.preventDefault();
        console.log('Editing Comment')
        let editedTextInput = document.querySelector("#comment-text-input").value
        API.updateComments(commentFactory(editedTextInput))
        .then(() => API.getComments()
        .then((response) => {
            CommentTemplate(response)
        }))
    },
    //Stores user inputted text, generates a new data object, retrieves the updated database, and renders it to the DOM.
    saveCommentHandler(e){
        e.preventDefault()
        let commentTextInput = document.querySelector("#comment-text-input").value
        API.saveComments(commentFactory(commentTextInput))
        .then(() => API.getComments()
        .then((response) => {
            CommentTemplate(response)
            }
        ))
    },
   async addFriend(e){
        e.preventDefault();
        newFriendRelationShip.userId = e.target.name;
        newFriendRelationShip.activeUserId = data.user;
        API.addFriend(newFriendRelationShip);
        let arr = await API.getComments();
        CommentTemplate(arr);
        console.log("Adding Friend")
    },
    input(e){
        console.log(e.target.value)
        newComment.comment = e.target.value
        newComment.userId = data.user
    },
    updateComment(e){
        let id = document.querySelector('#commentId').value
        API.updateComments(newComment, id)
        console.log(id, "updating comment")
        document.querySelector("#save-comment-btn").removeEventListener("click", EventListeners.updateComment)
        EventListeners.saveCommentEvent()
    
    }
}
export default commentEventHandler;