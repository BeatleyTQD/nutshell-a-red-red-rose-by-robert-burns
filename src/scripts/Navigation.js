import CommentsTemplate from './CommentsTemplate.js';
import EventsTemplate from './EventsTemplate.js';
import NewsTemplate from './NewsTemplate.js';
import renderLogin from './loginRender.js'

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
            CommentsTemplate();
            break;
        case "events":
            console.log('Rendering Events')
            EventsTemplate();
            break;
        case "news":
            console.log("Rendering News")
            NewsTemplate()
            break;
        case "friends":
            console.log("Rendering Friends")
            break;
        case "users":
            console.log("Rendering Users")
            break;
        default:
            console.log("Error Results not found", value,name, target)
            break;
    }
}