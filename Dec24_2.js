//prime numbers upto n
var num = prompt("enter number");
    for(i=2;i<=num;i++){
    var count=0;
    for(j=2;j<i;j++) {
        if(i%j == 0){
            count++;
             break;
            
        }
        
    }
        if (count==0){
            console.log(i);
        }
    }
