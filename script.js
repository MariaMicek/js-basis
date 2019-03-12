//tworzenie tablicy z milionem jedynek

// var numbers = [];
// for (var i = 0; i < 10000; i++){
//     numbers.push(1);
// }

var numbers = [];
for (var i = 0; i < 10000; i++){
    numbers[i] = 1;
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