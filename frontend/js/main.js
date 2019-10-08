renderTodoItems()

function renderTodoItems(){
    var a = document.getElementById("todoitems")
    var data = loadData()
    data.items.forEach(item=>{
        //r = document.createElement("div");
        //r.classList.add("row")
        a.appendChild(todoItemComponent(item))
        //a.appendChild(r)
    })
}


