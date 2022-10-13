/* Add all numbers entered as function parameters */

// Method 1: for loop solution
function addAllNumbers() {
  var args = Array.prototype.slice.call(arguments);
  var total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(addAllNumbers(5,6,3,9)); //23
console.log(addAllNumbers(95,46,73,89,34)); //337

// Method 2: rest operator and reduce
function addAllNumbers2(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}

console.log(addAllNumbers2(23,45,67,88)) //223
console.log(addAllNumbers2(236,475,967,088,34,67,89)) //1956

