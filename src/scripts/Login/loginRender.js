// Module made by Tyler H. and renders the login page to the dom
import {registrationFactory, loginEvents } from "./login.js"

// stores the login HTML and returns it upon invocation
const loginHTMLCreator = () => {
    return `<div id="login__wrapper">
    <img id="logo__img" src="images/NutshellV2.png" alt="Nutshell Logo" width="10%" height="10%">
    <h1 id="welcome__message">Welcome to Nutshell</h1>
    <h3 id="tagline">*Insert creative tagline here*</h3>
    <form class="input__group">
        
        <div class="form__group">
            
            <input type="username" class="form-control" id="username__input" aria-describedby="emailHelp" placeholder="Username/Email" required>
           
        </div>
        <div class="form__group">
            
            <input type="password" class="form-control" id="password__input" placeholder="Password" required>
           
        </div>
        
    </form>

    <button type="submit" class="btn login__button btn-lg"><strong>Login</strong></button>
    <button" class="btn register__button btn-lg"><strong>Register New User</strong></button>
</div>`
}

// renders the login page to the dom and invokes the login and new registration event listeners
const renderLogin = () => {
    let loginHTMLRep = document.querySelector(".top-sec-container")
    let bottomClear = document.querySelector(".bottom-section")
    bottomClear.innerHTML = ""
    loginHTMLRep.innerHTML = ""
    let loginHTML = loginHTMLCreator()
    loginHTMLRep.innerHTML += loginHTML
    loginEvents.login()
    loginEvents.loadRegistration()
}


export default renderLogin