function isNaN(value) {
    if (value !== value) {
        return true
    } else {
        return false
    }
}

/////////////////////////////////////////////

function pad(string, char, size, bool) {
    const diffSize = size - string.length

    if (diffSize <= 0) {
        return string
    }

    let addChars = ''
    for (let i = 0; i < diffSize; i++) {
        addChars += char
    }

    return bool ? addChars + string : string + addChars
}

console.log(pad('qwerty', '*', 8, true))

/////////////////////////////////////////////

function checkProbabilityTheory(count) {
    let countPair = 0
    let countNotPair = 0

    for (let i = 0; i < count; i++) {
        let rnd = Math.round(Math.random() * 900) + 100

        if (rnd % 2 === 0) {
            countPair++
        } else {
            countNotPair++
        }
    }

    console.log('Generated numbers amount:', countPair + countNotPair)
    console.log('Count of even numbers:', countPair)
    console.log('Count of odd numbers:', countNotPair)

    let pairPerc = Math.round((countPair / count) * 100)
    let notPairPerc = Math.round((countNotPair / count) * 100)

    console.log('Percentage definition of even and odd:', pairPerc + '% of even,', notPairPerc + '% of odd')
}

checkProbabilityTheory(300)

