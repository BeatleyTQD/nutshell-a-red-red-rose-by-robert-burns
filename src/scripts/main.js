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
    tasks:[]
}

// renderLogin()

async function start(){
   data.users = await API.getUsers();
   data.tasks = await API.getTasks();
    console.log(data.users, "Rendering User Data");
    TopSectionTemplate();
    TaskCardGenerator(data.tasks);
    console.log('Rendering Tasks', data.tasks);
    NewsTemplate();
    EventListeners.setStandard();
}
start();

export default data;
