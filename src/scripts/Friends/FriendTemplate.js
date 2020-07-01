import data from "../main.js";
import EventListeners from '../EventListeners.js'
export default function FriendTemplate(arr){
  document.querySelector('.friend-list').innerHTML = ""
  let friendHtml = friendSectionGenerator(arr);
  document.querySelector('.friend-list').innerHTML = addButtonAndContainer();
  document.querySelector('.friend-list').innerHTML += friendHtml; 
  document.querySelector('.show-friend-search').addEventListener('click', e=>{
    console.log('click')
    
    document.querySelector('.search-container').classList.toggle('hidden')
  })
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
  const addButtonAndContainer = () =>{
    return `<button class="show-friend-search btn-primary btn" type="button">Add friend</button>
    <div class="search-container hidden">
        <input type="search" id="search-users">
        <div id="search-user-items" class="search-users-items">

        </div>  `
  }