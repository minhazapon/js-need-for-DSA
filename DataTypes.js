

// String & Number Basics

const value = "hello javaScript"
console.log(value)

//দুটি সংখ্যা যোগ করো: 5 + 10

const a = 5 + 10
console.log(a)

//দুটি সংখ্যা গুণ করো: 4 * 7

const x = 4 * 7
console.log(x)

//একটি সংখ্যা ইনপুট নিয়ে তার দ্বিগুণ করো।

const num = 20 * 2
console.log(num)

//একটি স্ট্রিং ইনপুট নিয়ে সেটার দৈর্ঘ্য (length) বের করো।

const names = "minhazul abedin apon"
console.log(names.length)

//একটি সংখ্যা ইনপুট নিয়ে সেটাকে স্ট্রিং-এ কনভার্ট করো।

const numZ = 100
const strNum = num.toString()
console.log(strNum)

//একটি স্ট্রিং ইনপুট নিয়ে সেটাকে বড় হাতের অক্ষরে (uppercase) কনভার্ট করো

const strN = "bangladesh"
const b = strN.toUpperCase()
console.log(b)

//একটি স্ট্রিং ইনপুট নিয়ে সেটার প্রথম অক্ষর বের করো।

const x1 = "javascript"
console.log(x1[0])

//একটি দশমিক সংখ্যা ইনপুট নিয়ে সেটাকে পূর্ণসংখ্যায় (integer) কনভার্ট করো।

const isNumber = 122.909
console.log(Math.floor(isNumber))

//একটি সংখ্যা ইনপুট নিয়ে সেটাকে ৫ দিয়ে ভাগ করো এবং ভাগফল দেখাও।

const five = 500
const isValue = five / 5
console.log(isValue)

//Boolean, Undefined & Nulls

//একটি বুলিয়ান ভেরিয়েবল তৈরি করো যেটা true হবে।

const isAponJSDEV = true
console.log(isAponJSDEV)

//একটি বুলিয়ান ভেরিয়েবল তৈরি করো যেটা false হবে।

const isPYDeV = false
console.log(isPYDeV)

//দুটি সংখ্যার মধ্যে তুলনা করে দেখাও কোনটা বড় (>, <)

const n1 = 200;
const n2 = 300;
const allN = n1 < n2
console.log(allN)

//একটি সংখ্যা ইনপুট নিয়ে দেখো সেটি জোড় (even) নাকি বিজোড় (odd)।

const nn = 800
const xx = (nn % 2 === 0 ? "even" : "ood")
console.log(xx)

//একটি স্ট্রিং ইনপুট নাও, যদি সেটি খালি (empty) হয় তবে true রিটার্ন করো, না হলে false।

const y = ""
const xy = (y.length === 0)
console.log(xy)

//একটি ভেরিয়েবলে undefined অ্যাসাইন করো এবং সেটি কনসোল-এ প্রিন্ট করো।

const isData = undefined
console.log(isData)

//একটি ভেরিয়েবলে null অ্যাসাইন করো এবং সেটি কনসোল-এ প্রিন্ট করো।

const isV = null
console.log(isV)



