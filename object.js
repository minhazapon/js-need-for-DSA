

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

// 2️⃣ Object.values()
// 🔹 এটি একটি অবজেক্টের সব মান(property values) কে অ্যারে আকারে রিটার্ন করে।

const company1 = {

    c1: "toptal",
    c2: "microsoft",
    c3: "River Point"

}

console.log(Object.values(company1))

// 3️⃣ Object.entries()
// 🔹 এটি একটি অবজেক্টের সব কী - মান জোড়া(key - value pairs) কে নেস্টেড অ্যারে আকারে রিটার্ন করে।

const information = {

    name: "Minhaz",
    name1: "javaScript",
    name2: "react.js",
    name3: "DSA",
    passionFor: "leet code"

}

console.log(Object.entries(information))
