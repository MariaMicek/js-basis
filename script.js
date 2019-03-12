//do while
var i = 5;

do {
    i += 1;
    console.log(i);
} while (i < 5); 


//10 random numbers, not the same
var numbers = [];

while (numbers.length < 10){
    var myNumber = Math.round((Math.random() * 100) + 1);
    
    var found = false;
    for (var i = 1; i < numbers.length; i++){
        if (myNumber == numbers[i]){
            found = true;
        }
    }

    if(!found) {
        numbers.push(myNumber);
        console.log(myNumber)
    }

}

//version 2
numbers = [];

while (numbers.length < 10){
    var myNumber = Math.round((Math.random() * 100) + 1);
    
    if (!(myNumber in numbers)) {
        numbers.push(myNumber);
        console.log(myNumber)
    }
}