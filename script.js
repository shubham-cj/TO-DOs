
let todoItemsContainer = document.getElementById("todoItemsContainer")
let onAddTodoButton = document.getElementById('onAddTodoButton')


let todoList = [
    {
        text: "Workout",
        uniqueNo: 1
    },
    {
        text: "Study",
        uniqueNo: 2
    },
    {
        text: "Read Book",
        uniqueNo: 3
    },
]
let todosCount = todoList.length

function onTodoStatusChange(labelId){
    let labelElement = document.getElementById(labelId)
    labelElement.classList.toggle('checked')
}

function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId)
    todoItemsContainer.removeChild(todoElement)
}

function creatAndAppendList(todo){
    let todoId = 'todo' + todo.uniqueNo
    let checkboxId = 'checkbox' + todo.uniqueNo
    let labelId = 'label' + todo.uniqueNo

    let todoElement = document.createElement("li")
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row")
    todoElement.id = todoId
    todoItemsContainer.appendChild(todoElement)

    let inputElement = document.createElement("input")
    inputElement.classList.add("checkbox-input")
    inputElement.type = "checkbox"
    inputElement.id = checkboxId
    inputElement.onclick = function(){
        onTodoStatusChange(labelId)
    }
    todoElement.appendChild(inputElement)

    let labelContainer = document.createElement("div")
    labelContainer.classList.add("label-container", "d-flex", "flex-row")
    todoElement.appendChild(labelContainer)

    let labelElement = document.createElement("label")
    labelElement.classList.add("checkbox-label")
    labelElement.setAttribute("for", checkboxId)
    labelElement.id = labelId
    labelElement.textContent = todo.text
    labelContainer.appendChild(labelElement)

    let deleteIconContainer = document.createElement("div")
    deleteIconContainer.id = "delete-icon"
    labelContainer.appendChild(deleteIconContainer)

    let deleteIcon = document.createElement("i")
    deleteIcon.classList.add("bi", "bi-trash")
    deleteIcon.onclick = function(){
        onDeleteTodo(todoId)
    }
    deleteIconContainer.appendChild(deleteIcon)
}

for (let todos of todoList){
    creatAndAppendList(todos)
}

function onAddTodo(){
    let todoUserInput = document.getElementById('todoUserInput')
    let userInputValue = todoUserInput.value
    if (userInputValue === ""){
        alert("Enter Your Task")
        return
    }
    todosCount += 1
    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount
    }
    creatAndAppendList(newTodo)
    todoUserInput.value = ""
}

onAddTodoButton.onclick = function(){
    onAddTodo()
}
