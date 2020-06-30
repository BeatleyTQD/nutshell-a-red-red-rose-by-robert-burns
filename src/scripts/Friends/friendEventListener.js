import FriendTemplate from './FriendTemplate.js';
import data from "../main.js"
import API from '../API.js'
const friendEvents = {
  async  unfollowFriend(e){
    var proceed = confirm("Are you Sure? This Could RUIN your friendship!");
    if (proceed) {
        let id = e.target.name;
        API.unfollowFriend(id)
        FriendTemplate(await API.getFriends(data.user));
    } else {
        console.log('Negative, Keep following')
      return
    }
       

    }
}
export default friendEvents;