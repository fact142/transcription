const openSyllable = (syllable) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    if (vowels.includes(syllable.slice(-1))) return true
    return false
}
module.exports = openSyllable;