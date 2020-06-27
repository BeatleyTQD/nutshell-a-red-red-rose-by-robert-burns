const url = 'http://localhost:8088/'
/**
 * users/articles/events/tasks/friends/messages
 */
// USERS BASE APIs///
const API = {
    /// USERS BASE APIs////
    getUsers(){
        return fetch(`http://localhost:8088/users`)
        .then(res=>res.json())
        .then(res=>res)
    },
    getUserById(id){
        return fetch(`${url}${id}`)
        .then(res=>res.json())
        
    },
    addUser(data){
        return fetch(`${url}`, {
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
        return fetch(`${url}${id}`, {
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
    }
}


let GlobalSuccess = (res)=>{
    console.log(res, 'Success');
}
let GlobalError = (err)=>{
    console.log(err, 'Error')
}
export default API;