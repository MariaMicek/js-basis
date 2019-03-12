//tworzenie tablicy z dziesięcioma losowymi liczbami
var numbers = [];
for (var i = 0; i < 10; i++){
    var myNumber = Math.random() * 100 + 1;
    numbers.push(Math.round(myNumber))
}


//czas z jakim jest wykonywana pętla

console.time('in loop')

for (var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

console.timeEnd ('in loop')

console.time('before loop')

var length = numbers.length
for (var i = 0; i < length; i++){
    console.log(numbers[i]);
}

console.timeEnd ('before loop')