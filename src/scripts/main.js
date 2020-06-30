import renderLogin from "./Login/loginRender.js";
import EventListeners from './EventListeners.js';
import TopSectionTemplate from './TopSectionTemplate.js';
import NewsTemplate from "./News/NewsTemplate.js";
import TaskCardGenerator from "./Tasks/TaskCardGenerator.js";
import FriendTemplate from "./Friends/FriendTemplate.js";
import API from './API.js'

let data = {
    user: "",
    users:[],
    tasks:[],
    news:[],
    events:[],
    comments:[],
    friends:[]
}
async function start(){
   data.user = window.sessionStorage.activeUser
   data.users = await API.getUsers();
   data.tasks = await API.getTasks(window.sessionStorage.activeUser)
   data.news = await API.getNews(window.sessionStorage.activeUser)
   data.events = await API.getEvents(window.sessionStorage.activeUser)
   data.comments = await API.getComments(window.sessionStorage.activeUser)
   data.friends = await API.getFriends(data.user);
   
    if(window.sessionStorage.activeUser) {
        TopSectionTemplate();
        FriendTemplate(data.friends)
        TaskCardGenerator(data.tasks);
        NewsTemplate(data.news.sort((a,b)=>b.time-a.time));
        EventListeners.setStandard();
    } else{
        renderLogin()
    }
   
  
}

start()

export default data;
