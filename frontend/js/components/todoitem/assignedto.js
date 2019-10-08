
function todoItemAssignedToComponent(assignedto){
    var component = document.createElement("span");
    component.appendChild(todoItemAssignedToIconComponent(assignedto.charAt(0).toUpperCase(), toRGB(assignedto)))
    component.classList.add("todoitemassignedto");
    return (component)
}

function todoItemAssignedToIconComponent(letter, colour){
    var component = document.createElement("span");
    component.innerHTML = letter
    
    component.style.background = colour
    component.classList.add("assignedtobadge")
    return(component)
}