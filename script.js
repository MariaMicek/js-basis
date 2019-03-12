var myArray = [1,2,3,4,5,6,7,8];
var newArray = myArray.slice(2,6);
console.log(newArray);

var array = [];
var numbersLength = 12

for(i = 0; i < numbersLength; i++){
    var myNumber = Math.round(Math.random() * 100);
    array.push(myNumber);
}

console.log(array);

var startIndex = numbersLength / 2 - 2;
var endIndex = numbersLength / 2 + 2;

var newArray = array.slice(startIndex, endIndex)

console.log(newArray)
