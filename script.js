// Run code only after the HTML has fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage when the page loads
    loadTasks();

    // Function to add a task
    function addTask(taskText = null, save = true) {
        // If taskText is not provided, get it from input
        if (taskText === null) {
            taskText = taskInput.value.trim();
        }

        // Prevent empty tasks
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Remove task from DOM and Local Storage
        removeButton.onclick = function () {
            taskList.removeChild(li);
            removeTaskFromStorage(taskText);
        };

        // Append elements
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Save task to Local Storage if required
        if (save) {
            saveTaskToStorage(taskText);
        }

        // Clear input field
        taskInput.value = "";
    }

    // Save a task to Local Storage
    function saveTaskToStorage(taskText) {
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach(task => {
            addTask(task, false); // false prevents re-saving
        });
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

});
