/* Even and odd numbers sum from an array */

/* Input an array as an argument to evenOddSums function and 
display sum or even and odd numbers */

function evenOddSums(arr) {
    let evenSum = 0;
    let oddSum = 0;
    arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));
    return [evenSum, oddSum];
  }

  console.log(evenOddSums([20, 30, 11, 23, 40])) // [90, 34]