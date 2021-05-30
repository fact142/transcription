const createSyllableArr = require('./utils/createSyllableArr.js')
const {twoLetterTranscription, threeLettersTranscription, fourLetterTranscription, oneLetterTranscription} = require('./transcriptionRules')
const firstLetter = require('./utils/firstLetters')

const consonantLetters = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
const vowelLetters = ['a', 'e', 'i', 'o', 'u', 'y']

const reduction = (num, wordObj) => {
    wordObj.word = wordObj.word.slice(num)
    for(let i = 0; i < num; i++){
        wordObj.syllableArr.shift()
    }
}

const transcriptionGenerator = (oldWord) => {
    let result = ''
    oldWord.word = oldWord.word.toLowerCase()
    while(oldWord.word !== ''){
        if(fourLetterTranscription(firstLetter(oldWord.word,    4))){
            result += fourLetterTranscription(firstLetter(oldWord.word, 4))
            reduction(4, oldWord)
            continue
        }
        if(threeLettersTranscription(firstLetter(oldWord.word, 3))){
            result += threeLettersTranscription(firstLetter(oldWord.word, 3))
            reduction(3, oldWord)
            console.log(result)
            console.log(word)
            continue
        }
        if(twoLetterTranscription(firstLetter(oldWord.word, 2))){
            result += twoLetterTranscription(firstLetter(oldWord.word, 2))
            reduction(2, oldWord)
            console.log(result)
            console.log(oldWord.word)
            continue
        }
        if (oneLetterTranscription(firstLetter(oldWord.word, 1) )){
            result += oneLetterTranscription(firstLetter(oldWord.word, 1))
            reduction(1, oldWord)
            console.log(result)
            console.log(oldWord.word)
            continue
        }
        console.log('err')
        break;
    }
    return result
}
const transcription = (reqword) => {
    const word = reqword;
    const syllableArr = createSyllableArr(word)
    const wordObj = {
        word: word,
        syllableArr: syllableArr
    }
    console.log(wordObj)
    return transcriptionGenerator(wordObj)
}

console.log(transcription('array'))
module.exports = transcription