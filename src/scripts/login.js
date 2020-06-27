import renderRegis from "./registrationRender.js"
import API from "./API.js"
import TopSectionTemplate from "./TopSectionTemplate.js"
import CommentsTemplate from "./CommentsTemplate.js"
import data from "./main.js"

const registrationFactory = (email, username, password) => {
    return {
        "email": email,
        "username": username,
        "password": password
    }
}



let loginEvents = {
    login(){
        
        
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
                            document.querySelector(".container-main").innerHTML =`<div class="top-sec-container">
            
                                            </div>
                                            
                                            <section class="bottom-section">
                                                
                                            </section>`
            
                                            
                            TopSectionTemplate()
                            CommentsTemplate()
        
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
                        document.querySelector(".container-main").innerHTML =`<div class="top-sec-container">
            
                                            </div>
                                            
                                            <section class="bottom-section">
                                                
                                            </section>`
            
                                          
                        TopSectionTemplate()
                        CommentsTemplate()
    
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
    loadRegistration(){
        let registerButton = document.querySelector(".register__button")
        registerButton.addEventListener("click", clickEvent => {
            renderRegis()
        })
        
    },
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
                                            document.querySelector(".container-main").innerHTML =`<div class="top-sec-container">
            
                                            </div>
                                            
                                            <section class="bottom-section">
                                                
                                            </section>`
            
                                            TopSectionTemplate()
                                            CommentsTemplate()
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
                                            document.querySelector(".container-main").innerHTML =`<div class="top-sec-container">
            
                                            </div>
                                            
                                            <section class="bottom-section">
                                                
                                            </section>`
            
                                            TopSectionTemplate()
                                            CommentsTemplate()
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
