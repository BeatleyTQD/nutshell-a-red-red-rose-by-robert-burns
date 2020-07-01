export default function commentFactory(comment){
    return{
        "userId": parseInt(window.sessionStorage.activeUser),
        "comment": comment
    }
}