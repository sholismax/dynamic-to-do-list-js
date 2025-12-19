// Get required elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  // Check if taskText is not empty
  if (taskText !== "") {
    // Create a new li element
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Remove task when button is clicked
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li, then li to task list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }
}

// Button click event
addButton.addEventListener("click", addTask);

// Enter key event
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
