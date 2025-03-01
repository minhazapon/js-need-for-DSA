

const aponInformation = {

    name: "minhazul abedin apon",
    age: 23,
    number: 1950374409,
    profession: "software developer",
    country: "bangladesh",
    district: "jhenaidah",
    location: "jhenaidah sadar",
    company: ` microsoft google toptal `

}

const { name, age, number, profession, country, district, location, company } = aponInformation

console.log(name, age, number, profession, country, district, location, company)


// //1️⃣ Object.keys()
// 🔹 এটি একটি অবজেক্টের সব কী(property names) কে অ্যারে আকারে রিটার্ন করে।

const allInfo = {

    skill: "js",
    skill1: "ts",
    skill2: "react.js",
    skill3: "DSA"

}

console.log(Object.keys(allInfo))
