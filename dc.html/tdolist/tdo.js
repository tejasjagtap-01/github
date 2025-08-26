const addBtn=document.getElementById("add-btn");
const taskInput=document.getElementById("task-input");
const taskList=document.getElementById("task-list");

addBtn.addEventListener("click",addTask);

function addTask(){
    const taskText=taskInput.ariaValueMax.trim();
    if(taskText===""){
        alert("please enter a task!");
        return;
    }
    const li =document.createElement("li");
    li.textContent=taskText;

    li.addEventListener("click",()=>{
        li.classList.toggle("completed");
    });

    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.className="delete-btn";
    deleteBtn.addEventListener("click",(e)=>{
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value="";
}