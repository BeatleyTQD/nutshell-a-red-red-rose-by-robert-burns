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

    // Tasks //
    getTasks(){
        return fetch(`${url}tasks`)
        .then(res=>res.json())
        .then(res=>res)
        .catch(GlobalError);
    },

    // News //
    getNews(){
        return fetch(`${url}news`)
        .then(res=>res.json())
        .then(res=>res)
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
    getEvents(){
        return fetch(`${url}events`)
        .then(res=>res.json())
        .then(res=>res)
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