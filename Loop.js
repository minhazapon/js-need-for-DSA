
// //for loop

// for (let i = 10; i < 100; i++) {

//     const value = i
//     console.log(value)

// }

// for (let i = 100; i < 1000; i++) {

//     const value = i
//     console.log(value)

// }

// for (let i = 2; i < 20 + 4; i++) {

//     const value = i
//     console.log(value)

// }

// let arrValue = [20, 30, 40, 50, 60, 70, 80, 900]

// for (let i = 0; i < arrValue.length; i++) {

//     const value = arrValue
//     console.log(value[i])

// }

// //while

// let v1 = 10;

// while (v1 < 100) {

//     const vv = v1
//     console.log(vv)
//     v1++

// }

// let i = 20;

// while (i < 200) {

//     const value = i
//     console.log(value)
//     i++

// }

//problem solving section

//📌 For Loop

//1️⃣ ১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করো।

for (let i = 1; i < 11; i++) {

    console.log(i)

}
//2️⃣ ১ থেকে ৫০ পর্যন্ত সংখ্যা প্রিন্ট করো।

for (let i = 1; i < 51; i++) {

    console.log(i)

}

//3️⃣ ১ থেকে ১০০ পর্যন্ত সংখ্যা প্রিন্ট করো।

for (let i = 1; i < 101; i++) {

    console.log(i)

}

//4️⃣ ১ থেকে ১০ পর্যন্ত সব সংখ্যা দ্বিগুণ করে প্রিন্ট করো।

for (let i = 1; i < 10; i++) {

    console.log(i * 2)

}

//5️⃣ ১ থেকে ১০ পর্যন্ত সংখ্যাগুলোর যোগফল বের করো।

let value = 0

for (let i = 1; i < 10; i++) {

    value += i
    console.log(value)

}

//6️⃣ ১ থেকে ৫ পর্যন্ত সংখ্যাগুলোর গুণফল বের করো।

let value1 = 1

for (let i = 1; i < 5; i++) {

    value1 *= i

}

console.log(value1)

//7️⃣ ২ দিয়ে ১০ বার গুণফল (মাল্টিপ্লিকেশন টেবিল) প্রিন্ট করো।


for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
}

//8️⃣ ৫ দিয়ে ১০ বার গুণফল প্রিন্ট করো।

for (let i = 1; i < 10; i++) {

    console.log(` 5 x ${i} = ${5 * i} `)

}

//9️⃣ ১ থেকে ২০ পর্যন্ত শুধুমাত্র জোড় সংখ্যা (even numbers) প্রিন্ট করো।

for (let i = 2; i < 20; i += 2) {

    console.log(i)

}

//🔟 ১ থেকে ২০ পর্যন্ত শুধুমাত্র বিজোড় সংখ্যা (odd numbers) প্রিন্ট করো।

for (let i = 3; i < 20; i += 2) {

    console.log(i)

}

//1️⃣1️⃣ একটি সংখ্যা ইনপুট নিয়ে, তার পর্যন্ত সংখ্যা প্রিন্ট করো।

for (let i = 20; i < 100; i++) {

    console.log(i)

}