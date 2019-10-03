renderTodoItems()

function renderTodoItems(){
    var a = document.getElementById("todoitems")
    var data = loadData()
    data.items.forEach(item=>{
        a.appendChild(todoItemComponent(item))
    })
}


