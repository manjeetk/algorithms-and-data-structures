// Return true if two strings are anagram

/* Convert input string to lowercase
* Make array of the string with split()
* Sort the array alphabetically
* Now join the sorted array into a string using join()
*/


function anargam(str1, str2){
    if(str1.length !== str2.length) {
      return false
    }
    return str1.toLowerCase().split("").sort().join("") === 
    str2.toLowerCase().split("").sort().join("")
}

console.log(anargam("Listen", "Silent")) //true
console.log(anargam("Hello", "Bye")) //false
