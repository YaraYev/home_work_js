function drawTriangle(triangleHeight, char) {
    for (let i = 0; i < triangleHeight; i++) {
        let stars = ""
        for (let s = 0; s < i + 1; s++) {
            stars += char
        }
        console.log(stars)
    }
}

drawTriangle(5, "*")

/////////////////////////

function drawTriangle(triangleHeight, char) {
    let i = 0
    while (i < triangleHeight) {
        let stars = ''
        let s = 0
        while (s < i + 1) {
            stars += char
            s++
        }
        console.log(stars)
        i++
    }
}

drawTriangle(5, '*')

//////////////////////////

let sum = 0
for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        sum += i
    }
}

console.log(sum)

///////////////////////////

function pow(x, y) {
    let result = 1
    for (let i = 0; i < y; i++) {
        result *= x
    }

    return result
}

console.log(pow(2, 3))