import eventsConverter from "./Events/EventsHTMLFactory.js"
import renderRegis from "./Registration/registrationRender.js"
import renderLogin from "./Login/loginRender.js"
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
