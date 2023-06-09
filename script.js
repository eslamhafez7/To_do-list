const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    taskList.appendChild(newTask);
    taskInput.value = '';
    }
}

