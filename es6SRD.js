


//1️⃣ Spread Operator (...)

const values = [1, 2, 3, 4, 5, 6, 7]

const allValues = [...values, 50, 1000]

console.log(allValues)

const A = { name: "zzz", age: 50 }

const B = { ...A, location: 'jhenaidah' }

console.log(B)

//2️⃣ Destructuring

const names = ["apon", "minhaz", "alamin", "limon", "munna"]

const [a, b, c, d, e] = names

console.log(a, b)

//Rest Parameters (...)

function restValue(...nameZ) {

    console.log(` all Name is ${nameZ} `)

}

console.log("apon", "shemanto", "alamin")