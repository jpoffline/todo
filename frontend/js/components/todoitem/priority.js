function todoItemPriorityIcon(p){
    return genIcon("thermometer-" + p);
}

function todoItemPriorityComponent(id, priority){
    if(priority < 0){priority = 0}
    if(priority > 4){priority = 4}
    var component = document.createElement("span");
    component.appendChild(todoItemPriorityIcon(priority))
    if(priority > 3){
        component.classList.add("red")
    }
    component.classList.add("todoitempriority");
    component.setAttribute("id", id);
    component.setAttribute("priority", priority)
    component.setAttribute("onclick", "cycleItemPriority(this.id)");

    return(component)
}

function cycleItemPriority(id){
    comp = document.getElementById(id)
    currp = parseInt(comp.getAttribute("priority"))
    var newp = (currp+1) % 5;
    comp.setAttribute("priority", newp)
    comp.replaceChild(todoItemPriorityIcon(newp), comp.childNodes[0])
    if(newp > 3){
        comp.classList.add("red")
    }else{
        comp.classList.remove("red")
    }
    updateItemPriority(id.split("-")[1], newp)
}