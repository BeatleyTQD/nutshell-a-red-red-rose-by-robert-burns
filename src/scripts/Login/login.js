

const registrationFactory = (email, username, password) => {
    return {
        "email": email,
        "username": username,
        "password": password
    }
}


let newRegisterButton = document.querySelector(".newUser__button")
newRegisterButton.addEventListener("click", clickEvent => {
    let email = document.querySelector("#email__input").value
    let username = document.querySelector("#username__input").value
    let password = document.querySelector("#password__input").value
    let passwordConfirm = document.querySelector("#password__confirm__input").value
    let usernameCheck = true
    for(let user of ) {
        if(user.username === username) {
            usernameCheck = false
        }
    }
    if(usernameCheck === true){
        if(email.includes("@")) {
            if(password === passwordConfirm){
          
                window.sessionStorage.setItem("activeUser", response.id )
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

    
    
export default registrationFactory
