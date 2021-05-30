const firstLetters = (word, numOfLetters) => {
    let result = '';
    for (let i = 0; i < numOfLetters; i++){
        result += word.charAt(i)
    }
    return result
}
module.exports = firstLetters;