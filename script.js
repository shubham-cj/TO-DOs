
let todoItemsContainer = document.getElementById("todoItemsContainer")
let onAddTodoButton = document.getElementById('onAddTodoButton')

function getTodoListFromLocalStorage(){
    let stringifiedTodoList = localStorage.getItem("todoList")
    let parsedTodoList = JSON.parse(stringifiedTodoList);

    if (parsedTodoList === null){
        return []
    }
    else{
        return parsedTodoList
    }
}

let todoList = getTodoListFromLocalStorage()
    
function saveTodoButton(){
    localStorage.setItem("todoList", JSON.stringify(todoList))
}

let todosCount = todoList.length

function onTodoStatusChange(labelId, todoId){
    let labelElement = document.getElementById(labelId)
    labelElement.classList.toggle('checked')

    let todoObjectIndex = todoList.findIndex(
        function(eachTodo){
            let eachTodoId = "todo" + eachTodo.uniqueNo
            if (eachTodoId === todoId){
                return true
            }
            else{
                return false
            }
        }
    )
    let todoObject = todoList[todoObjectIndex]

    if (todoObject.isChecked === true){
        todoObject.isChecked = false
    }
    else{
        todoObject.isChecked = true
    }
}

function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId)
    todoItemsContainer.removeChild(todoElement)
    let deleteElementIndex = todoList.findIndex(
        function(eachTodo){
            let eachTodoId = 'todo' + eachTodo.uniqueNo
            if (eachTodoId === todoId){
                return true
            }
            else{
                return false
            }
        }
    )
    todoList.splice(deleteElementIndex, 1)
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
    inputElement.checked = todo.isChecked
    inputElement.onclick = function(){
        onTodoStatusChange(labelId, todoId)
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
    if (todo.isChecked === true){
        labelElement.classList.add("checked")
    }
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
        uniqueNo: todosCount,
        isChecked: false
    }
    todoList.push(newTodo)
    creatAndAppendList(newTodo)
    todoUserInput.value = ""
}

onAddTodoButton.onclick = function(){
    onAddTodo()
}
