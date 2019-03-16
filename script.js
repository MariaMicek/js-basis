function sumTwoSmallestNums(arr) {
	var number = [];
    var sum;
	var position;
	var min;
	var min2;
	for (i = 0; i < arr.length; i++){
		
		if (arr[i] > 0){
			number.push(arr[i]);
		}		
	}
		min = Math.min(...number); 
		sum = min;					
		position = number.indexOf(min);	
		number.splice(position, 1);
		min2 = Math.min(...number);
		sum = sum + min2;
		return sum;
		
}

var arr = [-34,2,-9,-7,64,3,4,43,-5]

console.log(sumTwoSmallestNums(arr))