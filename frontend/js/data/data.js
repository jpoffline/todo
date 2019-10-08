function loadData(){
    return(SAMPLEDATA)
}

function saveData(data){
    SAMPLEDATA = data
}

function getItem(id){
    var d = loadData()
    for(var i = 0; i < d.items.length; i++){
        if(d.items[i].id == id){
            return(d.items[i])
        }
    }
}

