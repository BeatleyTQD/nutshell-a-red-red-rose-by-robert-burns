import API from "../API.js"
import CommentTemplate from "./CommentsTemplate.js"
import data from "../main.js";
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
    },
    addFriend(e){
        e.preventDefault();
        newFriendRelationShip.userId = e.target.name;
        newFriendRelationShip.activeUserId = data.user;
        API.addFriend(newFriendRelationShip);
        console.log("Adding Friend")
    }
}
export default commentEventHandler;