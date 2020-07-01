import API from '../API.js';
import TaskCardGenerator from './TaskCardGenerator.js'
import data from '../main.js';


const taskEventHandlers = {
   async taskComplete(e){
    var proceed = confirm("Are you sure you want to proceed?");
if (proceed) {
  let id = e.target.name;
       data.tasks = await API.getTasks(window.sessionStorage.activeUser);
       let current = filterFunction(data.tasks, id)
       console.log(current);
       current.complete = true;
      await API.updateTask(current, id);
     let arr = await API.getTasks(window.sessionStorage.activeUser);
     TaskCardGenerator(arr);
        console.log('Task Complete')
} else {
    e.target.checked = false;
  console.log("Keep Task");
  return;
}  
    },
   async addTask(e){
    const newTask = {
      "userId": 1,
      "task": document.querySelector("#task-input").value,
      "date": document.querySelector("#task-date-input").value,
      "complete": false
    }
    newTask.userId = parseInt(data.user)
      await API.addTask(newTask);
     let arr = await API.getTasks(window.sessionStorage.activeUser);
     TaskCardGenerator(arr);  
    },
   async deleteTask(e){
    var proceed = confirm("Are you sure you want to Delete task?");
    if (proceed) {
        await API.deleteTask(e.target.name)
        let arr = await API.getTasks(window.sessionStorage.activeUser);
        TaskCardGenerator(arr);
    } else {
      console.log("Do not delete")
    }
       
    },
    
}
const filterFunction = (arr, id) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i].id == id){
            return arr[i]
        }
    }
}

export default taskEventHandlers;
/**
 * {
      "id": 1,
      "userId": 1,
      "task": "Laundry",
      "date": "06/29/2020",
      "completed": false
    }
 */