function myBlend(arr) {
    arr.sort(function (a, b) {
        let mix = Math.random()
        return mix > 0.5 ? 1 : -1
    })
    return arr
}

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(myBlend(testArray))


///////////////////////////////////////////////


const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};


function findValueByKey(companyName) {
    if (company.name === companyName) {
        return company
    }

    if (!company.clients) {
        return null
    }

    let box = company.clients

    while (box.length > 0) {
        const nextCompany = box.pop()

        if (nextCompany.name === companyName) {
            return nextCompany
        }

        if (nextCompany.partners && nextCompany.partners.length > 0) {
            box = box.concat(nextCompany.partners)
        }
    }

    return null
}

const result = findValueByKey('Клієнт 1.2')
console.log(result)

