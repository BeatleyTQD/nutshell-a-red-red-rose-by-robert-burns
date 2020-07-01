//Module by Brandon W. Used to pull data from user edited comments and store them as a newly updated object.
import data from "../main.js";

const updateCommentFields = (commentEntry) => {
    let hiddenCommentId = document.querySelector('#commentId')
    let commentTextInput = document.querySelector(`#comment-text-input`)
    for (let comment of data.comments){
        if (comment.id == commentEntry){
            hiddenCommentId.value = comment.id
            commentTextInput.value = comment.comment
        }
    }
}

export default updateCommentFields;