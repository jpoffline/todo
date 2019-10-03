function todoItemStatusIcon( status){
    if(status == "done"){
        return(genIcon("check-square"))
    } else if(status == "todo"){
        return(genIcon("square"))
    } else if(status == "doing"){
        return(genIcon("spinner"))
    }
    return(status)
}

function todoItemStatusComponent(id, status){
    var component = document.createElement("span");
    component.setAttribute("id", id)
    component.classList.add(status)
    component.appendChild(todoItemStatusIcon(status))
    component.classList.add("todoitemstatus");
    
    component.setAttribute("onclick", "cycleItemStatus(this.id)")
    return(component)
}

function todoItemIdComponent(id){
    var compid = document.createElement("span");
    compid.innerHTML = id;
    return(compid)
}

function todoItemTitleComponent(title){
    var comp = document.createElement("span");
    comp.innerHTML = title;
    comp.classList.add("todoitemtitle")
    return(comp)
}

function todoItemBodyComponent(body){
    var compbody = document.createElement("span");
    compbody.innerHTML = body;
    compbody.classList.add("todoitembody");
    return(compbody)
}

function todoItemComponent(todoitem){
    var comp = document.createElement("div");
    comp.classList.add("todoitem");
    comp.setAttribute("id", "todo-" + todoitem.id)
    
    comp.appendChild(todoItemIdComponent(todoitem.id));
    comp.appendChild(todoItemStatusComponent("todo-" + todoitem.id + "-status", todoitem.status))
    comp.appendChild(todoItemTitleComponent(todoitem.title));
    comp.appendChild(todoItemBodyComponent(todoitem.body));
    
    return(comp)
}


function cycleItemStatus(id){
    
    comp = document.getElementById(id)
    currentStatusList = comp.classList
    if(currentStatusList.contains("doing")){
        crntStatus = "doing"
        newStatus = "done"
    } else if(currentStatusList.contains("done")){
        crntStatus = "done"
        newStatus = "todo"
    }else if(currentStatusList.contains("todo")){
        crntStatus = "todo"
        newStatus = "doing"
    }

    comp.replaceChild(todoItemStatusIcon(newStatus), comp.childNodes[0])
    comp.classList.remove(crntStatus)
    comp.classList.add(newStatus)

    console.log(comp)

    
}