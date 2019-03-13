var myArray = new Array(10);
for (var i = 0; i < myArray.length; i++) {

   var myNumber = Math.ceil(Math.random() * 100);
   myArray[i] = myNumber;
   console.log(myArray[i]);

}


var myArray3 = new Array(10);
for (var i = 0; i < myArray3.length; i++) {

    myArray3[i] = (i + 1)
}
console.log(myArray3);


//not working
// var myArray2 = new Array(10);
// for (var i = 0; i < myArray2.length; i++) {

//     myArray2.push(i + 1);
    
// }
// console.log(myArray2);
