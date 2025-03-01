

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

// 4️⃣ hasOwnProperty()
// 🔹 এটি চেক করে কোনো অবজেক্টে নির্দিষ্ট একটি property আছে কিনা।


const aponInformationZ = {

    name: "minhazul abedin apon",
    age: 23,
    number: 1950374409,
    profession: "software developer",
    country: "bangladesh",
    district: "jhenaidah",
    location: "jhenaidah sadar",
    company: ` microsoft google toptal `

}

console.log(aponInformationZ.hasOwnProperty("profession"))
console.log(aponInformationZ.hasOwnProperty("bangladesh"))


//problem solving section

//✅ Q1: অবজেক্টের সব কী বের করো

const student = {

    name: "Araf",
    age: 20,
    grade: "A"

};

console.log(Object.keys(student))

//✅ Q2: অবজেক্টের সব মান বের করো

const person = {

    firstName: "Mehedi",
    lastName: "Hasan",
    age: 22

};

console.log(Object.values(person))

//✅ Q3: অবজেক্ট থেকে কী-মান জোড়া বের করো

const book = {
    title: "JavaScript Guide",
    author: "John Doe",
    year: 2022
};

console.log(Object.entries(book))

//✅ Q4: অবজেক্টে নির্দিষ্ট প্রপার্টি আছে কিনা চেক করো

const user = {
    username: "rakib123",
    password: "abc123"
};

console.log(user.hasOwnProperty("username"))

//✅ Q5: অবজেক্টের মোট প্রপার্টি সংখ্যা বের করো

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "White"
};

console.log(Object.keys(car).length)

//✅ Q6: অবজেক্ট থেকে শুধুমাত্র স্ট্রিং টাইপের ভ্যালু বের করো

const info = {
    name: "Hasan",
    age: 30,
    city: "Dhaka",
    married: false
};

const InfoZ = Object.values(info).filter(value => typeof value === "string")

console.log(InfoZ[0], InfoZ[1])


