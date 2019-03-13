//FUNCTIONS
const myFunction = (a,b) => a + b;
console.log('1 + 2 = ' + myFunction(1,2));

let myFunction2 = (a,b) => a + b;
console.log('2 + 3 = ' + myFunction2(2,3));


myFunction2 = (a,b) => {
    console.log(a);
    console.log(b);
    return (a + b);
}
console.log('3 + 4 ' + myFunction2(3,4));

//function sum1
var sum1 = function (a,b) {
    return a + b;
}
console.log('sum1 = ' + sum1(4,5))

//function sum2
var sum2 = (a,b) => a + b
console.log('sum2 = ' + sum2(6,7))

//function sum3
function sum3 (a,b) {
    var sum = a + b;
    return sum
}
console.log('sum3 = ' + sum3(8,9))

//local and global functions
console.log('local = ' + sum) //in sum3

var sum = 20;
console.log('global = ' + sum)

function sum4 (a,b) {
    return sum + a + b;
}
console.log('sum4 = ' + sum4(10,5))


//INNER FUNCTIONS
function addSquares (a,b) {

    function square(x){
        return x * x;
    }

    return square(a) + square(b);
}
console.log('addSquares = ' + addSquares(2,3));


var addSquares2 = (a,b) => {
   
    var square = x => x * x;
    return square(a) + square(b);
}
console.log('addSquares2 = ' + addSquares2(2,3));

// RECURSIVE FUNCTIONS
function loop(x) {

    console.log(x);
    if (x >= 10) {   //if the condition is true, function stops and returns value
        return
    }
    loop (x + 1);
}
console.log(loop(1))


const loop1 = x => {

    console.log(x);
    if (x >= 10) { 
        return
    }
    loop1 (x + 1);
}
console.log(loop1(1));


function loop2(a,b) {

    console.log(a + b);
    if (a + b >= 20) {  //if a + b is greater than 20, function stops
        return
    }
    loop2 (a + 1, a + 1)
}
console.log(loop2(2,3))


