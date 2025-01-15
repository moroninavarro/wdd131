let tasks = [];
function taskTemplate(task) {
    return
<li ${task.completed ? 'class= "strike"' : ""} >
    <p>${task.detail}</p>
    <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
    </div>
</li>
}

function renderTask(tasks){

    const listElement = document.querySelector("#todoList");
    listElement.innerHTML = "";

    const html = task.map(taskTemplate).join("");
    listElement.innerHTML = html;
}



function newTask(){

    const task = document.querySelector("#todo").value;
    task.push({detail: task, completed: false});

    renderTask(task);
}

function completeTask(taskElment){
    const taskIndex = tasks.findIndex(
        (task) =>task.detail===taskElement.querySelector('p').innerText
    );
    task[taskIndex].completed = task[taskIndex].completed ? false : true;
    taskElement.classList.toogle("strike");
    console.log(tasks);
}


function manageTasks(e) {
    console.log(e.target);
    const parent = e.target.closest("li");
    if (e.target.dataset.action ==="delete") {
        removeTask(parent);
    }
    if (e.target.dataset.action ==="complete") {
        completeTask(parent);
}
}


document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);
renderTask(tasks);