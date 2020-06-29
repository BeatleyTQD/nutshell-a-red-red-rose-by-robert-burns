import eventsConverter from "./Events/EventsTemplate.js"
import renderRegis from "./Registration/registrationRender.js"
import renderLogin from "./Login/loginRender.js"
import EventListeners from './EventListeners.js'
import TopSectionTemplate from './TopSectionTemplate.js'
import NewsTemplate from "./News/NewsTemplate.js"
import TaskCardGenerator from "./Tasks/TaskCardGenerator.js"
import API from './API.js'
let data = {
    user:{},
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
   data.events = await API.getEvents();
   data.comments = await API.getComments();
    console.log(data, "Rendering All Data");
    renderLogin()
    // TopSectionTemplate();
    // TaskCardGenerator(data.tasks);
    // NewsTemplate();
    // EventListeners.setStandard();
  
}

start()

export default data;
