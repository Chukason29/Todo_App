// collecting DOM variables from html
const addNewTask = document.getElementById("new-task");
const addTaskDiv = document.getElementById("add-task");
const taskForm = document.getElementById("task-form")
const cancel = document.getElementById("x")

const title = document.getElementById("title");
const date = document.getElementById("date")
const description = document.getElementById("description")

const tasks = []


const hideElement = (toHide, toShow) => {
    toHide.classList.add("hide");
    toShow.classList.remove("hide")
}
const createTask = () =>{
    const newTask = {}
    newTask.taskId = tasks.length
    newTask.taskTitle = title.value
    newTask.taskDate = date.value
    newTask.taskDescription = description.value
    tasks.unshift(newTask);
}
addNewTask.addEventListener("click", () => {
    hideElement(addTaskDiv, taskForm)
})
cancel.addEventListener("click", () =>{
    hideElement(taskForm, addTaskDiv)
})
createTask()