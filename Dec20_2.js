//Write a program to have 3 variables (all three are number) and output the highest/greatest/maximum of all three.

 a=parseInt(prompt("enter 1st no"));

var b=parseInt(prompt("enter 2nd no"));

var c=parseInt(prompt("enter 3rd no"));

if(a>b && a>c){

    console.log(a + " is maximum");

}

else if(b>a && b>c){

    console.log(b + " is maximum");

}

else{

    console.log(c + " is maximum");

}
