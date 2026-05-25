const addTaskInput = document.getElementById("add-task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

const addTask = () => {
  if (addTaskInput.value === "") {
    alert("Task Empty");
    return;
  }

  const stored = localStorage.getItem("tasks");
  const tasks = stored ? JSON.parse(stored) : [];
  const taskName = addTaskInput.value;
  tasks.push(taskName);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  const index = tasks.length - 1;
  const li = createLi(taskName, index);
  taskList.appendChild(li);

  addTaskInput.value = "";
};

const loadTask = () => {
  const stored = localStorage.getItem("tasks");
  const tasks = stored ? JSON.parse(stored) : [];

  tasks.forEach((taskName, index) => {
    const li = createLi(taskName, index);
    taskList.appendChild(li);
  });
};

const createLi = (taskName, index) => {
  const li = document.createElement("li");
  li.className = "task";
  li.dataset.index = index;

  const div = document.createElement("div");
  div.className = "task-check";

  const img = document.createElement("img");
  img.src = "images/unchecked.png";
  img.alt = "unchecked";

  const span = document.createElement("span");
  span.textContent = taskName;

  const deleteTaskButton = document.createElement("button");
  deleteTaskButton.type = "button";
  deleteTaskButton.textContent = "x";
  deleteTaskButton.className = "remove-task";

  let isChecked = false;
  div.addEventListener("click", () => {
    isChecked = !isChecked;
    img.src = isChecked ? "images/checked.png" : "images/unchecked.png";
    img.alt = isChecked ? "checked" : "unchecked";
    span.style.textDecoration = isChecked ? "line-through" : "none";
    span.style.color = isChecked ? "gray" : "black";
  });

  deleteTaskButton.addEventListener("click", () => {
    removeTask(li);
  });

  div.appendChild(img);
  div.appendChild(span);
  li.appendChild(div);
  li.appendChild(deleteTaskButton);

  return li;
};

const removeTask = (li) => {
  const index = li.dataset.index;
  li.remove();

  const stored = localStorage.getItem("tasks");
  const tasks = JSON.parse(stored);
  tasks.splice(Number(index), 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

addTaskButton.addEventListener("click", addTask);

loadTask();
