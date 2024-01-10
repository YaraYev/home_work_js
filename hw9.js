let reg = /^[^Aa]{6,}$/

////////////////////////////

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
]

let regMail = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com$/

function checker(item) {
    let check = regMail.test(item.email)
    return check
}

let newArr = arr.filter(checker)

console.log(newArr)

