
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