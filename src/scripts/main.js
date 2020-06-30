import renderLogin from "./Login/loginRender.js";
import EventListeners from './EventListeners.js';
import TopSectionTemplate from './TopSectionTemplate.js';
import NewsTemplate from "./News/NewsTemplate.js";
import TaskCardGenerator from "./Tasks/TaskCardGenerator.js";
import FriendTemplate from "./Friends/FriendTemplate.js";
import API from './API.js'
let data = {
    user: window.sessionStorage.activeUser,
    users:[],
    tasks:[],
    news:[],
    events:[],
    comments:[],
    friends:[]
}
async function start(){

   data.users = await API.getUsers();
   data.tasks = await API.getTasks();
   data.news = await API.getNews();
   data.events = await API.getEvents();
   data.comments = await API.getComments();
   data.friends = await API.getFriends(data.user);
   
    if(window.sessionStorage.activeUser) {
        TopSectionTemplate();
        FriendTemplate(data.friends)
        TaskCardGenerator(data.tasks);
        NewsTemplate(data.news);
        EventListeners.setStandard();
    } else{
        renderLogin()
    }
   
  
}

start()

export default data;
