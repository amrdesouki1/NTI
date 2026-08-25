//Task -1
// for(var i =1; i>=10 ; i++  ){
//     console.log(i)
// }

// Task-2
// for(var i =2 ; i<=20 ; i+=2 ){
//     console.log(i)
// }

//Task-3
// let sum = 0;
// for(var i =1 ; i<=15 ; i++ ){
    
//     sum+=i
// }
// console.log(sum)

//Task-4
// var i = 1;
// while(i < 8){
//     console.log(i)
//     i++
// }

//Task-5 
// var i = 8;
// while(i >= 1){
//     console.log(i)
//     i--
// }

//Task-6
// let i=1;
// do{
//     console.log(i)
//     i++
// }while(i<=5)

//Task-8

// let userName = "Ali"
// let userAge = 22
// let isStudent = true
// console.log("User Name:", userName ,"Data Type:", typeof userName)
// console.log("User Age:", userAge, "Data Type:", typeof userAge)
// console.log("Is Student:", isStudent, "Data Type:", typeof isStudent)

//Task-9
// let dbPrice = 10;
// let inputPrice = "10";
// console.log(dbPrice == inputPrice) // true just check value
// console.log(dbPrice === inputPrice) // false check value and data type


//Task-10
// let userName = prompt("Enter your name: ");
// alert("Hello, " + userName );

//Task-11
// let numItems = prompt("Enter Number of items: ");
// console.log("Number of items:", Number(numItems), "Data Type:", typeof Number(numItems) );
// console.log("Number of items:", parseInt(numItems), "Data Type:", typeof parseInt(numItems) );
// console.log("Number of items:", +numItems, "Data Type:", typeof +numItems );

//Task-12
// let a = 10;
// let b = 3;
// console.log("Addition:", a + b)
// console.log("Subtraction:", a - b)
// console.log("Multiplication:", a * b)
// console.log("Division:", a / b)
// console.log("Modulus:", a % b)
// console.log("Expo:", a ** b)

//Task-13
// let age =prompt("Enter your age: ");
// if(age >= 18){
//     console.log("You can enter")
// }else{
//     console.log("Sorry, underage")
// }

//Task-14
// let degree = prompt("Enter your degree: ");
// if(degree >= 90){
//     console.log("A")
// }else if(degree >= 80){
//     console.log("B")
// }else if(degree >= 70){
//     console.log("C")
// }else{
//     console.log("F")
// }

//Task-15

// let age = Number(prompt("Enter your age: "));
// age >= 18 ? console.log("adult") : console.log("minor");

//Task-16
// let day = prompt("Enter a day of the week: ")
    
// switch(day){
//     case "monday":
//         console.log("It's Monday");
//         break;
//     case "tuesday":
//         console.log("It's Tuesday");
//         break;
//     case "wednesday":
//         console.log("It's Wednesday");
//         break;
//     case "thursday":
//         console.log("It's Thursday");
//         break;
//     case "friday":
//         console.log("It's Friday");
//         break;
//     case "saturday":
//         console.log("It's Saturday");
//         break;
//     case "sunday":
//         console.log("It's Sunday");
//         break;
//     default:
//         console.log("it's sunday");
// }

//Task-17
// let count = Number(prompt("Enter a number of pieces: "));
// for(let i = 1; i <= 10; i++){
//     console.log( count + " x " + i + " = " + (count * i) );
// }

//Task-18
// let num = Number(prompt("Enter a size of file : "));

//     if( num > 0 ){
//         for(let i = 1; i <= num; i++){
//             console.log(i);
//         }
//     }
//     else{
//         console.log(" Invalid file size");
//     }

//Task-19
// let orderId = Number(prompt("Enter your order ID: "));
// if (orderId % 2 === 0) {
//     console.log("express");
// } else {
//     console.log("normal");
// }

//Task-20

// let names = ["Ali", "Ahmed", "Ayesha", "Fatima", "Hassan"];
// for (let i = 0; i < names.length; i++) {
//     console.log("Student " + (i + 1) + ": " + names[i]);
// }

//Task-21
// let total = 0;
// for (let i = 1; i <= 5; i++) {
//     total += Number(prompt("Enter your money: "));
// }
// console.log("Total money:", total);
// console.log("Average money:", total / 5);


//Task-22
// let i = 1
// while (i <= 3) {
//     password = prompt("Enter your password: ")
//     if (password === "1234") {
//         console.log("password is correct");
//         break;
//     } else {
//         console.log("Incorrect password.");
//     }
//     i++;
// }

//Task-23
// hasAccount = true
// isVerified = false
// if (hasAccount && isVerified) {
//     console.log("Please sign up");
// } else if (hasAccount || isVerified) {
//     console.log("Please verify your account");
// } else if (!(hasAccount && isVerified)) {
//     console.log("Please sign up");
// }

//Task-24
// var a = 40;
// var b = 50;
// var c = 60; //remove quotation
// var d = 30;
// var e = 30;
// console.log(a + b + c + d + e);
// for(var i = 0; i <= 20; i++){
//     console.log(i);
// }


//Task-25
// let n = prompt("Enter a number:");
// if (n < 0) {
//     alert("Error: negative number");
// } else {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }
//     console.log(fact);
//     alert(fact);
// }
