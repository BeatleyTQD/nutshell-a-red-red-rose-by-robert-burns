import navigation from './Navigation.js';

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
    }
    //dashboard

    //tasks

    //friends

    //news

    //comments

    //events

    //users

    //friends page


}
export default EventListeners;