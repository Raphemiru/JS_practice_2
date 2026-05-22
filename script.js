// ADD TASK INPUT & BUTTON
const addTaskInput = document.getElementById("add-task-input");
const addTaskButton = document.getElementById("add-task-button");

// TASK LIST
const taskStatus = document.getElementById("task-status");
const taskCheck = document.getElementById("task-check");
const taskName = document.getElementById("task-name");
const removeTask = document.getElementById("remove-task");

// FETCH NEW TASK INPUT
const addTask = addTaskButton.addEventListener("click", (event) => {
  console.log("button clicked");
  console.log(addTaskInput.value);
});
