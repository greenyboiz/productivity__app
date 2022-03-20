const form = document.getElementById('form');
const inputTodo = document.getElementById('input-todo');
const todoItem = document.getElementById('todo-item');

const todoList = JSON.parse(localStorage.getItem('todoList'));

if(todoList) {
    todoList.forEach(item => addTodo(item));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
})

function addTodo(todo) {
    let todoText = inputTodo.value;
    if(todo) {
        todoText = todo.text;
    }
    if(todoText) {
        const todoEle = document.createElement('li');
        if(todo && todo.completed) {
            todoEle.classList.add('completed');
        }

        todoEle.innerText = todoText;

        todoEle.addEventListener('click', () => {
            todoEle.classList.toggle('completed');
            updateTodo();
        });

        todoEle.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            todoEle.remove();
            updateTodo();
        });

        todoItem.appendChild(todoEle);
        inputTodo.value = '';
        updateTodo();
    }
}

function updateTodo() {
    todoEle = document.querySelectorAll('li');

    const todos = [];

    todoEle.forEach(item => {
        todos.push({
            text: item.innerText,
            completed: item.classList.contains('completed')
        });
    });
    localStorage.setItem('todoList', JSON.stringify(todos))
}