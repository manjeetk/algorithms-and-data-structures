// Return the length longest word from a string

//Method 1 - using split(), map() and Math.max()
function longestWord1(str) {
    let words = str.split(' ')
    let lengths = words.map(word => word.length)
    return Math.max(...lengths)
}

console.log(longestWord1("This is a great"))


//Method 2 - using split(), sort() and length()
function longestWord2(str) {
    let words = str.split(' ')
    let sortedWords = words.sort( (a, b) => b.length - a.length)
    return sortedWords[0].length
}

console.log(longestWord2("This is a great"))


//Method 3 - using split(), for loop and length()
function longestWord3(str) {
    let words = str.split(' ')
    let longestWord = 0
    for(let i = 0; i < words.length; i++) {

      if(words[i].length > longestWord) {
         longestWord = words[i].length
       }
    }
    return longestWord;
}

console.log(longestWord3("This is a great"));


  
//Method 4 - using split(), reduce() and length()
  function longestWord4(str) {
    var longestWord = str.split(' ').reduce((longest, currentWord) => {
      return currentWord.length > longest.length ? currentWord : longest
    }, "")
    return longestWord.length
  }

  console.log(longestWord4("This is a great"));


//Method 5 - using split() and forEach() 
  function longestWord5(str) {
    var words = str.split(" ")
    var longest = 0;
    words.forEach(word  => {
      return  longest < word.length ? longest = word.length : ''
    });

    return longest;
}
console.log(longestWord5("This is a great"));
