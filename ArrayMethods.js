


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

