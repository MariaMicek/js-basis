//ARRAYS
var myArray = [1,2,3,4,5];

console.log(myArray);

myArray.push(6);
myArray.unshift(0);

console.log(myArray);

myArray.pop();
myArray.shift();

console.log(myArray);


var myArray2 = [1,2,3,4,5,6,7,8,9,10];
console.log(myArray2.indexOf(9));   //8
console.log(myArray2.lastIndexOf(5));   //4


//OBJECTS
var myCar = {

    mark: 'Toyota',
    year: 2000,
    color: 'blue',
    drive: function(){
        console.log("Driving now")
    }
}

console.log(myCar.mark);
console.log(myCar.year);
console.log(myCar.color);
console.log(myCar.drive());


