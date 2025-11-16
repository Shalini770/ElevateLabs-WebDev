document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Add task
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    // Handle complete/delete with event delegation
    taskList.addEventListener("click", (e) => {
        const target = e.target;
        const li = target.closest("li");

        if (target.classList.contains("delete-btn")) {
            li.remove();
        }

        if (target.classList.contains("complete-btn")) {
            li.classList.toggle("completed");
        }
    });

    // Create a new task <li>
    function addTask(text) {
        const li = document.createElement("li");
        li.innerHTML = `
      <span class="task-text">${text}</span>
      <span class="task-buttons">
        <button class="complete-btn" aria-label="Mark as complete">✓</button>
        <button class="delete-btn" aria-label="Delete task">✕</button>
      </span>
    `;
        taskList.appendChild(li);
    }
});
