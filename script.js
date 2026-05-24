localStorage.getItem("task");

// ADD TASK INPUT & BUTTON
const addTaskInput = document.getElementById("add-task-input");
const addTaskButton = document.getElementById("add-task-button");

// ADD NEW TASK
const taskList = document.getElementById("task-list");

let isTaskAdd = false;

const addTask = () => {
  if (addTaskInput.value !== "") {
    const li = createLi();

    const div = document.createElement("div");
    div.className = "task-check";
    div.id = "task-check";

    const img = document.createElement("img");
    img.id = "task-status";
    img.src = "images/unchecked.png";
    img.alt = "unchecked";
    // set img.src = images/unchecked as default

    const span = document.createElement("span");
    span.id = "task-name";
    span.textContent = addTaskInput.value;

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.type = "button";
    deleteTaskButton.textContent = "x";
    deleteTaskButton.id = "remove-task";
    deleteTaskButton.className = "remove-task";

    div.appendChild(img);
    div.appendChild(span);
    li.appendChild(div);
    li.appendChild(deleteTaskButton);
    taskList.appendChild(li);

    // deleting a task; "x" button
    deleteTaskButton.addEventListener("click", () => {
      removeTask(li);
    });

    // localStorage/Memory
    const saveTask = () => {
      if (isTaskAdd === true) {
        const taskName = addTaskInput.value;
        const stored = localStorage.getItem("tasks");
        const tasks = stored ? JSON.parse(stored) : [];
        tasks.push(taskName);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    };

    // (un)check a task
    const taskCheck = () => {
      let isChecked = false;

      div.addEventListener("click", () => {
        isChecked = !isChecked;
        if (isChecked) {
          img.src = "images/checked.png";
          img.alt = "checked";
          span.style.textDecoration = "line-through";
          span.style.color = "gray";
        } else {
          img.src = "images/unchecked.png";
          img.alt = "unchecked";
          span.style.textDecoration = "none";
          span.style.color = "black";
        }
      });
    };

    taskCheck();
    saveTask();
    addTaskInput.value = "";
  } else {
    alert("Task Empty");
  }
};

const loadTask = () => {
  localStorage.getItem("tasks");

  const getTask = localStorage.getItem("tasks");
  const getTaskArray = JSON.parse(getTask);

  getTaskArray.forEach((task) => {
    addTaskInput.value = task;
    isTaskAdd = false;
    addTask();
  });
};

const removeTask = (li) => {
  li.remove();
};

const createLi = () => {
  const li = document.createElement("li");
  li.className = "task";
  li.id = "task";

  return li;
};

addTaskButton.addEventListener("click", () => {
  isTaskAdd = true;
  addTask();
});

loadTask();
