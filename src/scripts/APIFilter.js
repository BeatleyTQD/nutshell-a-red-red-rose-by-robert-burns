import data from "./main.js"
const APIFilter = () => {
let friendFilter = ""

for(let friend of data.friends){
    
    friendFilter += `userId=${friend.userId}&`
    
}
friendFilter += `userId=${window.sessionStorage.activeUser}`
return friendFilter
}

export default APIFilter