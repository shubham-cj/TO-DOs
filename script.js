
let todoItemsContainer = document.getElementById("todoItemsContainer")

let todoList = [
    {text: "Learn HTML"},
    {text: "Learn CSS"},
    {text: "Learn JavaScript"},
    {text: "Learn Bootstrap"}
]

function creatAndAppendList(todo){
    let todoElement = document.createElement("li")
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row")
    todoItemsContainer.appendChild(todoElement)

    let inputElement = document.createElement("input")
    inputElement.classList.add("checkbox-input")
    inputElement.type = "checkbox"
    inputElement.id = "checkboxInput"
    todoElement.appendChild(inputElement)

    let labelContainer = document.createElement("div")
    labelContainer.classList.add("label-container", "d-flex", "flex-row")
    todoElement.appendChild(labelContainer)

    let labelElement = document.createElement("label")
    labelElement.classList.add("checkbox-label")
    labelElement.setAttribute("for", "checkboxInput")
    labelElement.textContent = todo.text
    labelContainer.appendChild(labelElement)

    let deleteIconContainer = document.createElement("div")
    deleteIconContainer.id = "delete-icon"
    labelContainer.appendChild(deleteIconContainer)

    let deleteIcon = document.createElement("i")
    deleteIcon.classList.add("bi", "bi-trash")
    deleteIconContainer.appendChild(deleteIcon)
}

for (let todos of todoList){
    creatAndAppendList(todos)
}
