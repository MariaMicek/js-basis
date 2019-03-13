var arr = [18, 48, -539, 60, -428, 3561, -2];
var length = arr.length;
var newArray = [];
var y;
var sum = 0;

function getAbsSum() {

    for (var i = 0; i < length; i++){

        var x = arr[i];
        
        if (x < 0){
                    y = x  - x - x;
        } else {
                    y = x;
        }

        newArray.push(y);
        sum = sum + newArray[i]; 
    }
    return sum;
}

console.log(getAbsSum(arr))

