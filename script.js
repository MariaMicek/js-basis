// Make a variable, then make ternary operator that RETURNS: 1 if variable is equal to 1
// 2 if variable is equal to "1"
// that variable if if variable is equal to 2
// 0 in other case
// Console.log what was returned.

var number = 39;
var result = [1, 2, number, 0]

var numberCheck = (number === 1) ? result[0] :
                  (number === '1') ? result[1] : 
                  (number === 2 ) ? result[2] : 
                  result[3] 

console.log(numberCheck)