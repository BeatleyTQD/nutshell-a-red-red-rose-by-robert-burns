import CommentsTemplate from '../scripts/Comments/CommentsTemplate.js';
import EventsTemplate from '../scripts/Events/EventsTemplate.js';
import NewsTemplate from '../scripts/News/NewsTemplate.js';
import renderLogin from './Login/loginRender.js';
import data from './main.js'
import EventListeners from "./EventListeners.js"

export default function navigation(e){
    e.preventDefault();
    let target = e.target;
    let { name} = target;
    switch(name)
    {
        case "dashboard":
            console.log('Going to Dashboard')
            break;
        case "comments":
            console.log('Rendering Comments')
            CommentsTemplate(data.comments);
            break;
        case "events":
            console.log('Rendering Events')
            EventsTemplate(data.events.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)));
            break;
        case "news":
            console.log("Rendering News")
            NewsTemplate(data.news)
            break;
        case "friends":
            console.log("Rendering Friends")
            break;
        case "users":
            console.log("Rendering Users")
            break;
        case "logout":
            console.log("Logout")
            renderLogin()
            window.sessionStorage.removeItem("activeUser")
            break;
        default:
            console.log("Error Results not found", value,name, target)
            break;
    }
}