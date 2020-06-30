import navigation from './Navigation.js';
import deleteNewsHandler from './News/newsEventHandler.js';

const EventListeners = {
    setStandard(){
        this.setNavigation();

    },
    //login

    //registration

    //navigation
    setNavigation(){
        let navLinks = document.querySelectorAll('#nav');
        navLinks.forEach(link=>{
            link.addEventListener('click', navigation)
        })
    },
    //dashboard

    //tasks

    //friends

    //news

    //comments

    //events
    setNewsDelete(){
        let newsDelete = document.querySelectorAll("delete-news-btn")
        newsDelete.forEach(btn => {
            btn.addEventListener("click", deleteNews => {
                let id = deleteNews.target.name
                deleteNewsHandler(id)
            })
        })
    }

    //users

    //friends page


}
export default EventListeners;