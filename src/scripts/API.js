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
        return fetch(`${url}${id}`, {
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
    // Events //
    getEvents(){
        return fetch(`${url}events`)
        .then(res=>res.json())
        .then(res=>res)
    },


    // Comments //
    getComments(){
        return fetch(`${url}comments`)
        .then(res=>res.json())
        .then(res=>res)
    }

}


let GlobalSuccess = (res)=>{
    console.log(res, 'Success');
}
let GlobalError = (err)=>{
    console.log(err, 'Error')
}
export default API;