//continue and break
var numbers = [];

while (numbers.length < 10){

    var myNumber = Math.round((Math.random() * 100) + 1);

    if (!numbers.includes(myNumber)) {
        if (myNumber > 20){
        continue
        // break
    }

        numbers.push(myNumber);
        console.log(myNumber);
    }
}
