function f(x) {
    
    return 2 * x + 1;
}

console.log(f(3) * 10);
console.log(f(16));
console.log(f(41));

var newValue = f(16) * 10;
console.log(newValue);

var newValue2 = f(f(14)) * f(6);
console.log(f(newValue2));

function g(a, b, x) {
    return a * x + b;
}

console.log(g(2, 3, 5));

var c = 2;
var d = 1;
function h(x) {

    return c * x + d;
}

console.log(h(3))

