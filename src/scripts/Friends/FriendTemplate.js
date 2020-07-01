import data from "../main.js";
import EventListeners from '../EventListeners.js'
export default function FriendTemplate(arr){
    console.log(arr, "friends arr")
    document.querySelector('.friend-list').innerHTML = "";
  let friendHtml = friendSectionGenerator(arr);
  document.querySelector('.friend-list').innerHTML = friendHtml;
  EventListeners.unFollowFriend()
}
// const findFriendConnections = () =>{
//     let friendList = [];
//     for(let i = 0; i < data.friends.length; i++){
//         let c = data.friends[i];
//         if(c.userId == data.user)friendList.push(c);
//     }
//     return friendList;
// }
// const findFriendInfo = (arr) =>{
//     let friends = [];
//     for(let i = 0; i < arr.length; i ++){
//         let f = arr[i].following;
//         for(let j = 0; j < data.users.length; j++){
//             let c = data.users[j]
//             if(f == c.id){
//                 friends.push(c);
                
//             }
//         }
//     }
//     return friends;
// }

// Find friend connections, we need to look for userId that matches ours,
// if(arr[i]userId === data.id){
//   for(let j.....){
// if(arr[j].userId === arr[i].following){
  //friendsArr.push(arr[j])
//}  
//}
//}




const friendSectionGenerator = (arr)=>{
    console.log(arr, "friends array")
    let friendString = ""
    for(let i = 0; i < arr.length; i++){
      friendString += friendHtmlTemplate(arr[i].user, arr[i].id)
    }
    return friendString;
  
  }
  const friendHtmlTemplate= (obj, id) =>{
    let html = `<div class="friend-entry">
    <div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <img src="images/Friend Logo.png" height="80px" width="80px"class="card-title profile-img">
          <p class="card-text">${obj.username}</p>
          <button id="unfollow" name=${id} class="card-text">Un-Follow</button>
        </div>
        </div>
  </div>`
  return html;
  }