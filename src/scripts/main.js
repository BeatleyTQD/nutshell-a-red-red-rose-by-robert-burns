import renderLogin from "./Login/loginRender.js";
import EventListeners from './EventListeners.js';
import TopSectionTemplate from './TopSectionTemplate.js';
import NewsTemplate from "./News/NewsTemplate.js";
import TaskCardGenerator from "./Tasks/TaskCardGenerator.js";
import FriendTemplate from "./Friends/FriendTemplate.js";
import API from './API.js'
import APIFilter from "./APIFilter.js"
// Local data array
let data = {
    user: "",
    userName: [],
    users:[],
    tasks:[],
    news:[],
    events:[],
    comments:[],
    friends:[]
}
// sets local data array on refresh/ Checks in user is logged in
async function start(){
   data.user = parseInt(window.sessionStorage.activeUser)
   data.users = await API.getUsers();
   data.userName = await API.getUserById(data.user);
   data.friends = await API.getFriends(data.user);
   data.tasks = await API.getTasks(window.sessionStorage.activeUser)
   data.news = await API.getNews(APIFilter())
   data.events = await API.getEvents(APIFilter())
   data.comments = await API.getComments()
   
   
    if(window.sessionStorage.activeUser) {
        TopSectionTemplate();
        FriendTemplate(data.friends)
        TaskCardGenerator(data.tasks);
        NewsTemplate(data.news.sort((a,b)=>b.time-a.time));
        EventListeners.setStandard();
        EventListeners.searchUsersEvent();
    } else{
        renderLogin()
    }
   
  
}

start()

export default data;
