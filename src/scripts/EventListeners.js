import navigation from './Navigation.js';
import commentEventHandler from './Comments/commentEventHandlers.js'
import taskEventHandler from "./Tasks/taskEventHandler.js";
import friendEvents from './Friends/friendEventListener.js';
import {deleteNewsHandler, saveNewsHandler} from './News/newsEventHandler.js';
import {deleteEventHandler, saveEventHandler} from "./Events/eventsEventHandlers.js"

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
    setTaskEvents(){
        this.taskCompleted();
        this.addTaskButton();
        this.deleteTaskButton();
        this.inputTaskEvent();
    },
    taskCompleted(){
        let tasks = document.querySelectorAll('.checkbox')
        tasks.forEach(task =>{
            task.addEventListener('change', taskEventHandler.taskComplete)
        })
    },
    addTaskButton(){
        document.querySelector('#task-post-btn').addEventListener('click',
       taskEventHandler.addTask)
    },
    deleteTaskButton(){
        let deletes = document.querySelectorAll('#task-delete-btn')
        deletes.forEach(btn=>{
            btn .addEventListener('click',
       taskEventHandler.deleteTask)
        })
       
    },
    inputTaskEvent(){
        document.querySelector('#task-input').addEventListener('input', taskEventHandler.inputChange)
    },
    //friends
    unFollowFriend(){
        document.querySelectorAll('#unfollow').forEach(btn=>{
            btn.addEventListener('click', friendEvents.unfollowFriend)
        })
    },
    //news
    setNewsDelete(){
        let newsDelete = document.querySelectorAll("#delete-news-btn")
        newsDelete.forEach(btn => {
            btn.addEventListener("click", deleteNews => {
                let id = deleteNews.target.name
                deleteNewsHandler(id)
            })
        })
    },
    setNewsSave(){
        let newsSave = document.querySelectorAll("#save-news-btn")
        newsSave.forEach(btn => {
            btn.addEventListener("click", saveNews => {
                let id = saveNews.target.name
                saveNewsHandler(id)
            })
        })
    },
    //comments
    editDeleteComment(){
        this.editCommentEvent()
        this.deleteCommentEvent()
    },
    editCommentEvent(){
        let editButtons = document.querySelectorAll('#edit-comment-btn');
        editButtons.forEach(btn=>{
            btn.addEventListener('click', commentEventHandler.editComment);
        })

    },
    deleteCommentEvent(){
        let deleteButtons = document.querySelectorAll('#delete-comment-btn');
        deleteButtons.forEach(btn=>{
            btn.addEventListener('click', commentEventHandler.deleteComment);
        })
    },
    //events

    setEventDelete(){
        let eventDelete = document.querySelectorAll("#delete-events-btn")
        eventDelete.forEach(btn => {
            btn.addEventListener("click", deleteEvent => {
                deleteEvent.preventDefault()
                let id = deleteEvent.target.name
                deleteEventHandler(id)
            })
        })
        
    },
    setEventSave(){
        let eventSave = document.querySelectorAll("#save-event-btn")
        eventSave.forEach(btn => {
            btn.addEventListener("click", saveEvent => {
                let id = saveEvent.target.name
                saveEventHandler(id)
            })
        })
    }
    //users

    //friends page


}
export default EventListeners;