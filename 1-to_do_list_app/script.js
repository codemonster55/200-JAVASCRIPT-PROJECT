const form = document.getElementById('todo-form');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const input = document.getElementById('todo-input').value.trim();
  
  if (input) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('click', () => {
      taskItem.style.backgroundColor = checkBox.checked ? 'green' : '';
    });

    const taskText = document.createElement('span');
    taskText.textContent = input;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskItem.remove();
    });

    taskItem.appendChild(checkBox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);

    list.appendChild(taskItem);

    document.getElementById('todo-input').value = '';
  }
});
