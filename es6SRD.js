


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


//problem solving section

//1️⃣ Spread Operator দিয়ে দুইটা Array merge করো

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const allArr = [...arr1, ...arr2]

console.log(allArr)

//2️⃣ Spread Operator দিয়ে একটি Object কপি করো এবং নতুন Property যোগ করো

const obj = { name: "apon", age: 23, }

const obj2 = { ...obj, profession: "software developer" }

const allObj = { ...obj2 }

console.log(allObj)

//3️⃣ Array Destructuring ব্যবহার করে নিচের মানগুলো আলাদা করো

const fruits = ["Apple", "Banana", "Mango"];

const [x, y, z] = fruits

console.log(x, y, z)

//4️⃣ Object Destructuring ব্যবহার করে নিচের অবজেক্ট থেকে মান বের করো

const student = {
    name: "Karim",
    age: 22,
    city: "Chattogram"
};

const { name, age, city } = student

console.log(name)

