import API from "../API.js"
import CommentTemplate from "./CommentsTemplate.js"
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
    }
}
export default commentEventHandler;