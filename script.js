document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Remove task when button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append remove button to list item
        listItem.appendChild(removeButton);

        // Append list item to task list
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = "";
    }

    // Add task when button is clicked
    addButton.addEventListener("click", function () {
        addTask();
    });

    // Add task when Enter key is pressed
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Invoke addTask on DOMContentLoaded
    addTask();
});
