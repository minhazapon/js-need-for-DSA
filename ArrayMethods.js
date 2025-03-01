


//push

const value = [1, 2, 3, 4, 5, 6, 7, 8]

const pushValue = value.push(10)

console.log(pushValue)

//pop

const popValue = ["apon", "shemanto", "alamin", "limon", "munna"]

const pValue = popValue.pop();

console.log(pValue)

// 3. shift()
// ➡️ এটি একটি অ্যারের প্রথম এলিমেন্ট সরিয়ে ফেলে এবং সেটি রিটার্ন করে।

const sValue = [22, 3445, 45, 5, 5656]

sValue.shift();

console.log(sValue)

// 4. unshift()
// ➡️ এটি অ্যারের শুরুতে নতুন এলিমেন্ট যোগ করে।

const unValue = [10, 234, 4, 5, 6, 667, 67335]

unValue.unshift(1000000);

console.log(unValue)

// 5. splice(startIndex, deleteCount, newElements...)
// ➡️ এটি নির্দিষ্ট ইনডেক্স থেকে এলিমেন্ট মুছে ফেলা বা নতুন এলিমেন্ট যোগ করার জন্য ব্যবহৃত হয়।

const valueSplice = [1, 2, 3, 4, 5566]

valueSplice.splice(2, 1, 20000)

console.log(valueSplice)

// 6. slice(startIndex, endIndex)
// ➡️ এটি নির্দিষ্ট অংশ কপি করে নতুন অ্যারে রিটার্ন করে, তবে মূল অ্যারে পরিবর্তন হয় না।

const Vlice = [200, 300, 400, 500]

const vv = Vlice.slice(0, 2)

console.log(vv)

// 7. map(callback)
// ➡️ এটি প্রতিটি এলিমেন্টের উপর একটি ফাংশন প্রয়োগ করে এবং একটি নতুন অ্যারে তৈরি করে।

const mapValue = [1, 2, 3, 4, 5, 6, 7, 8]

const allValue = mapValue.map(nums => nums * 2)

console.log(allValue)

// 8. filter(callback)
// ➡️ এটি নির্দিষ্ট শর্ত অনুযায়ী এলিমেন্ট ফিল্টার করে নতুন অ্যারে তৈরি করে।

const allFilter = [234, 5, 56, , 4, 54, 56, 456, 6]

const FilterValue = allFilter.filter(num => num / 4 > 10)

console.log(FilterValue)

// 9. reduce(callback, initialValue)
// ➡️ এটি একটি অ্যারের সব এলিমেন্ট একসাথে যোগ বা প্রসেস করে একটি মান রিটার্ন করে।

const NumReduce = [2200, 3000, 4000]

const alRe = NumReduce.reduce((acc, re) => acc + re, 0)

console.log(alRe)

