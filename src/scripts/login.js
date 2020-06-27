import renderRegis from "./registrationRender.js"
import API from "./API.js"
import TopSectionTemplate from "./TopSectionTemplate.js"

const registrationFactory = (email, username, password) => {
    return {
        "email": email,
        "username": username,
        "password": password
    }
}



let loginEvents = {
    loadRegistration(){
        let registerButton = document.querySelector(".register__button")
        registerButton.addEventListener("click", clickEvent => {
            renderRegis()
            API.addUser(registrationFactory("me@me.com", "lykrin", "123")).then((response) => {
                console.log(response)
            })
            
            
        })
        
    },
    registerNewUser() {
        let newRegisterButton = document.querySelector(".newUser__button")
        newRegisterButton.addEventListener("click", clickEvent => {
            let email = document.querySelector("#email__input").value
            let username = document.querySelector("#username__input").value
            let password = document.querySelector("#password__input").value
            let passwordConfirm = document.querySelector("#password__confirm__input").value
            let usernameCheck = true
            API.getUsers().then((response) => {
                for(let user of response) {
                    if(user.username === username) {
                        usernameCheck = false
                    }
                }
                if(usernameCheck === true){
                    if(email.includes("@")) {
                        if(password === passwordConfirm){
                            registrationFactory(email, username, password)
                            .then((response) => API.addUser(response))
                            .then((response) => {
                                window.sessionStorage.setItem("activeUser", response.id )
                                document.querySelector(".container-main").innerHTML =`<div class="top-sec-container">

                                </div>
                                
                                <section class="bottom-section">
                                    
                                </section>`

                                TopSectionTemplate()
                            })
                        }else{
                            window.alert("Invalid Email")
                        }
                    }else{
                        window.alert("Passwords do not match")
                    }
                    
                    
                    
                    
                }else{
                    window.alert("Username is already in taken")
                }
            })
            
        })
    }
}


    
    
export {registrationFactory,loginEvents}
