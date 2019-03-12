var numbers = [];
for (var i = 0; i < 10; i++) {
  var myNumber = Math.round((Math.random() * 100) + 1);
  numbers.push(myNumber);
}

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("teraz od tyłu");

for (var i = 9; i >= 0; i--){
    console.log(numbers[i]);
}