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
  tasks.push({ taskName: taskName, status: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  const index = tasks.length - 1;
  const li = createLi(taskName, index, false);
  taskList.appendChild(li);

  addTaskInput.value = "";
};

const loadTask = () => {
  const stored = localStorage.getItem("tasks");
  const tasks = stored ? JSON.parse(stored) : [];

  tasks.forEach((taskState, index) => {
    const li = createLi(taskState.taskName, index, taskState.status);
    taskList.appendChild(li);
  });
};

const createLi = (taskName, index, status) => {
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

  let isChecked = status;
  const taskStateHTML = () => {
    img.src = isChecked ? "images/checked.png" : "images/unchecked.png";
    img.alt = isChecked ? "checked" : "unchecked";
    span.style.textDecoration = isChecked ? "line-through" : "none";
    span.style.color = isChecked ? "gray" : "black";
  };
  taskStateHTML();
  div.addEventListener("click", (status) => {
    isChecked = !isChecked;

    const stored = localStorage.getItem("tasks");
    const tasks = stored ? JSON.parse(stored) : [];
    tasks[index].status = isChecked;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // maybe make this a function to reuse to keep the same state after reload?
    taskStateHTML();
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
  const getLi = document.querySelectorAll(".task");

  getLi.forEach((item, index) => {
    item.dataset.index = index;
  });

  const stored = localStorage.getItem("tasks");
  const tasks = JSON.parse(stored);
  tasks.splice(Number(index), 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

addTaskButton.addEventListener("click", addTask);

loadTask();
