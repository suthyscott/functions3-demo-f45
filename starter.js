////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = [
    "biLbO BaGGINs",
    "leGOlAs",
    "Frodo bAGGINS",
    "sAMwiSe GamGEe",
    "gAndALF tHe GREY"
]

// lowerCamelCase
// UpperCamelCase

const copyStrToCamelCase = str => {
    const splitStr = str.split(" ")
    let camelCaseStr = ""
    // console.log(splitStr)
    for (let x = 0; x < splitStr.length; x++) {
        let word = splitStr[x]

        word = word.toLowerCase()
        if (x !== 0) {
            word = word.charAt(0).toUpperCase() + word.slice(1)
        }
        console.log(word)

        camelCaseStr += word
    }
    return camelCaseStr
}

const copyStrToSnakeCase = str => {
    str = str.toLowerCase()
    const splitStr = str.split(" ")
    const snakeCaseStr = splitStr.join("_")
    return snakeCaseStr
}

const copyArrAndChange = (arr, cb) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = cb(arr[i])
        result.push(newValue)
    }
    return result
}

const multiplyByFour = num => num * 4

const nums = [0, 1, 2, 3, 4]
// console.log(copyArrAndChange(nums, multiplyByFour))

const newNums = nums.map(multiplyByFour)

// console.log(newNums)

////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////

//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ["red", "blue", "yellow", "green", "orange"]

// const mappedColors = colors.map((color) => {
//     return 'pink'
// })

const mappedColors = colors.map(() => "pink")
// console.log(mappedColors)
/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ["Bernard", "Elizabeth", "Conrad", "Mary Margaret"]

const formalGreeting = names => {
    // let greetedNames = names.map(name => {
    //     return 'Hello, ' + name
    // })
    // return greetedNames

    return names.map(name => `Hello, ${name}`)
}

// Call formalGreeting passing in the formalNames array

// console.log(formalGreeting(formalNames))
//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = [
    "Binghampton",
    "Albany",
    "New York",
    "Ithaca",
    "Auburn",
    "Rochester",
    "Buffalo"
]

// const placesThatStartWithA = places.filter(place => {
//     return place.toLowerCase().startsWith('a')
// })

const placesThatStartWithA = places.filter(place =>
    place.toLowerCase().startsWith("a")
)

// console.log(placesThatStartWithA)
/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
    { receptionist: "James" },
    { programmer: "Steve" },
    { designer: "Alicia" }
]

// Do not edit the code above.

// const identifier = (arr) => {
//     const filteredArr = arr.filter(person => {
//         return person.programmer
//     })

//     return filteredArr[0]
// }

const identifier = arr => arr.filter(person => person.programmer)[0]

// call the function passing in the jobs array
// console.log(identifier(jobs))

//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    const product = numbers.reduce((acc, num) => {
        return acc * num
    })
    return product
}

// const productOfArray = nums => nums.reduce((acc, num) => acc * num)

// console.log(productOfArray(numsToReduce))

// call productOfArray passing in numsToReduce

/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: "rent",
        amount: 1000
    },
    {
        title: "car payment",
        amount: 250
    },
    {
        title: "food",
        amount: 300
    }
]

// const remaining = expenses.reduce((acc, item) => {
//     return acc - item.amount
// }, budget)

const remaining = expenses.reduce((acc, item) => acc - item.amount, budget)

console.log(remaining)
