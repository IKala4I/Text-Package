function findMostRepeatedLetter(text) {
    text = text.toLowerCase()

    text = text.replace(/[^a-z]/g, '')

    const letterCounts = {}

    for (const char of text) {
        if (char in letterCounts)
            letterCounts[char]++
        else
            letterCounts[char] = 1

    }

    let mostRepeatedLetter = ''
    let highestCount = 0

    for (const letter in letterCounts) {
        if (letterCounts[letter] > highestCount) {
            mostRepeatedLetter = letter
            highestCount = letterCounts[letter]
        }
    }

    return mostRepeatedLetter
}

module.exports = findMostRepeatedLetter