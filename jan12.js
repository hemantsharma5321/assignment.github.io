var lcount=0;
var dcount=0;
var L=document.getElementById("likep");
var d=document.getElementById("dislikep");

function likefn(){
    lcount=lcount+1;
    L.innerHTML=lcount;
}
function dislikefn(){
dcount++;
d.innerText=dcount;

}   
