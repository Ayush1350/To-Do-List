let tasks = [];

  function renderTasks() {
    const tasksList = document.getElementById('tasks');
    tasksList.innerHTML = '';

    tasks.forEach((task, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div class="task">
          <span>${task}</span>
          <button onclick="editTask(${index})">Edit</button>
          <button onclick="deleteTask(${index})">Delete</button>
        </div>
      `;
      tasksList.appendChild(listItem);
    });
  }

  function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const newTask = newTaskInput.value.trim();

    if (newTask !== '') {
      tasks.unshift(newTask);
      newTaskInput.value = '';
      renderTasks();
    }
  }

  function editTask(index) {
    const updatedTask = prompt('Edit task:', tasks[index]);
    if (updatedTask !== null) {
      tasks[index] = updatedTask.trim();
      renderTasks();
    }
  }

  function deleteTask(index) {
    const isConfirmed = confirm('Are you sure you want to delete this task?');
    if (isConfirmed) {
      tasks.splice(index, 1);
      renderTasks();
    }
  }

  renderTasks();