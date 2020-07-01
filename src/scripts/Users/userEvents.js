import API from '../API.js';
import EventListener from '../EventListeners.js'
import data from '../main.js';

let friendObj;
async function searchUsers(e){
    
   let res =  await API.searchUsers(e.target.value)
    trackFriends(await API.getFriends(data.user));
    document.querySelector(".search-users-items").innerHTML= ""
    document.querySelector(".search-users-items").innerHTML= createSearchInput(res)
    EventListener.addFriendUserEvent();

}
const createSearchInput = (arr) =>{
    let html = ``
    for(let i = 0; i < arr.length; i++){
        html += searchItems(arr[i])
    }
    return html;
}

const searchItems = (obj) =>{
    console.log('search', obj)
    return `
    <p>${obj.username}</p>
    ${friendObj[obj.id] ? "":`<button type="button" id="add-friend-btn" name=${obj.id}>add friend</button>` }
    
    `
}

const trackFriends=(list)=>{
    let obj = {};
    for(let i = 0; i < list.length; i++){
      obj[list[i].userId] = list[i].userId
    }
    friendObj = obj;
  }

export default searchUsers;