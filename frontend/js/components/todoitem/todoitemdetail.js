function todoItemDetail(item){
    var comp = document.createElement("div");
    var bodyinfo = document.createElement("div");
    var title = document.createElement("h3");
    title.innerHTML = item.title;
    bodyinfo.innerHTML = item.body;
    bodyinfo.classList.add("todoitembodydetail");
    var assignedto = document.createElement("div");
    assignedto.innerHTML = item.priority + " // assigned to: " + item.assignedto + " // added "+ item.added;
    comp.appendChild(title);
    comp.appendChild(bodyinfo);
    comp.appendChild(assignedto);
    return(comp);
}