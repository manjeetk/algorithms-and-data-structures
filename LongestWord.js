// Return the length longest word from a string and ignore punctuations

//Method 1 - using split(), map() and Math.max()
function longestWord1(str) {
    let words = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ")
    let lengths = words.map(word => word.length)
    return Math.max(...lengths)
}

console.log(longestWord1("This is a awesome"))


//Method 2 - using split(), sort() and length()
function longestWord2(str) {
    let words = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ")
    let sortedWords = words.sort( (a, b) => b.length - a.length)
    return sortedWords[0].length
}

console.log(longestWord2("This is a great"))


//Method 3 - using split(), for loop and length()
function longestWord3(str) {
    let words = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ")
    let longestWord = 0
    for(let i = 0; i < words.length; i++) {

      if(words[i].length > longestWord) {
         longestWord = words[i].length
       }
    }
    return longestWord;
}

console.log(longestWord3("This is a fanatstic"));


  
//Method 4 - using split(), reduce() and length()
  function longestWord4(str) {
    var longestWord = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ").reduce((longest, currentWord) => {
      return currentWord.length > longest.length ? currentWord : longest
    }, "")
    return longestWord.length
  }

  console.log(longestWord4("This is amazing "));


//Method 5 - using split() and forEach() 
  function longestWord5(str) {
    var words = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ")
    var longest = 0;
    words.forEach(word  => {
      return  longest < word.length ? longest = word.length : ''
    });

    return longest;
}
console.log(longestWord5("This is a inspiring"));

//Method 6 -
function longestWord6(str) { 
    let strArray = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ")
    let largestLength = 0
    for (let i= 0; i < strArray.length; i++) {
        if (strArray[i].length > largestLength) {
            largestLength = strArray[i].length
        }
    }
  return largestLength
}
   
console.log(longestWord6("This is a incredible"))


