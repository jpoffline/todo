function todoItemComponent(todoitem){
    var comp = document.createElement("div");
    comp.classList.add("todoitem");
    var compid = document.createElement("span");
    var comptitle = document.createElement("span");
    var compbody = document.createElement("span");
    comptitle.classList.add("todoitemtitle");
    compbody.classList.add("todoitembody");

    comptitle.innerHTML = todoitem.title;
    compbody.innerHTML = todoitem.body;
    compid.innerHTML = todoitem.id;
    comp.appendChild(compid);
    comp.appendChild(comptitle);
    comp.appendChild(compbody);
    return(comp)
}