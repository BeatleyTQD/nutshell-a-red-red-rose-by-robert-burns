import data from "./main.js"

const url = 'http://localhost:8088/'
/**
 * users/articles/events/tasks/friends/messages
 */
// USERS BASE APIs///
const API = {
    /// USERS BASE APIs////
    getUsers(){
        return fetch(`${url}users`)
        .then(res=>res.json())
        .then(res=>res)
    },
    getUserById(id){
        return fetch(`${url}users/${id}`)
        .then(res=>res.json())
        
    },
    addUser(data){
        return fetch(`${url}users`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(data)
        })
        .then(GlobalSuccess)
        .catch(GlobalError)
    },

    updateUser(data, id){
        return fetch(`${url}users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(data)
        })
        .then(GlobalSuccess)
        .then(GlobalError)
    },

    deleteUser(id){
        return fetch(`${url}users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              }
        })
        .then(GlobalSuccess)
        .then(GlobalError)
    },
    searchUsers(search){
        return fetch(`${url}users?username_like=${search}`)
        .then(res=>res.json())
        .then(res=>res)
    },

    // Tasks //
    getTasks(id){
        return fetch(`${url}tasks?userId=${id}`)
        .then(res=>res.json())
        .then((res) => {
            data.tasks = res
            return res
        })
    },
    addTask(data){
        return fetch(`${url}tasks?`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(data)
        })
    },
    deleteTask(id){
        return fetch(`${url}tasks/${id}`,{
            method:'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    },
    updateTask(data, id){
        return fetch(`${url}tasks/${id}`, {
            method: "PUT", 
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
    },

    // News //
    getNews(id){
        return fetch(`${url}news?userId=${id}`)
        .then(res=>res.json())
        .then((res) => {
            data.news = res
            return res
        })
    },
    //deletes user selected news article from the database
    deleteNews(id){
        return fetch(`${url}news/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(GlobalSuccess)
        .then(GlobalError)
    },
    //saves a user submitted news article to the database
    saveNews(data){
        return fetch(`${url}news`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
        })
        .then(GlobalSuccess)
        .catch(GlobalError)
    },
    // Events //
    getEvents(id){
        return fetch(`${url}events?userId=${id}`)
        .then(res=>res.json())
        .then((res) => {
            data.events = res
            return res
        })
    },

    deleteEvent(id){
        return fetch(`${url}events/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              }
        })
        .then(GlobalSuccess)
        .catch(GlobalError)

    }, saveEvents(data){
        return fetch(`${url}events`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(data)
        })
        .then(GlobalSuccess)
        .catch(GlobalError)
    },

    // Comments //
    getComments(){
        return fetch(`${url}comments`)
        .then(res=>res.json())
        .then(res=>res)
    },
    deleteComments(id){
        return fetch(`${url}comments/${id}`, {
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json'
              }
        })
    },
    //Friends //
    getFriends(id){
        return fetch(`${url}friends?activeUserId=${id}&_expand=user`)
        .then(res=> res.json())
        .then(res=>res)
    },
    unfollowFriend(id){
        return fetch(`${url}friends/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json"
            }
        })
    }
}


let GlobalSuccess = (res)=>{
    console.log("Success")
    return res;
}
let GlobalError = (err)=>{
    console.log(err, 'Error')
}
export default API;