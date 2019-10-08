function todoItemPriorityIcon(p){
    return genIcon("thermometer-" + p);
}

function todoItemPriorityComponentColour(c){
    var p = c.getAttribute("priority");
    if(p > 3){
        c.classList.add("red")
    }else{
        c.classList.remove("red")
    }
    return(c)
}


function todoItemPriorityComponent(id, priority){
    priority = snapTo(priority, 0, 4)
    var component = document.createElement("span");
    component.appendChild(todoItemPriorityIcon(priority))
    component.setAttribute("priority", priority)

    component = todoItemPriorityComponentColour(component)
    component.classList.add("todoitempriority");
    component.setAttribute("id", id);
    
    component.setAttribute("onclick", "cycleItemPriority(this.id)");

    return(component)
}

function snapTo(value, mn, mx){
    if(value < mn){value = mn}
    if(value > mx){value = mx}
    return(value)
}

function cycleItemPriority(id){
    comp = document.getElementById(id)
    currp = parseInt(comp.getAttribute("priority"))
    var newp = (currp+1) % 5;
    comp.setAttribute("priority", newp)
    comp.replaceChild(todoItemPriorityIcon(newp), comp.childNodes[0])

    comp = todoItemPriorityComponentColour(comp)
    updateItemPriority(id.split("-")[1], newp)
}