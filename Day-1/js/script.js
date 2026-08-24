// Task-1
// console.log("JS is running successfully")

// Task-2
// alert("Ready to practice!")

//Task-3
// let productName = "Laptop" 
// let price = 15000
// let isAvailable = true

// console.log(productName, "+" , typeof(productName))
// console.log(price, typeof(price))
// console.log(isAvailable , typeof(isAvailable))


//Task-4

// var mainTitle = document.getElementById("mainTitle")
// mainTitle.innerText = "Practice Time"
// console.log(mainTitle.innerText)

//Task-5

// city = "Cairo"
// country = "Egypt"
// console.log(city + ", " + country)

//Task-6

// let loca = `Location: ${city} - ${country}`;
// console.log(loca);


//Task-7

// let itemPrice = 120
// let quantity = 3

// let total = itemPrice * quantity
// let difference = 400 - total
// let division = total / quantity
// let remainder = total % quantity
// let power = quantity ** 2
// console.log(total)
// console.log(difference)
// console.log(division)
// console.log(remainder)
// console.log(power)

// Task-8

// var color =  prompt("what is yout favourite color ?")
// console.log("Your favorite color is " + color )

//Task-9
// score = 20 
// textScore = "20"
// console.log(score == textScore);   // true just compare values
// console.log(score === textScore);  // false differece data type

//Task-10

// var numofpieces = prompt("Enter the number of pieces ?")
// console.log(typeof(numofpieces))
// console.log(typeof(Number(numofpieces)))
// console.log(typeof(parseInt(numofpieces)))
// console.log(typeof(+numofpieces))

//Task-11

// let fruits = ["apple", "banana", "mango"];
// console.log(fruits[1])
// fruits[1] = "orange"
// fruits.push("grape")
// console.log(fruits)

//Task-12

// let course = {
//     title : "frontend",
//     hours : 180,
//     level : 4
// }
// course.title = "FullStack"
// console.log(course.title)
// console.log(course)

// Task-13

// hasAccount = true
// isVerified = false
// console.log(hasAccount && isVerified )
// console.log(hasAccount || isVerified  )
// console.log(!isVerified)

//Task-14
// let balance = 50 
// balance += 30
// balance *= 2 
// balance -= 20
// console.log(balance)

//Task-15

// let hotelName = prompt("what is hotel name :")
// let numofnights = prompt("what is number of nights :")
// let comfirmed  = confirm("Reservation ok ?")
// console.log( `Hotel : ${hotelName} , Nights : ${numofnights} , Confirmed : ${comfirmed} `)


// //Task-16
// console.log(2 + 8 + "0");  //100
// console.log("2" + 8 + 0);  //280
// console.log(2 + "8" + 0);  //280

//Task-17
// var city1 = "Alex";
// var city2 = city1; 
// city2 = "Giza"; 
// console.log(city1, city2); // Alex , Giza

// var car1 = { brand: "Toyota" }; 
// var car2 = car1; 
// car2.brand = "Honda"; 
// console.log(car1, car2); // honda ,honda

// Task-18
// let mixedBag = [ "Hello", 20 , true , null , undefined , { name: "Amr" } ,[1, 2, 3] ];

// console.log(typeof mixedBag[0]); // string
// console.log(typeof mixedBag[1]); // number
// console.log(typeof mixedBag[2]); // boolean
// console.log(typeof mixedBag[3]); // object
// console.log(typeof mixedBag[4]); // undefined
// console.log(typeof mixedBag[5]); // object
// console.log(typeof mixedBag[6]); // object

// typeof null returns object 

// Task-19
// let customerName = prompt("Enter customer name:")
// let orderPrice = prompt("Enter order price:")
// let isPaid = confirm("is the payment Done?")
// let price = Number(orderPrice)

// let mess = "Customer: " + customerName + "price : " + price + "Payment status : " + isPaid;

// console.log(mess);
// alert(mess);

// document.getElementById("result").innerText = mess;

//Task-20
// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));

// console.log("Sum = " + (num1 + num2));
// console.log("Difference = " + (num1 - num2));
// console.log("Product = " + (num1 * num2));
// console.log("Division = " + (num1 / num2));
// console.log("Modulus = " + (num1 % num2));
// console.log("Power = " + (num1 ** num2));

//Task-21
// var a = 40;
// var b = 50;
// var c = "60";
// var d = 30;
// var e = 30;

// console.log(a + b + Number(c) + d + e); // convert c to number

//Task-24
// var a = "15";
// var b = 15;
// var c = null;
// var d;
// var e = [15];
// var f = { value: 15 };

// console.log("a:", a, "| typeof:", typeof(a), "| == 15:", a == 15, "| === 15:", a === 15);
// console.log("b:", b, "| typeof:", typeof(b), "| == 15:", b == 15, "| === 15:", b === 15);
// console.log("c:", c, "| typeof:", typeof(c), "| == 15:", c == 15, "| === 15:", c === 15);
// console.log("d:", d, "| typeof:", typeof(d), "| == 15:", d == 15, "| === 15:", d === 15);
// console.log("e:", e, "| typeof:", typeof(e), "| == 15:", e == 15, "| === 15:", e === 15);
// console.log("f:", f, "| typeof:", typeof(f), "| == 15:", f == 15, "| === 15:", f === 15);


// Task-25


var productName = prompt("Enter product name:");
var brand = prompt("Enter brand:");
var price = Number(prompt("Enter product price:"));
var category = prompt("Enter product category:");

var confirmStock = confirm("Is this product in stock?");

var productInfo = {
    productName: productName,
    brand: brand,
    price: price,
    category: category,
    inStock: confirmStock
};
var message = `Product: ${productName} Brand: ${brand} Price: ${price} Category: ${category} In Stock: ${confirmStock ? "Yes" : "No"}`;

alert(message);
console.log(productInfo);
document.getElementById("result").innerText = message;