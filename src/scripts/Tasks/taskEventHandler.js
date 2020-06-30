import API from '../API.js';
import TaskCardGenerator from './TaskCardGenerator.js'
import data from '../main.js';
const newTask = {
    "userId": window.localStorage.activeUser,
    "task": "",
    "date": new Date(),
    "complete": false
  }

const taskEventHandlers = {
   async taskComplete(e){
    var proceed = confirm("Are you sure you want to proceed?");
if (proceed) {
  let id = e.target.name;
       data.tasks = await API.getTasks();
       let current = filterFunction(data.tasks, id)
       console.log(current);
       current.complete = true;
      await API.updateTask(current, id);
     let arr = await API.getTasks();
     TaskCardGenerator(arr);
        console.log('Task Complete')
} else {
    e.target.checked = false;
  console.log("Keep Task");
  return;
}  
    },
   async addTask(e){
    newTask.userId = data.user
      await API.addTask(newTask);
     let arr = await API.getTasks();
     TaskCardGenerator(arr);  
    },
   async deleteTask(e){
    var proceed = confirm("Are you sure you want to Delete task?");
    if (proceed) {
        await API.deleteTask(e.target.name)
        let arr = await API.getTasks();
        TaskCardGenerator(arr);
    } else {
      console.log("Do not delete")
    }
       
    },
    inputChange(e){
        newTask.task = e.target.value;
        
    }
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