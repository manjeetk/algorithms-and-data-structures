// Return the most common character from the string

function checkMaximumChars(str) {
    let newObj = {}
    let maxNum = 0
    let maxChar = ''
    str.toLowerCase().split('').forEach(char => {
        if(newObj[char]) {
            newObj[char]++
        } else {
            newObj[char] = 1
        }
    })
    console.log(newObj) // { d: 1, e: 3, v: 1, l: 1, o: 1, p: 1, m: 1, n: 1, t: 1 }

    for(let char in newObj) {
        if(newObj[char] > maxNum) {
            maxNum = newObj[char] 
            maxChar = char;
        }
    }

    return maxChar + " => " + maxNum; 
}

console.log(checkMaximumChars("Development")) // e => 3
