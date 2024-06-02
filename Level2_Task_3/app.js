// JavaScript for the to-do web app functionality

let tasks = [];



function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const newTask = {
        text: taskText,
        completed: false,
        timestamp: new Date()
      };
      tasks.push(newTask);
      displayTasks();
      taskInput.value = '';
    }
  }
  function displayTasks() {
    const pendingTasksList = document.getElementById('pendingTasks');
    const completedTasksList = document.getElementById('completedTasks');
    pendingTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';

    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = task.text;
      li.onclick = () => toggleTaskCompletion(index);
      if (task.completed) {
        li.style.textDecoration = 'line-through';
        completedTasksList.appendChild(li);
      } else {
        pendingTasksList.appendChild(li);
      }
    });
  }

  function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
  }