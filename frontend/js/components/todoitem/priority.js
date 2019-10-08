function todoItemPriorityComponent(priority){
    if(priority < 0){priority = 0}
    if(priority > 4){priority = 4}
    var component = document.createElement("span");
    component.appendChild(genIcon("thermometer-" + priority))
    if(priority > 3){
        component.classList.add("red")
    }
    component.classList.add("todoitempriority");
    return(component)
}