var myArray = [1,2,3,4,5];

myArray.unshift(0);
myArray.push(6);

console.log(myArray);

var deletedZero = myArray.shift();
var deletedSix = myArray.pop();

console.log(myArray);
console.log(deletedZero, deletedSix);
