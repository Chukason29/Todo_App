const taskForm = document.getElementById("task-form")
const confirmCloseDialog = document.getElementById("confirm-close-dialog")
const openTaskFormBtn = document.getElementById("open-task-form-btn")
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const descriptionInput = document.getElementById("description-input");
const dateInput = document.getElementById("date-input");

// This taskData holds all the task objects
const taskData = []

// CurrentTask is used to track a specific object for editing and deleting purpose
let currentTask = {}

//reseting the task form field
const reset = () => {
    titleInput.value = ""
    dateInput.value = ""
    descriptionInput.value = ""
    taskForm.classList.toggle("hidden")
    currentTask = {}
}

// Used for toggling the form and task divs
openTaskFormBtn.addEventListener("click", () => taskForm.classList.toggle("hidden"))

// Used to show the modal for discard or Cancel
closeTaskFormBtn.addEventListener("click", () => {
    confirmCloseDialog.showModal()
})

//used to close the modal created with the dislog element
cancelBtn.addEventListener("click", () => 
  confirmCloseDialog.close()
)

//used to discard changes from the modal
discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close()
    taskForm.classList.toggle("hidden")
})

taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    //This function checks if a task already exists?
    const dataArrIndex = taskData.findIndex((item) => 
    item.id === currentTask.id
    )
    const taskObj = {
        //creating a very unique Id
        id: `${titleInput.value.toLowerCase().split(' ').join("-")}-${Date.now()}`,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value
    }
    if (dataArrIndex === -1) {
        taskData.unshift(taskObj)
    }
    taskData.forEach(
        ({ id, title, date, description }) => {
            (tasksContainer.innerHTML += `
            <div class="task" id="${id}">
              <p><strong>Title:</strong> ${title}</p>
              <p><strong>Date:</strong> ${date}</p>
              <p><strong>Description:</strong> ${description}</p>
              <button type="button" class="btn">Edit</button>
              <button type="button" class="btn">Delete</button>
            </div>
          `)
        }
      );
    
      reset()
})
