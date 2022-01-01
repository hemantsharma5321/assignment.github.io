//Write a program to take an input from the user (num) and check whether it is a prime number or not.
var num=prompt("enter number");
var count=0;
for(var i=2;i<=num/2;i++){
    if(num%i==0){
        count++;
        break;
    }
    
}
    if (count==0){
        console.log("prime");
    }
    else{
        console.log("not prime");
    }
    
