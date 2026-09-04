// =========================
// Day 7 — ES6 Part 1
// =========================


// =========================
// Part A — "use strict"
// =========================

// Task 1
function test1() {
    x = 10;
}

test1();
console.log(x);
// Without strict mode, x becomes a global variable.


// Task 2
function test2() {
    "use strict";

    try {
        y = 20;
    } catch (error) {
        console.log(error.message);
    }
}

test2();


// Task 3
function test3() {
    "use strict";

    var localVar = "test";

    // try {
    //     delete localVar;
    // } catch (error) {
    //     console.log(error.message);
    // }

    let obj = {
        name: "Ali"
    };

    delete obj.name;

    console.log(obj);
}

test3();


// =========================
// Part B — Hoisting
// =========================

// Task 4

console.log(x);
var x = 10;
console.log(x);

// Output:
// undefined
// 10
// Because var declaration is hoisted, but the value is not.


// Task 5

// Case 1
sayHi();

function sayHi() {
    console.log("Hi");
}

// Output: Hi
// Function declarations are completely hoisted.


// Case 2
// sayBye();

// var sayBye = function () {
//     console.log("Bye");
// };

// If we call sayBye before the assignment,
// the value is undefined, so calling it gives:
// TypeError: sayBye is not a function


// Task 6

// console.log(a);
// let a = 5;

// Output:
// ReferenceError
//
// let is hoisted but stays in the Temporal Dead Zone
// until the declaration is reached.


// Task 7

var n = 1;

function demo() {
    console.log(n);

    var n = 2;

    console.log(n);
}

demo();
console.log(n);

// Output:
// undefined
// 2
// 1
//
// Because var n inside demo is function-scoped and hoisted.


// =========================
// Part C — var vs let vs const
// =========================

// Task 8

function testVar() {

    if (true) {
        var num = 10;
    }

    console.log(num);
}

testVar();

// var is function-scoped,
// so it can be accessed outside the if block.


// Task 9

function testLetConst() {

    if (true) {
        let a = 10;
        const b = 20;

        console.log(a);
        console.log(b);
    }

    // console.log(a); // Error
    // console.log(b); // Error
}

testLetConst();

// let and const are block-scoped.


// Task 10

var name1 = "Ali";
var name1 = "Omar";

console.log(name1);

// var allows re-declaration.

let name2 = "Ahmed";

// let name2 = "Mona";
// Error: Identifier 'name2' has already been declared.


// Task 11

const student = {
    name: "Ali",
    age: 20,
    city: "Cairo"
};

student.age = 21;
console.log(student);

student.grade = "A";
console.log(student);

delete student.city;
console.log(student);

try {
    student = {
        name: "Omar"
    };
} catch (error) {
    console.log(error.message);
}

// const prevents reassigning the whole object,
// but its properties can be changed.


// Task 12

const nums = [1, 2, 3];

nums.push(4);
console.log(nums);

nums[0] = 10;
console.log(nums);

try {
    nums = [5, 6, 7];
} catch (error) {
    console.log(error.message);
}

// push and changing indexes are allowed.
// Reassigning the whole array is not allowed.


// Task 13

var a;
// Valid

let b;
// Valid

// const c;
// Invalid because const must have a value when declared.

console.log(a);
console.log(b);


// Task 14
// Run this part in the browser console:

var g1 = "var global";
let g2 = "let global";
const g3 = "const global";

console.log(window.g1); // "var global"
console.log(window.g2); // undefined
console.log(window.g3); // undefined


// Task 15

const handlers = {};

for (let i = 0; i < 3; i++) {

    handlers["fn" + i] = function () {
        return "index: " + i;
    };

}

console.log(handlers.fn0());
console.log(handlers.fn2());

// Output:
// index: 0
// index: 2
//
// let creates a new i for every loop iteration.


// =========================
// Part D — Arrow Functions
// & Template Literals
// =========================

// Task 16

const welcome = (name) => `Welcome, ${name}!`;

console.log(welcome("Ali"));


// Task 17

