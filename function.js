
//একটি সাধারণ ফাংশন লিখো যা দুটি সংখ্যার যোগফল প্রদান করবে।


function plus(a, b) {

    const value = a + b
    console.log(value)

}

plus(5, 10)

//একটি অ্যারো ফাংশন লিখো যা দুটি সংখ্যার গুণফল প্রদান করবে।

const arrF = (x, y) => {

    const arwValue = x * y
    console.log(arwValue)

}

arrF(10, 20)

//একটি অ্যারো ফাংশন লিখো যা একটি স্ট্রিং ইনপুট হিসেবে নিবে এবং সেই স্ট্রিংটির দৈর্ঘ্য ফেরত দেবে।


const valueL = (x) => {

    const value = x
    console.log(value)

}

valueL("bangladesh".length)

//একটি অ্যারো ফাংশন লিখো যা একটি অ্যারের প্রতিটি সংখ্যার বর্গফল (square) হিসাব করবে।

const valueMap = [1, 2, 3, 4, 5, 6, 7, 8]

const all = valueMap.map(value => value * value)

console.log(all[7])

//একটি সাধারণ ফাংশন তৈরি করো যা তিনটি সংখ্যার গড় (average) বের করবে।

const allNumber = (num1, num2, num3) => {

    const allNum = num1 + num2 + num3

    const numAvg = allNum / 3

    console.log(numAvg)

}

allNumber(20, 30, 40)

//একটি Higher Order Function তৈরি করো যা একটি অ্যারে থেকে যেসব সংখ্যা ১০ এর বেশি, সেগুলো বের করবে।


const valueZ = [10, 20, 30, 40, 50, 60, 70]

const v = valueZ.filter(num => num > 20)

console.log(v)

//একটি অ্যারো ফাংশন তৈরি করো যা দুটি সংখ্যা নেবে এবং যদি কোনো সংখ্যা না দেওয়া হয়, তাহলে ডিফল্ট মান হিসেবে ৫ নিবে।


const defaultValues = (a = 5, b = 10, c = 20) => {

    const all = a * b * c
    console.log(all)

}

defaultValues()