function add(){
    var title=document.getElementById("title").value;
    var notes=document.getElementById("notes").value;
    if(title=="" || notes==""){
        document.getElementById("warn").style.visibility="visible";
        return
    }
    else{
    var heading=document.createElement("h1");
    var para=document.createElement("p");
    para.innerText=notes;
    heading.innerText=title;
    
    var list=document.getElementById("list");
    var item=document.createElement("div");
    item.appendChild(heading);
    item.appendChild(para);
    
    list.appendChild(item);
}
}