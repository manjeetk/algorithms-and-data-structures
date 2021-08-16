
//Method 1 - using split(), reverse() and join()
function reverseStr1(str) {
    return str.split("").reverse().join('')
}
console.log(reverseStr1("hello"))


//Method 2- for loop from the start 
function reverseStr2(str) {
    const strArr = str.split('')
    let reverse = ''
    for(let i = 0 ; i <= strArr.length - 1 ; i ++)
    {
        reverse = strArr[i] + reverse
    }
    return reverse
}
console.log(reverseStr2("hello"))

//Method 3 - for loop from the end - fastest way
function reverseStr3(str) {
    const strArr = str.split('')
    let  reverse = ''
    for(let i = strArr.length - 1 ; i >= 0 ; i--) {
        reverse += strArr[i]
    }
    return reverse;
}
console.log(reverseStr3("hello"))

//Method 4  - ES6 spread operator
function reverseStr4(str) {
   return [...str].reverse().join('')

}
console.log(reverseStr4("hello"))


//Method 5 
function reverseStr5(str) {
    return Array.from(str).reverse().join('')
 }
 console.log(reverseStr5("hello"))

 
//Method 6 - higher order function reduce()
function reverseStr6 (str) {
    return str.split('').reduce((reverse, char) => char + reverse, '')
}
console.log(reverseStr6("hello"))

//Method 7 - using forEach
function reverseStr7 (str) {
    let reverseStr = ''
    str.split('').forEach(char => {
        reverseStr = char + reverseStr
    })
    return reverseStr;
}
console.log(reverseStr7("hello"))


//Method 8 - using for of loop
function reverseStr8 (str) {
    let reverseStr = ''
    for(let char of str) {
        reverseStr = char + reverseStr
    }
    return reverseStr;
}
console.log(reverseStr8("hello"))