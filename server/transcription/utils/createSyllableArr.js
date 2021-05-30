const divisionIntoSyllables = require('./divisionIntoSyllables.js');
const openSyllables = require('./openSyllable.js');
const createSyllableArr = (word) => {
    let resultArr = []
    let arr = divisionIntoSyllables(word)//['ja', 'va'],
    for(let i = 0; i < arr.length; i++){
        if (openSyllables(arr[i])){
            for(let j = 0; j <= arr[i].length - 1; j++){
                resultArr.push('1')
            }
        } else{
            for(let j = 0; j <= arr[i].length - 1; j++){
                resultArr.push('0')
            }
        }
    }
    return resultArr;
}

module.exports = createSyllableArr;