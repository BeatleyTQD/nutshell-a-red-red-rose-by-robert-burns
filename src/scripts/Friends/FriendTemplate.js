export default function FriendTemplate(arr){
    document.querySelector('.friend-list').innerHTML = friendSectionGenerator(arr);
}

const friendSectionGenerator = (arr)=>{
    let friendString = ""
    for(let i = 0; i < arr.length; i++){
      friendString += friendHtmlTemplate(arr[i])
    }
    return friendString;
  
  }
  const friendHtmlTemplate= (obj) =>{
    html = `<div class="friend-entry">
    <div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Friend Picture</h5>
          <p class="card-text">Friend Name</p>
          <p class="card-text">Friend Details</p>
        </div>
        </div>
  </div>`
  return html;
  }