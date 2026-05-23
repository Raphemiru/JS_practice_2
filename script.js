// ADD TASK INPUT & BUTTON
const addTaskInput = document.getElementById("add-task-input");
const addTaskButton = document.getElementById("add-task-button");

// ADD NEW TASK
const taskList = document.getElementById("task-list");

const addTask = () => {
  if (addTaskInput.value !== "") {
    const li = document.createElement("li");
    li.className = "task";
    li.id = "task";

    const div = document.createElement("div");
    div.className = "task-check";
    div.id = "task-check";

    const img = document.createElement("img");
    img.id = "task-status";
    img.src = "images/unchecked.png";
    img.alt = "";
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

    addTaskInput.value = "";
  } else {
    alert("Task Empty");
  }
};

const removeTask = (li) => {
  li.remove();
};

const taskDone = () => {
  /*
        if div is pressed then {
            set img.src = images/checked.png
        } else {
            set img.src = images/unchecked.png
        }
        
    */
};

addTaskButton.addEventListener("click", () => {
  addTask();
});
