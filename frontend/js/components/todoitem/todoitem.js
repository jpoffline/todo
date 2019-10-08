function todoItemComponent(todoitem) {
    var comp = document.createElement("div");
    comp.classList.add("todoitem");
    comp.classList.add("row");
    comp.setAttribute("onclick", "todoItemClicked(this.id)");
    comp.setAttribute("id", "todo-" + todoitem.id)

    comp.appendChild(BSTBELEM(todoItemIdComponent(todoitem.id), "1"));
    comp.appendChild(BSTBELEM(todoItemStatusComponent("todo-" + todoitem.id + "-status", todoitem.status), "1"))
    comp.appendChild(BSTBELEM(todoItemTitleComponent(todoitem.title), "3"));
    comp.appendChild(BSTBELEM(todoItemBodyComponent(todoitem.body), "3"));

    comp.appendChild(BSTBELEM(todoItemAssignedToComponent(todoitem.assignedto), "1"));
    comp.appendChild(BSTBELEM(todoItemPriorityComponent(todoitem.priority), "1"));
    comp.appendChild(BSTBELEM(todoItemAddedWhenComponent(todoitem.added)));

    return (comp)
}

function todoItemClicked(id){
    console.log(id)
}

function BSTBELEM(content, n="2"){
    var comp = document.createElement("div");
    comp.classList.add("col-md-" + n);
    comp.appendChild(content)
    return(comp)
}

function todoItemAddedWhenComponent(when) {
    var component = document.createElement("span");
    component.innerHTML = when
    component.classList.add("todoitemadded");
    return (component)
}

function todoItemIdComponent(id) {
    var compid = document.createElement("span");
    compid.innerHTML = id;
    return (compid)
}

function todoItemTitleComponent(title) {
    var comp = document.createElement("span");

    comp.innerHTML = stringTruncate(title, 10);
    comp.classList.add("todoitemtitle")
    return (comp)
}

function todoItemBodyComponent(body) {
    var compbody = document.createElement("span");
    compbody.innerHTML = stringTruncate(body, 15);
    compbody.classList.add("todoitembody");
    return (compbody)
}

function stringTruncate(str, len){
    if(str.length > len){
        return(str.slice(0, len) + '...')
    }
    return(str)
}