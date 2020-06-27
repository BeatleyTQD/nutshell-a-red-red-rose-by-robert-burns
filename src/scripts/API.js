const url = 'http://localhost:8088/'
/**
 * users/articles/events/tasks/friends/messages
 */
// USERS BASE APIs///
 const API = {
    /// USERS BASE APIs////
    async getUsers(){
        const res = await fetch(`${url}users`)
         return await res.json()
    },
    async getUserById(id){
        const res = await fetch(`${url}${id}`)
        return await res.json()
    },
    async addUser(data){
        try {
            const res = await fetch(`${url}users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data)
            })
            return GlobalSuccess(res)
        }
        catch (err) {
            return GlobalError(err)
        }
    },

    async updateUser(data, id){
        const res = await fetch(`${url}${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })
        const err = await GlobalSuccess(res)
        return GlobalError(err)
    },

    async deleteUser(id){
        const res = await fetch(`${url}${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        const err = await GlobalSuccess(res)
        return GlobalError(err)
    }
}


let GlobalSuccess = (res)=>{
    console.log(res, 'Success');
}
let GlobalError = (err)=>{
    console.log(err, 'Error')
}
export default API;