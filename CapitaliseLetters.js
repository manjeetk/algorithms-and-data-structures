/* Capitalise the first letter of every work of a sentence */

//Using for loop
function capitaliseLetters(str) {
    const strArr = str.toLowerCase().split(' ')
    for(let i = 0 ; i < strArr.length; i++)  {
        strArr[i] = strArr[i].substr(0,1).toUpperCase() + 
                    strArr[i].substr(1) 
    }
    return strArr.join(' ');
}

console.log(capitaliseLetters("this is a great exercise")) //This Is A Great Exercise!

//Using map()
function capitaliseLettersMap(str) {
    return str.toLowerCase()
            .split(' ')
            .map( word => word[0].toUpperCase() + word.substr(1))
            .join(' ')          
}

console.log(capitaliseLettersMap("this is a great exercise")) //This Is A Great Exercise!
