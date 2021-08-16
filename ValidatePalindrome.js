/* Validate a palindrome
* A palindrome is a word, number, phrase, or other sequence of characters
* which reads the same backward as forward, such as madam or racecar.
* Return True if it''s a palindrome and False if not palindrome
*/


//Check if a string is palindrome 
function isStringPalindrome(str) {
    const reverseStr = str.split('').reverse().join('')
    if(str === reverseStr) {
         return true
    } else {
        return false
    } 
}

console.log(isStringPalindrome("racecar")) //true
console.log(isStringPalindrome("hello"))  //false
console.log(isStringPalindrome("madam")) //true


//Check if a number is palindrome 
function isIntegerPalindrome(num) {
    const reverseStr = num.toString().split('').reverse().join('')
    const reverseInt = parseInt(reverseStr) * Math.sign(num)

    if(reverseInt === num) {
        return true
    } else {
        return false
    } 
}

console.log(isIntegerPalindrome(121)); //true
console.log(isIntegerPalindrome(125)); //false
console.log(isIntegerPalindrome(345)); //false
