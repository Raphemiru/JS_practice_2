// ADD TASK INPUT & BUTTON
const addTaskInput = document.getElementById("add-task-input");
const addTaskButton = document.getElementById("add-task-button");

// ADD NEW TASK
const taskList = document.getElementById("task-list");

const addTask = () => {
  const li = document.createElement("li");
  li.className = "task";
  li.id = "task";

  const div = document.createElement("div");
  div.className = "task-check";
  div.id = "task-check";

  const img = document.createElement("img");
  img.id = "task-status";
  img.src = "";
  img.alt = "";

  const span = document.createElement("span");
  span.id = "task-name";
  span.textContent = addTaskInput.value;

  const button = document.createElement("button");
  button.textContent = "x";
  button.id = "remove-task";
  button.className = "remove-task";

  div.appendChild(img);
  div.appendChild(span);
  li.appendChild(div);
  li.appendChild(button);
  taskList.appendChild(li);

  addTaskInput.value = "";
};

addTaskButton.addEventListener("click", () => {
  addTask();
});
