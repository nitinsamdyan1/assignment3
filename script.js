// Get references to the input field, add button, and to-do list container
const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// Event listener for the add button to create a new to-do item
addTodoButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    
    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
    }
});

// Function to create a new to-do item and add it to the list
function addTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            todoItem.classList.add('completed');
            todoList.appendChild(todoItem); // Move to bottom
        } else {
            todoItem.classList.remove('completed');
            todoList.insertBefore(todoItem, todoList.firstChild); // Move to top
        }
    });
    
    const todoLabel = document.createElement('span');
    todoLabel.textContent = todoText;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(todoItem);
    });
    
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoLabel);
    todoItem.appendChild(deleteButton);
    
    todoList.appendChild(todoItem);
}
