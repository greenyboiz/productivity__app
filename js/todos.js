const form = document.getElementById('form');
const inputTodo = document.getElementById('input-todo');
const todoItem = document.getElementById('todo-item');

const todoList = JSON.parse(localStorage.getItem('todoList'));

// if(todoList) {
    // todoList.forEach(item => )
// }

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
    }
}