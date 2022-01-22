const matrixOne =
[ [4, 3, 2, 4],
[9, 1, 5, 6], 
[2, 7, 9, 8],
[8, 5, 2, 0] ];
var sum=0;
for (var i = 0; i < matrixOne.length; i++) {
    sum=sum+matrixOne[i][i];
}
console.log(sum);
write(sum);
