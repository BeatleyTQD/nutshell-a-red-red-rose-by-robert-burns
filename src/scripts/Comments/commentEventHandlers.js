import API from "../API.js"
import CommentTemplate from "./CommentsTemplate.js"
import data from "../main.js";
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
    },
    saveComment(obj){
        let commentTextInput = document.querySelector("#comment-text-input").value
        console.log(commentTextInput)
        API.saveComments().then(() =>
        API.getComments().then((response) => {
            data.comments = response
        }))
    }
}
export default commentEventHandler;