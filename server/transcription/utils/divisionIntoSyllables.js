
const divisionIntoSyllables = (word) => {
    const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi
    return word.match(syllableRegex)
}
module.exports = divisionIntoSyllables;