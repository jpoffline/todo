function todoItemStatusIcon(status) {
    return genIcon(JOBSTATUS[status].icon)

}

function todoItemStatusComponent(id, status) {
    var component = document.createElement("span");
    component.setAttribute("id", id)
    component.classList.add(status)
    component.appendChild(todoItemStatusIcon(status))
    component.classList.add("todoitemstatus");

    component.setAttribute("onclick", "cycleItemStatus(this.id)");
    return (component)
}

function cycleItemStatus(id) {
    
    comp = document.getElementById(id)
    currentStatusList = comp.classList
    if (currentStatusList.contains("doing")) {
        crntStatus = "doing"
    } else if (currentStatusList.contains("done")) {
        crntStatus = "done"
    } else if (currentStatusList.contains("todo")) {
        crntStatus = "todo"
    }
    newStatus = JOBSTATUS[crntStatus].next
    var jid = id.split("-")[1]
    updateItemStatus(jid, newStatus);

    comp.replaceChild(todoItemStatusIcon(newStatus), comp.childNodes[0])
    comp.classList.remove(crntStatus)
    comp.classList.add(newStatus)
    

}