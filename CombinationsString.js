
/* Generate all combinations of a string */

//Method - 1, using for loop, push() and slice()
function stringCombinations1(str){
    let combinations = []
    for(let i = 0 ;i < str.length; i++) {
        for( let j = i + 1; j < str.length + 1; j++) {
            combinations.push(str.slice(i , j))
        }
    }
   return combinations
}
console.log(stringCombinations1('ABC'))


//Method - 2, using while loop, charAt(), push() and concat()
function stringCombinations2(str) {
    let strLength = str.length
    let result = []
    let currentIndex = 0

    while(currentIndex < strLength) {
      let char = str.charAt(currentIndex)
      let x
      let arrTemp = [char]
     
      for(x in result) {
            arrTemp.push("" + result[x] + char)
      }

      result = result.concat(arrTemp)
      currentIndex++
      
    }
 return result
}
console.log(stringCombinations2("DEF"))

//Method - 3, using push() and cancat()
function stringCombinations3(str){
    let tempArr = [];
    let resultArr = [];

    for(let i = 0; i < str.length; i++) {
      tempArr = [str[i]];
      let index = 0;
      
      while(resultArr[index]) {
        tempArr.push("" + resultArr[index] + str[i]);
        index++;
      }
      
      resultArr = resultArr.concat(tempArr);
    }
 return resultArr;
}
console.log(stringCombinations3("GHI"));
