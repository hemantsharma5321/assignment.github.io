//Take three numbers and find min. //(Using arrays)
var a=parseInt(prompt("enter 1st no"));
var b=parseInt(prompt("enter 2nd no"));
var c=parseInt(prompt("enter 3rd no"));

if(a<b && a<c){
    console.log(a + " is minimum");
}
else if(b<a && b<c){
    console.log(b + " is minimum");
}
else{
    console.log(c + " is minimum");
}
