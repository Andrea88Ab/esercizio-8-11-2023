document.getElementById('addTaskButton').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  const newTask = document.createElement('li');
  newTask.textContent = taskInput.value;
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'cancella';
  deleteButton.classList.add('deleteButton');

  deleteButton.addEventListener('click', function() {
    taskList.removeChild(newTask);
  });

  newTask.addEventListener('click', function() {
    newTask.classList.toggle('completato');
  });

  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);

  taskInput.value = '';
});

  