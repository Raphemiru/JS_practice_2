// ADD TASK INPUT & BUTTON
const addTaskInput = document.getElementById("add-task-input");
const addTaskButton = document.getElementById("add-task-button");

// ADD NEW TASK
addTaskButton.addEventListener("click", () => {
  // code to create new list using const task
  //
  console.log(addTaskInput.value); // checks if the input text gets noticed
});

/* TASK CODE
const task = () => {
    <li> class="task" id="task">
        <div class="task-check" id="task-check">
            <img id="task-status" src="" alt="" />
            <span id="task-name"></span>
        </div>
        <button id="remove-task" class="remove-task"></button>
    </li>
}
*/