const fullInfo = (first, last, age) =>
    `${first} ${last} is ${age} years old`;

console.log(fullInfo("Ali", "Hassan", 25));


// Task 18

const multiply = (a, b) => a * b;

console.log(multiply(5, 4));


const sum = (a, b) => {
    console.log(a);
    console.log(b);

    return a + b;
};

console.log(sum(10, 20));


// =========================
// Part E — Destructuring
// Default / Rest / Spread
// =========================

// Task 19

const product = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};

const { title, price, inStock } = product;

console.log(title);
console.log(price);
console.log(inStock);


// Task 20

const skills = ["HTML", "CSS", "JS", "React"];

const [first, second] = skills;

console.log(first);
console.log(second);


// Task 21

function greet(name = "Guest", message = "Hello") {
    return `${message}, ${name}!`;
}

console.log(greet("Ali", "Hi"));
console.log(greet("Ahmed"));
console.log(greet());


// Task 22

function sumAll(...numbers) {

    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));


// Task 23

// Merge arrays

const arr1 = [1, 2];
const arr2 = [3, 4, 5];

const merged = [...arr1, ...arr2];

console.log(merged);


// Copy array

const originalNums = [10, 20, 30];

const copyNums = [...originalNums];

copyNums.push(40);

console.log(originalNums);
console.log(copyNums);


// Task 24

const user = {
    name: "Sara",
    age: 22
};

const contact = {
    email: "sara@nti.com",
    age: 23
};

const result = {
    ...user,
    ...contact
};

console.log(result);

// age = 23
//
// Because the last property with the same name
// overwrites the previous one.


// Task 25

const values = [2, 4, 6, 8];

function total(a, b, c, d) {
    return a + b + c + d;
}

console.log(total(...values));

// Output: 20


// =========================
// Part F — Memory & Copying
// =========================

// Task 26

let person1 = {
    name: "Ali",
    child: {
        age: 5
    }
};

let person2 = person1;

person2.name = "Omar";

console.log(person1.name);

// Output:
// Omar
//
// person1 and person2 point to the same object in memory.


// Task 27

const original = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};

const copy = {
    ...original
};

copy.name = "Sara";
copy.details.city = "Alex";

console.log(original);
console.log(copy);

// name in original stays "Mona"
// because name is copied separately.
//
// details.city in original becomes "Alex"
// because the nested object is still shared.


// Task 28

const original2 = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};

const deepCopy = structuredClone(original2);

deepCopy.details.city = "Alex";

console.log(original2);
console.log(deepCopy);

// Original city is still "Cairo"
// because structuredClone creates a deep copy.


// Task 29

const userData = {
    name: "Ahmed",
    age: 26,
    city: "Alex"
};

localStorage.setItem("userdata", JSON.stringify(userData));

const savedData = localStorage.getItem("userdata");

const parsedData = JSON.parse(savedData);

console.log(typeof parsedData);
console.log(parsedData);

localStorage.removeItem("userdata");


// =========================
// Part G — Challenge Mix
// =========================

// Task 30

const APP_CONFIG = {
    name: "My App",
    version: "1.0",
    api: {
        baseUrl: "https://api.example.com",
        timeout: 5000
    },
    features: []
};

APP_CONFIG.api.timeout = 10000;

APP_CONFIG.features.push("Dark Mode");

console.log(APP_CONFIG);

try {
    APP_CONFIG = {};
} catch (error) {
    console.log(error.message);
}

// We can change properties inside a const object,
// but we cannot reassign the whole object.


// Task 31

function createCard(title, price = 0, ...tags) {

    return {
        title: title,
        price: price,
        tags: tags,
        label: `${title} - ${price} EGP`
    };
}

const card1 = createCard("Laptop", 15000, "Dell", "Tech");
const card2 = createCard("Mouse", 500, "Wireless", "Gaming");

console.log(card1);
console.log(card2);


// Task 32

const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];

for (let { name, grade } of students) {
    console.log(`${name} scored ${grade}`);
}
```
