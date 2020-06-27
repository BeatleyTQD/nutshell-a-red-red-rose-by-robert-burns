import eventsConverter from "./Events/EventsHTMLFactory.js"
import renderRegis from "./registrationRender.js"
import renderLogin from "./loginRender.js"
import EventListeners from './EventListeners.js'
import TopSectionTemplate from './TopSectionTemplate.js'
import NewsTemplate from "./News/NewsTemplate.js"
import API from './API.js'
let data = {
    users:[]
}

// renderLogin()

async function start(){
   data.users = await API.getUsers();
    console.log(data.users);
    TopSectionTemplate();
    NewsTemplate();
    EventListeners.setStandard()
}
start();
