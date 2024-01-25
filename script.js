// collecting DOM variables from html
const addNewTask = document.getElementById("new-task");
const addTaskDiv = document.getElementById("add-task");
const taskDiv = document.getElementById("task-div")
const taskForm = document.getElementById("task-form")
const cancel = document.getElementById("x")

const title = document.getElementById("title");
const date = document.getElementById("date")
const description = document.getElementById("description")
const taskSubmit = document.getElementById("form-submit")
const taskList = document.getElementById("all-tasks")

const tasks = []

//toggling elements
const hideElement = (toHide, toShow) => {
    toHide.classList.add("hide");
    toShow.classList.remove("hide")
}

//This function
const createTask = () =>{
    const newTask = {}
    newTask.taskId = tasks.length
    newTask.taskTitle = title.value
    newTask.taskDate = date.value
    newTask.taskDescription = description.value
    tasks.push(newTask);
}
const showTasks = () => {
    tasks.forEach((task) => {
        const{taskId, taskTitle, taskDate, taskDescription} = task
        taskList.innerHTML += 
        `<div class="task">
            <p><strong>Title: </strong>${taskTitle}</p>
            <p><strong>Date: </strong>${taskDate}</p>
            <p><strong>Description: </strong>${taskDescription}</p>
            <button type = "button" id="edit-${taskId}">Edit</button>
            <button type = "button" id="delete-${taskId}">Edit</button>
        </div>`
    });
}
addNewTask.addEventListener("click", () => {
    hideElement(addTaskDiv, taskDiv)
})
cancel.addEventListener("click", () =>{

    showTasks()
    hideElement(taskDiv, addTaskDiv)
})

taskForm.addEventListener("submit", (event) => {
    event.preventDefault()
    createTask()
    showTasks()
    hideElement(taskDiv, addTaskDiv);
})


