import EventListener from '../EventListeners.js'
import data from '../main.js';

export default function TaskCardGenerator(arr){
    document.querySelector('.task-cards').innerHTML = "";
   for(let i = 0; i < arr.length; i++){
       if(!arr[i].complete && arr[i].userId == data.user)renderTaskCard(makeTaskCard(arr[i]));
      
   }
   document.querySelector('.task-inputs').innerHTML += taskInputField();
   EventListener.setTaskEvents();
}
const renderTaskCard = (html) =>{
    document.querySelector('.task-cards').innerHTML += html;

}
const makeTaskCard = (obj)=>{
    let month = obj.date.split("-")[1]
    let day = obj.date.split("-")[2]
    let year = obj.date.split("-")[0]
    let html = `
    <div class="t-card d-flex flex-row">
    <input class="checkbox" type="checkbox"  name=${obj.id}>
    <h1 id="task-output">${obj.task}</h1><br>
    <h3 id="due-date-task">Due Date:<br> ${month}-${day}-${year}</h3>
    <button type="button" name=${obj.id} id="task-delete-btn" >Delete</button>
</div>
    `
    return html;
}
const taskInputField = () =>{
    return `<input type="text" id="task-input"  placeholder="New Task" value="" name="task"><br>
    <input type="date" id="task-date-input"  placeholder="Due Date"  name="task"><br><button type="button" id="task-post-btn">ADD</button>`
}
