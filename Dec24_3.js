//perfect square or not

var num=prompt("enter number");

var i=1;

var sq=false;

while(i*i<=num){

    if(i*i==num){

        sq=true;

        break;

    }

    i++;

}

if(sq==true){

    console.log("perfect square");

}

else{

    console.log("not aperfect square");

}

