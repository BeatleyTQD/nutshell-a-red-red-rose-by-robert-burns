import EventListener from '../EventListeners.js'
import data from '../main.js';

export default function TaskCardGenerator(arr){
    document.querySelector('.task-cards').innerHTML = "";
   for(let i = 0; i < arr.length; i++){
       if(!arr[i].complete && arr[i].userId == data.user)renderTaskCard(makeTaskCard(arr[i]));
      
   }
   document.querySelector('.task-cards').innerHTML += taskInputField();
   EventListener.setTaskEvents();
}
const renderTaskCard = (html) =>{
    document.querySelector('.task-cards').innerHTML += html;

}
const makeTaskCard = (obj)=>{
    let html = `
    <div class="t-card d-flex flex-row">
    <input class="checkbox" type="checkbox"  name=${obj.id}>
    <h1>${obj.task}</h1>
    <button type="button" name=${obj.id} id="task-delete-btn" class="btn-danger">Delete</button>
</div>
    `
    return html;
}
const taskInputField = () =>{
    return `<input type="text" id="task-input"  value="Add Task" name="task"><button type="button" id="task-post-btn">ADD</button>`
}
