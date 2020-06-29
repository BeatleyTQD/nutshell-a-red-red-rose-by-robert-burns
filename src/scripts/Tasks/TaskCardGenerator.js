export default function TaskCardGenerator(arr){
   for(let i = 0; i < arr.length; i++){
       renderTaskCard(makeTaskCard(arr[i]));
   }
}
const renderTaskCard = (html) =>{
    document.querySelector('.task-cards').innerHTML += html;

}
const makeTaskCard = (obj)=>{
    let html = `
    <div class="t-card d-flex flex-row">
    <input class="checkbox" type="checkbox"  name="task">
    <h1>${obj.task}</h1>
    <button type="button" class="btn-danger">Delete</button>
</div>
    `
    return html;
}
