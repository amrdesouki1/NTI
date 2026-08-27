// Task 1 

// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020,
//     color: "white"
// };

// console.log(car);


//  Task 2 

// console.log(car.brand);
// console.log(car["year"]);


//   Task 3 

// car.color = "black";
// car.price = 500000;

// console.log(car);


//  Task 4 

// delete car.year;

// console.log(car.year);
// // undefined because year was deleted


// //  Task 5 

// let student = {
//     "student-name": "Sara",
//     age: 20
// };

// console.log(student["student-name"]);


// //  Task 6 

// let book = {
//     title: "JavaScript Basics",
//     author: {
//         firstName: "Ahmed",
//         lastName: "Ali"
//     }
// };

// console.log(book.author.lastName);


// //  Task 7 

// let person = {
//     name: "Ali",
//     age: 25,
//     city: "Cairo"
// };

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(person.hasOwnProperty("job"));


// //  Task 8 

// let settings = {
//     theme: "dark",
//     lang: "en"
// };

// Object.freeze(settings);

// settings.theme = "light";
// settings.fontSize = 16;

// console.log(settings);


// //  Task 9 

// let cities = ["Cairo", "Giza", "Alex", "Aswan", "Luxor"];

// console.log(cities);
// console.log(cities.length);


// //  Task 10 

// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[cities.length - 1]);


// //  Task 11 

// cities.push("Hurghada");
// console.log(cities);

// cities.unshift("Port Said");
// console.log(cities);


// //  Task 12 

// cities.pop();
// console.log(cities);

// cities.shift();
// console.log(cities);


// //  Task 13 

// let arr = ["HTML", "CSS", "JS", "React"];

// console.log(arr.indexOf("JS"));
// console.log(arr.includes("Python"));


// //  Task 14 

// let arr2 = ["pen", "book", "bag"];

// arr2.forEach(function(item, index) {
//     console.log(index, item);
// });


// //  Task 15 

// let colors = ["red", "green", "blue", "yellow"];

// for (let color of colors) {

//     if (color === "blue") {
//         break;
//     }

//     console.log(color);
// }


// //  Task 16 

// let arr3 = ["A", "B", "C"];

// arr3.push("D");
// arr3.push("E");

// arr3.shift();

// console.log(arr3);
// console.log(arr3.length);


// //  Task 17 

// let fruits = ["apple", "banana", "cherry"];

// let newFruits = fruits.map(function(item) {
//     return item.toUpperCase();
// });

// console.log(newFruits);
// console.log(fruits);


// //  Task 18 

// let nums = [10, 55, 30, 80, 45, 90];

// let result = nums.filter(function(num) {
//     return num > 50;
// });

// console.log(result);


// //  Task 19 

// let cities2 = ["Cairo", "Giza", "Alex", "Aswan"];

// let city = cities2.find(function(item) {
//     return item.startsWith("A");
// });

// let index = cities2.findIndex(function(item) {
//     return item.startsWith("A");
// });

// console.log(city);
// console.log(index);


// //  Task 20 

// let arr4 = ["a", "b", "c", "d", "e"];

// let copy = arr4.slice(1, 4);

// console.log(copy);
// console.log(arr4);


// //  Task 21 

// let arr5 = ["one", "two", "three", "four", "five"];

// let removed = arr5.splice(1, 2);

// console.log(removed);
// console.log(arr5);


// //  Task 22 

// let nums2 = [40, 100, 1, 5, 25];

// nums2.sort(function(a, b) {
//     return a - b;
// });

// console.log(nums2);


// //  Task 23 

// let ages = [16, 21, 17, 19];

// let some = ages.some(function(age) {
//     return age >= 18;
// });

// let every = ages.every(function(age) {
//     return age >= 18;
// });

// console.log(some);
// console.log(every);


// //  Task 24 

// let nums3 = [5, 10, 15, 20];

// let total = nums3.reduce(function(sum, num) {
//     return sum + num;
// }, 0);

// console.log(total);


// //  Task 25 

// let students = [
//     { name: "Omar", grade: 80 },
//     { name: "Mona", grade: 90 },
//     { name: "Ali", grade: 70 }
// ];

// for (let student of students) {
//     console.log(student.name, student.grade);
// }


// //  Task 26 

// let result2 = students.filter(function(student) {
//     return student.grade >= 80;
// });

// let names = result2.map(function(student) {
//     return student.name;
// });

// console.log(names);


// //  Task 27 

// let products = [
//     { name: "Pen", price: 10 },
//     { name: "Book", price: 50 },
//     { name: "Bag", price: 25 }
// ];

// let total2 = products.reduce(function(sum, product) {
//     return sum + product.price;
// }, 0);

// console.log(total2);


// //  Task 28 

// let arr6 = ["js", "html", "css", "js", "react", "js"];

// let count = 0;

// for (let item of arr6) {

//     if (item === "js") {
//         count++;
//     }

// }

// console.log(count);


// //  Task 29 

// let classroom = {
//     teacher: "Ahmed",
//     students: ["Omar", "Ali", "Mona", "Sara"]
// };

// console.log(classroom.teacher);
// console.log(classroom.students.length);
// console.log(classroom.students[classroom.students.length - 1]);


// //  Task 30 

// let products2 = [
//     { id: 1, title: "Pen", price: 10 },
//     { id: 2, title: "Book", price: 50 },
//     { id: 3, title: "Bag", price: 25 }
// ];

// let titles = products2.map(function(product) {
//     return product.title.toUpperCase();
// });

// let cheap = products2.filter(function(product) {
//     return product.price < 30;
// });

// let total3 = products2.reduce(function(sum, product) {
//     return sum + product.price;
// }, 0);

// console.log(titles);
// console.log(cheap);
// console.log(total3);