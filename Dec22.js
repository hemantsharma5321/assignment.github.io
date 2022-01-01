//Take three numbers and find max. //(Using arrays)
var arr = (prompt("enter your elements"));
arr = arr.split(',');                  //this splits string into an array 
console.log(arr);
var largest = 0; 
for(i=0;i<arr.length;i=i+1){
 if(arr[i]>largest){
    var largest = arr[i];
    
 }
}
 console.log("largest number is" + largest);
