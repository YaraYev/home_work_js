let input = prompt("Введіть число повних років:", "22")
let age = +input

if (age && age > 0) {

    let lastOne = age % 10
    let lastTwo = age % 100

    let year

    if (lastOne === 1 && lastTwo !== 11) {
        year = "рік"
    } else if ((lastOne === 2 && lastTwo !== 12) || (lastOne === 3 && lastTwo !== 13) || (lastOne === 4 && lastTwo !== 14)) {
        year = "роки"
    } else {
        year = "років"
    }

    console.log(age + " " + year)
} 
