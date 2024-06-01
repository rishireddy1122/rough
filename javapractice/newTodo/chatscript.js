const form = document.querySelector("#new-todo-form")
const todoInput = document.querySelector("#todo-input")
const list = document.querySelector("#list")
const template = document.querySelector("#list-item-template")

const LOCAL_STORAGE_PREFIX = "advanced-todo-list"
const todo_storage = `${LOCAL_STORAGE_PREFIX}-todos`
const todos = loadTodos()
todos.forEach(rendertodo);

form.addEventListener("submit", e => {
    e.preventDefault()
    const todoName = todoInput.value
    if (todoName === "") {
        return
    }
    const todo = {
        id: new Date().valueOf().toString(),
        name: todoName,
        complete: false
    }
    todos.push(todo)
    rendertodo(todo)
    saveTodos()
    todoInput.value = ""
})

function rendertodo(todo) {
    const templateClone = template.content.cloneNode(true)
    const textElement = templateClone.querySelector("[data-list-item-text]")
    const listItem = templateClone.querySelector(".list-item")
    textElement.innerText = todo.name
    listItem.dataset.todoId = todo.id

    const deleteButton = templateClone.querySelector("[data-button-delete]")
    deleteButton.addEventListener("click", e => {
        todos.splice(todos.findIndex(t => t.id === todo.id), 1)
        saveTodos()
        listItem.remove()
    })

    const completeButton = templateClone.querySelector("[data-button-complete]")
    completeButton.addEventListener("click", e => {
        todo.complete = !todo.complete
        saveTodos()
        textElement.classList.toggle("complete", todo.complete)
    })

    textElement.classList.toggle("complete", todo.complete)
    list.appendChild(templateClone)
}

// Save all todos to local storage
function saveTodos() {
    localStorage.setItem(todo_storage, JSON.stringify(todos))
}

// Load todos from local storage
function loadTodos() {
    const todosString = localStorage.getItem(todo_storage)
    return JSON.parse(todosString) || []
}
