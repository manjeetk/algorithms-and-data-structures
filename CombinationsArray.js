
/* Generate all combinations of an array */

function arrayCombinations(arr) {
    if(arr.length === 0) return [[]];

    let firstElement = arr[0];
    let restElements = arr.slice(1);

    let combinationsWithoutFirstElement = arrayCombinations(restElements);
    let combinationsWithFirstElement = [];

    combinationsWithoutFirstElement.forEach(comb => {
        let combinationWithFirst = [...comb, firstElement];
        combinationsWithFirstElement.push(combinationWithFirst);

    }); 
    
    return [...combinationsWithoutFirstElement, ...combinationsWithFirstElement];
}

console.log(arrayCombinations(['A', 'B', 'C']));

