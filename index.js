const findTheMostRepeatedLetter = require('@kala4/letter-counter')
const fs = require('fs')

const path = process.argv[2]

if (path) {
    try {
        const text = fs.readFileSync(path, 'utf8')
        console.log(`Text:\n${text.slice(0, 50)}...\n`)
        const theMostRepeatedLetter = findTheMostRepeatedLetter(text)
        console.log(`The most repeated letter - ${theMostRepeatedLetter}`)
    } catch (err) {
        console.error(err)
    }
}
else{
    console.error('Invalid path to txt file')
}