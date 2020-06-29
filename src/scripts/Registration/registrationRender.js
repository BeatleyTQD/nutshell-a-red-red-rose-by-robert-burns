// Module made by Tyler H. and renders the registration page to the dom
import {registrationFactory, loginEvents } from "../Login/login.js"

// stores the registration HTML and returns it upon invocation
const regisHTMLCreator = () => {
    return ` <div id="registration__wrapper">
    <img id="logo__img" src="images/NutshellV2.png" alt="Nutshell Logo" width="10%" height="10%">
    <h1 id="registration__message">New User Registration</h1>
    <!-- <h3 id="tagline"></h3> -->
    <form class="input__group">
        <div class="form__group">
            
            <input type="email" class="form-control" id="email__input" aria-describedby="emailHelp" placeholder="Email">
            
        </div>
        <div class="form__group">
            
            <input type="username" class="form-control" id="username__input" aria-describedby="emailHelp" placeholder="Username">
        
        </div>
        <div class="form__group">
            
            <input type="password" class="form-control" id="password__input" placeholder="Password">
        </div>
        <div class="form__group">
            
            <input type="password" class="form-control" id="password__confirm__input" placeholder="Confirm Password">
        </div>
    </form>

    <button type="button" class="btn newUser__button btn-lg"><strong>Register</strong></button>
</div>`
}

// renders the registration page to the dom and invokes the registration event listeners
const renderRegis = () => {
    let regisHTMLRep = document.querySelector(".top-sec-container")
    let regisHTML = regisHTMLCreator()
    regisHTMLRep.innerHTML = regisHTML
    loginEvents.registerNewUser()
    
}

export default renderRegis