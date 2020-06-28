import renderRegis from "./registrationRender.js";
import renderLogin from "./loginRender.js";
import EventListeners from './EventListeners.js';
import TopSectionTemplate from './TopSectionTemplate.js';
import TaskCardGenerator from './TaskCardGenerator.js';
import NewsTemplate from "./NewsTemplate.js";
import API from './API.js';
let data = {
    user:{},
    users:[],
    tasks:[],
    news:[],
    events:[],
    comments:[]
}

// renderLogin()

async function start(){
    /**
     * Current User Data Call goes here OR Inside of the data object set property to 
     * spot in localStorage.
     */
   data.users = await API.getUsers();
   data.tasks = await API.getTasks();
   data.news = await API.getNews();
   data.events = await API.getEvents();
   data.comments = await API.getComments();
    console.log(data, "Rendering All Data");
    TopSectionTemplate();
    TaskCardGenerator(data.tasks);
    NewsTemplate();
    EventListeners.setStandard();
}
start();

export default data;
