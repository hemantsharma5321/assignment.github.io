//Write a program to print all even numbers less than or equal to n (n is an input which we take using prompt).
var num=prompt("enter number");
var i=1;
while(i<=num){
    if(i%2==0){
        console.log(i);
    }
    i++;
}
