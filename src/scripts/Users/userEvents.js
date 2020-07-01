import API from '../API.js'


async function searchUsers(e){
 
   let res =  await API.searchUsers(e.target.value)
  console.log( createSearchInput(res))

}
const createSearchInput = (arr) =>{
    let html = ``
    for(let i = 0; i < arr.length; i++){
        html += searchItems(arr[i])
    }
    return html;
}

const searchItems = (obj) =>{
    return `
    <p>${obj.username}</p>
    `
}
export default searchUsers;