// Module made by Tyler H. and holds the new user factory function and the login/registration events

import renderRegis from "../Registration/registrationRender.js"
import API from "../API.js"
import TopSectionTemplate from "../TopSectionTemplate.js"
import CommentsTemplate from "../Comments/CommentsTemplate.js"
import data from "../main.js"
import EventListeners from "../EventListeners.js"
import TaskCardGenerator from "../Tasks/TaskCardGenerator.js"

// Takes the user inputs on the registration page and converts them into an object for the Push call
const registrationFactory = (email, username, password) => {
    return {
        "email": email,
        "username": username,
        "password": password
    }
}


// Houses the login/registration events
let loginEvents = {
    // Sets the login button eventListeners: upon hitting enter it sets the active user and renders the Dashboard
    // and checks for incorrect username/email and password inputs
    login(){
        
        // upon hitting enter it sets the active user and renders the Dashboard
        // and checks for incorrect username/email and password inputs
        let loginButton = document.querySelector(".login__button")
        let enterEvent = document.querySelector("#login__wrapper")
        enterEvent.addEventListener("keypress", enterEvent => {
        let username = document.querySelector("#username__input").value
        let password = document.querySelector("#password__input").value
        let usernameCheck = false
        let passwordCheck = false
            if(enterEvent.key === "Enter"){
                for(let user of data.users){
                    if(username === user.username || username === user.email) {
                        usernameCheck = true
                        if(password === user.password) {
                            passwordCheck = true
                            window.sessionStorage.setItem("activeUser", user.id)
                            document.querySelector(".top-sec-container").innerHTML = ""
            
                                            
                            TopSectionTemplate()
                            CommentsTemplate(data.comments)
                            EventListeners.setStandard()
                            TaskCardGenerator(data.tasks);
        
                        }
                    }
                }
                if(usernameCheck === true) {
                    if(passwordCheck === false) {
                        window.alert("Incorrect password")
                    }
                }else{
                    window.alert("Incorrect Username/Email")
                }
            }
            
        })
        // upon clicking login it sets the active user and renders the Dashboard
        // and checks for incorrect username/email and password inputs
        loginButton.addEventListener("click", clickEvent => {
        let username = document.querySelector("#username__input").value
        let password = document.querySelector("#password__input").value
        let usernameCheck = false
        let passwordCheck = false
            for(let user of data.users){
                if(username === user.username || username === user.email) {
                    usernameCheck = true
                    if(password === user.password) {
                        passwordCheck = true
                        window.sessionStorage.setItem("activeUser", user.id)
                        document.querySelector(".top-sec-container").innerHTML =""
            
                                          
                        TopSectionTemplate()
                        CommentsTemplate(data.comments)
                        EventListeners.setStandard()
                        TaskCardGenerator(data.tasks);
    
                    }
                }
            }
            if(usernameCheck === true) {
                if(passwordCheck === false) {
                    window.alert("Incorrect password")
                }
            }else{
                window.alert("Incorrect Username/Email")
            }
        })
        
    },
    // sets event listener to the registration button that loads the registration page to the dom
    loadRegistration(){
        let registerButton = document.querySelector(".register__button")
        registerButton.addEventListener("click", clickEvent => {
            renderRegis()
        })
        
    },
    // upon hitting enter it sets the active user, pushes the user object into the user API, and renders the Dashboard to the dom
        // and checks for incorrect username/email, password, and password confirmation inputs
    registerNewUser() {
        let newRegisterButton = document.querySelector(".newUser__button")
        let newRegisterEnter = document.querySelector("#registration__wrapper")
        newRegisterEnter.addEventListener("keypress", enterEvent => {
            if(enterEvent.key === "Enter"){
                let email = document.querySelector("#email__input").value
            let username = document.querySelector("#username__input").value
            let password = document.querySelector("#password__input").value
            let passwordConfirm = document.querySelector("#password__confirm__input").value
            let usernameCheck = true
            let emailCheck = true
            API.getUsers().then((response) => {
                for(let user of response) {
                    if(user.username === username) {
                        usernameCheck = false
                    }
                    if(user.email === email){
                        emailCheck = false
                    }
                }
                if(emailCheck === true){
                    if(usernameCheck === true){
                        if(email.includes("@")) {
                            if(password === passwordConfirm){
                                let newUser = registrationFactory(email, username, password)
                                    API.addUser(newUser).then(() => {
                                   API.getUsers().then((response) => {
                                       for(let user of response) {
                                           if(user.username === username) {
                                            window.sessionStorage.setItem("activeUser", user.id )
                                            document.querySelector(".top-sec-container").innerHTML = ""
            
                                           
            
                                            TopSectionTemplate()
                                            CommentsTemplate(data.comments)
                                            EventListeners.setStandard()
                                            TaskCardGenerator(data.tasks);
                                           }
                                       }
                                   })
                                })
                            }else{
                                window.alert("Passwords do not match")
                            }
                        }else{
                            
                            window.alert("Invalid Email")
                        }
                        
                        
                        
                        
                    }else{
                        window.alert("Username is already in taken")
                    }
                }else{
                    window.alert("Email already in use")
                }
                
            })
            }
            
            
        })
        // upon clicking register it sets the active user, pushes the user object into the user API, and renders the Dashboard to the dom
        // and checks for incorrect username/email, password, and password confirmation inputs
        newRegisterButton.addEventListener("click", clickEvent => {
            let email = document.querySelector("#email__input").value
            let username = document.querySelector("#username__input").value
            let password = document.querySelector("#password__input").value
            let passwordConfirm = document.querySelector("#password__confirm__input").value
            let usernameCheck = true
            let emailCheck = true
            API.getUsers().then((response) => {
                for(let user of response) {
                    if(user.username === username) {
                        usernameCheck = false
                    }
                    if(user.email === email){
                        emailCheck = false
                    }
                }
                if(emailCheck === true){
                    if(usernameCheck === true){
                        if(email.includes("@")) {
                            if(password === passwordConfirm){
                                let newUser = registrationFactory(email, username, password)
                                    API.addUser(newUser).then(() => {
                                   API.getUsers().then((response) => {
                                       for(let user of response) {
                                           if(user.username === username) {
                                            window.sessionStorage.setItem("activeUser", user.id )
                                            document.querySelector(".top-sec-container").innerHTML = ""
            
            
                                            TopSectionTemplate()
                                            CommentsTemplate(data.comments)
                                            EventListeners.setStandard()
                                            TaskCardGenerator(data.tasks);
                                           }
                                       }
                                   })
                                })
                            }else{
                                window.alert("Passwords do not match")
                            }
                        }else{
                            
                            window.alert("Invalid Email")
                        }
                        
                        
                        
                        
                    }else{
                        window.alert("Username is already in taken")
                    }
                }else{
                    window.alert("Email already in use")
                }
            })
            
        })
    }
}


    
    
export {registrationFactory,loginEvents}