function todoItemStatusIcon(status) {
    if (status == "done") {
        return (genIcon("check-square"))
    } else if (status == "todo") {
        return (genIcon("square"))
    } else if (status == "doing") {
        return (genIcon("spinner"))
    }
    return (status)
}

function todoItemStatusComponent(id, status) {
    var component = document.createElement("span");
    component.setAttribute("id", id)
    component.classList.add(status)
    component.appendChild(todoItemStatusIcon(status))
    component.classList.add("todoitemstatus");

    component.setAttribute("onclick", "cycleItemStatus(this.id)")
    return (component)
}

function cycleItemStatus(id) {

    comp = document.getElementById(id)
    currentStatusList = comp.classList
    if (currentStatusList.contains("doing")) {
        crntStatus = "doing"
        newStatus = "done"
    } else if (currentStatusList.contains("done")) {
        crntStatus = "done"
        newStatus = "todo"
    } else if (currentStatusList.contains("todo")) {
        crntStatus = "todo"
        newStatus = "doing"
    }

    comp.replaceChild(todoItemStatusIcon(newStatus), comp.childNodes[0])
    comp.classList.remove(crntStatus)
    comp.classList.add(newStatus)

}