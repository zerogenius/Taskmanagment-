// JavaScript code for the app
document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    taskForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
          const taskItem = document.createElement('li');
        taskItem.className = 'taskItem';
  
        const taskItemText = document.createElement('span');
        taskItemText.className = 'taskItemText';
        taskItemText.textContent = taskText;
  
        const taskItemDelete = document.createElement('button');
        taskItemDelete.className = 'taskItemDelete';
        taskItemDelete.textContent = 'Delete';
  
        taskItemDelete.addEventListener('click', function() {
          taskItem.remove();
        });
  
        taskItem.appendChild(taskItemText);
        taskItem.appendChild(taskItemDelete);
  
        taskList.appendChild(taskItem);
  
        taskInput.value = '';
      }
    });
  });
