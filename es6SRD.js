


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

//5️⃣ Rest Parameters ব্যবহার করে অসংখ্য সংখ্যার যোগফল বের করো


function sumAll(...all) {

    return all.reduce((acc, num) => acc + num, 0)

}

const numberValue = sumAll(10, 20, 2233, 455, 5, 45)
console.log(numberValue)

//6️⃣ Spread Operator দিয়ে একটি অ্যারে কপি করো এবং নতুন মান যোগ করো

const numbers = [10, 20, 30];
const an = [...numbers, 50, 60]
console.log(an)

//Object Destructuring ব্যবহার করে Default Value সেট করো

const user = { nameZZ: "Hasan" };

const { nameZZ, n = "bangladesh" } = user

console.log(nameZZ, n)

//9️⃣ Spread Operator দিয়ে দুইটা Object মিশিয়ে নতুন Object তৈরি করো

const obj1 = { a: 1, b: 2 };
const objs2 = { c: 3, d: 4 };
const objThree = { ...obj1, ...objs2 }
console.log(objThree)
