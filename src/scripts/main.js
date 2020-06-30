import renderLogin from "./Login/loginRender.js";
import EventListeners from './EventListeners.js';
import TopSectionTemplate from './TopSectionTemplate.js';
import NewsTemplate from "./News/NewsTemplate.js";
import TaskCardGenerator from "./Tasks/TaskCardGenerator.js"
import API from './API.js'

let data = {
    user: window.sessionStorage.activeUser,
    users:[],
    tasks:[],
    news:[],
    events:[],
    comments:[]
}
async function start(){

        data.users = await API.getUsers();
   data.tasks = await API.getTasks();
   data.news = await API.getNews();
   data.events = await API.getEvents(window.sessionStorage.activeUser);
   data.comments = await API.getComments();
    console.log(data, "Rendering All Data");
    if(window.sessionStorage.activeUser) {
        TopSectionTemplate();
        TaskCardGenerator(data.tasks);
        NewsTemplate(data.news.sort((a,b)=>b.time-a.time));
        EventListeners.setStandard();
    } else{
        renderLogin()
    }
   
  
}

start()

export default data;
