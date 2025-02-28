/**
 * জাভাস্ক্রিপ্ট লুপস (Loops) বিস্তারিত ব্যাখ্যা
জাভাস্ক্রিপ্টে লুপ (Loop) ব্যবহার করা হয় কোনো নির্দিষ্ট কাজ বারবার চালানোর জন্য। ধরুন, আপনাকে ১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করতে হবে, যদি আপনি আলাদা আলাদা console.log() ব্যবহার করেন, তাহলে সেটা সময়সাপেক্ষ এবং অদক্ষ হবে। এজন্য লুপ ব্যবহার করা হয়, যা স্বয়ংক্রিয়ভাবে নির্দিষ্ট শর্ত অনুযায়ী কোড এক্সিকিউট করতে পারে।

জাভাস্ক্রিপ্টে মূলত তিন ধরণের লুপ রয়েছে:

for লুপ
while লুপ
do-while লুপ
এছাড়াও for-in ও for-of লুপ রয়েছে, যা নির্দিষ্ট ধরণের অবজেক্ট বা অ্যারে ইটারেট করার জন্য ব্যবহৃত হয়। তবে এখানে আমরা মূল তিনটি লুপের বিস্তারিত ব্যাখ্যা করবো।

১. for লুপ
বেসিক স্ট্রাকচার:
javascript
Copy
Edit
for (initialization; condition; increment/decrement) {
    // Loop body (কোড যা বারবার চলবে)
}
কিভাবে কাজ করে?
initialization (শুরু করা) → প্রথম ধাপে একটি ভ্যারিয়েবল ডিক্লেয়ার ও ইনিশিয়ালাইজ করা হয়।
condition (শর্ত) → প্রতিবার লুপ চালানোর আগে এই শর্ত চেক করা হয়, যদি শর্ত সত্য হয় তাহলে লুপ চলবে, না হলে লুপ বন্ধ হবে।
increment/decrement (বৃদ্ধি বা হ্রাস) → প্রতি লুপের পর নির্দিষ্ট নিয়মে ভ্যারিয়েবলের মান পরিবর্তন হয়।
for লুপের একটি সাধারণ উদাহরণ:
javascript
Copy
Edit
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}
আউটপুট:

javascript
Copy
Edit
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
কিভাবে কাজ করছে?
প্রথম ধাপে i = 1 সেট করা হয়েছে।
শর্ত চেক → i <= 5 সত্য হলে লুপের ভিতরের কোড চলে।
লুপ চলার পর i++ হয়, মান বাড়তে থাকে।
যখন i = 6 হয়, শর্ত মিথ্যা হয়, তাই লুপ বন্ধ হয়ে যায়।
২. while লুপ
বেসিক স্ট্রাকচার:
javascript
Copy
Edit
initialization;  // ভ্যারিয়েবল ডিক্লেয়ার ও ইনিশিয়ালাইজ
while (condition) {
    // Loop body
    increment/decrement;
}
while লুপের কাজ করার ধাপ:
শুরুতে একটি ভ্যারিয়েবল ইনিশিয়ালাইজ করা হয়।
শর্ত চেক করা হয়, যদি সত্য হয় তাহলে লুপ চলবে।
লুপের শেষদিকে ভ্যারিয়েবলের মান পরিবর্তন করা হয়, না হলে লুপ অনন্তকাল (infinite loop) চলতে থাকবে।
while লুপের একটি সাধারণ উদাহরণ:
javascript
Copy
Edit
let i = 1;
while (i <= 5) {
    console.log("Number: " + i);
    i++;
}
আউটপুট:

javascript
Copy
Edit
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
কিভাবে কাজ করছে?
প্রথমে i = 1 সেট করা হয়েছে।
শর্ত চেক: i <= 5 সত্য হলে লুপ চলবে।
প্রতিবার i++ করা হবে, যতক্ষণ না i এর মান ৬ হয়।
i = 6 হলে condition মিথ্যা হয়, তাই লুপ বন্ধ হয়ে যায়।
৩. do-while লুপ
বেসিক স্ট্রাকচার:
javascript
Copy
Edit
initialization;
do {
    // Loop body
    increment/decrement;
} while (condition);
do-while লুপের বিশেষত্ব:
এই লুপ কমপক্ষে একবার অবশ্যই চলবে, কারণ শর্ত চেক করার আগেই লুপের কোড একবার রান হয়।
do-while লুপের একটি সাধারণ উদাহরণ:
javascript
Copy
Edit
let i = 1;
do {
    console.log("Number: " + i);
    i++;
} while (i <= 5);
আউটপুট:

javascript
Copy
Edit
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
কিভাবে কাজ করছে?
প্রথমে i = 1 সেট করা হয়েছে।
do ব্লকের ভিতরের কোড একবার চলবেই।
তারপর i++ হয়।
while অংশে গিয়ে শর্ত চেক হয়, যদি সত্য হয় তাহলে লুপ আবার চলবে।
i = 6 হলে শর্ত মিথ্যা হয়, তাই লুপ বন্ধ হয়।
🔥 for, while, ও do-while লুপের পার্থক্য 🔥
লুপের ধরন	কবে ব্যবহার করা হয়?	প্রধান বৈশিষ্ট্য
for loop	যখন লুপের শুরু ও শেষ নির্দিষ্ট থাকে	সাধারণত গণনা বা পুনরাবৃত্তির জন্য উপযুক্ত
while loop	যখন শর্ত নির্ভর করে চলবে	শর্ত না মিটলে লুপ চলবে না
do-while loop	যখন অন্তত একবার কোড চালানোর নিশ্চয়তা দরকার	শর্ত মিথ্যা হলেও একবার কোড রান হবে
🎯 for, while, ও do-while লুপের ব্যবহারিক উদাহরণ
✅ অ্যারেতে for লুপ ব্যবহার:
javascript
Copy
Edit
let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
আউটপুট:

Copy
Edit
10
20
30
40
50
✅ while লুপ দিয়ে ইউজার ইনপুট নেয়া:
javascript
Copy
Edit
let input;
while (input !== "exit") {
    input = prompt("Type 'exit' to stop:");
}
এটি ইউজারের ইনপুট নেয় যতক্ষণ না ইউজার exit টাইপ করে।

✅ do-while দিয়ে মেনু সিস্টেম:
javascript
Copy
Edit
let option;
do {
    option = prompt("1. Start\n2. Settings\n3. Exit\nChoose an option:");
} while (option !== "3");
এটি অন্তত একবার চলবে এবং ইউজার ৩ না দেয়া পর্যন্ত চলবে।

🎯 শেষ কথা
যদি নির্দিষ্ট সংখ্যকবার লুপ চালাতে চান ➝ for লুপ ব্যবহার করুন।
যদি শর্তের উপর নির্ভরশীল লুপ চান ➝ while লুপ ব্যবহার করুন।
যদি কমপক্ষে একবার লুপ চালানো প্রয়োজন ➝ do-while লুপ ব্যবহার করুন।
 */



//for loop

for (let i = 10; i < 100; i++) {

    const value = i
    console.log(value)

}

for (let i = 100; i < 1000; i++) {

    const value = i
    console.log(value)

}

for (let i = 2; i < 20 + 4; i++) {

    const value = i
    console.log(value)

}

let arrValue = [20, 30, 40, 50, 60, 70, 80, 900]

for (let i = 0; i < arrValue.length; i++) {

    const value = arrValue
    console.log(value[i])

}

//while

let v1 = 10;

while (v1 < 100) {

    const vv = v1
    console.log(vv)
    v1++

}

let i = 20;

while (i < 200) {

    const value = i
    console.log(value)
    i++

}

let x = [10, 20, 30, 40, 50, 60, 70, 80, 90]

while (i < x.length) {

    console.log(i)
    i++

}
