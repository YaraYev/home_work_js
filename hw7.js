
let alien = {
    egg: "A bit scary!",
    faceHug: "Dangerous!",
    xenoMorph: "Horror!",
    xenoMorphWar: "Absolutely horror!",
    queen: "EPIC FATALITY!",
    getInfo: function () {
        for (let i in this) {
            if (typeof this[i] !== "function") {
                console.log(i, ":", this[i])
            }
        }
    }
}

alien.hero = "Ripley is alien slayer!"

alien.getInfo()

////////////////////////////////////////////////////////

let services = {
    haircut: "60 UAH",
    shaving: "80 UAH",
    washingHair: "100 UAH",
    price: function () {
        let sum = 0
        for (let i in this) {
            if (typeof this[i] !== "function") {
                let b = Number.parseInt(this[i])
                sum += b
            }
        }
        return sum
    },
    minPrice: function () {
        let minValue
        for (let i in this) {
            if (typeof this[i] !== "function") {
                let b = Number.parseInt(this[i])
                if (minValue === undefined || minValue > b) {
                    minValue = b
                }
            }
        }
        return minValue
    },
    maxPrice: function () {
        let maxValue
        for (let i in this) {
            if (typeof this[i] !== "function") {
                let b = Number.parseInt(this[i])
                if (maxValue === undefined || maxValue < b) {
                    maxValue = b
                }
            }
        }
        return maxValue
    }
}

services["breakingGlass"] = "200 UAH"

console.log("Total cost of provided services:", services.price(), "UAH")
console.log("Minimal price in service:", services.minPrice(), "UAH")
console.log("Max price in service:", services.maxPrice(), "UAH")

