var myString = "Hello";
var myNumber = 16;
var myBoolean = true;
var myArray = ["Marysia", 38, false];
var myObject = {a: "hello", b: "world", c: 21};

console.log(myString, myNumber, myBoolean);
console.log(myArray);
console.log(myObject);

console.log(typeof myString);
console.error(typeof myNumber);
console.warn(typeof myBoolean);
console.info(typeof myArray);
console.debug(typeof myObject);

var a = 5;
a += 6;
console.log(a);

var b = 2;
b += b // b = b + b
b -+ b // b = b - b

var c = 2;
console.log(c--);   // c - 1 --> 2 najpierw wyświetla, potem odejmuje
console.log(c);     // c = 1
console.log(--c);   // c - 1 --> 0  najpierw odejmuje, potem wyświetla
console.log(c);     // c = 0

//Unary plus

+ 3     // 3
+ '3'   // 3
+ true  // 1
+ false // 0
+ null  // 0
+ {}    // NaN

var j = 5;
var k = '5';
console.log(j == k);
console.log(j === k);
console.log(j != k);
console.log(j !== k);

console.log(!(j == k));  //false
console.log(j == !k);   //false
console.log(!j == k);   //false
console.log(!j == !k);  //true