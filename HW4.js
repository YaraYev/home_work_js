let measure = "кг" // "год", "кг", "км"
let quantity = 3

switch (measure) {
    case "км":
        console.log(quantity + " км це " + (quantity * 1000) + " м.")
        break
    case "год":
        console.log(quantity + " год це " + (quantity * 60) + " хв.")
        break
    case "кг":
        console.log(quantity + " кг це " + (quantity * 1000) + " грм.")
        break
    default:
        console.log("Невірна одиниця вимірювання")
}