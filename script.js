// collecting DOM variables from html
const addNewTask = document.getElementById("new-task");
const addTaskDiv = document.getElementById("add-task");
const taskForm = document.getElementById("task-form")
const cancel = document.getElementById("x")


const hideElement = (toHide, toShow) => {
    toHide.classList.add("hide");
    toShow.classList.remove("hide")
}
addNewTask.addEventListener("click", () => {
    hideElement(addTaskDiv, taskForm)
})
cancel.addEventListener("click", () =>{
    hideElement(taskForm, addTaskDiv)
})
