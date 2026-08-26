// Task-1
// let nam = "Amr Desouki";
// console.log( "name : " , nam , " and number of characters : ", nam.length );

// Task-2
// let sentence = "Iam Learning Javascript"
// console.log(sentence.toUpperCase())
// console.log(sentence.toLowerCase())

// Task-3

// let email = "student@nti.com" ;
// console.log(email.includes('@')) // true

// Task-4
// let x = "Javascript"
// console.log(x.charAt(0)) ;
// console.log(x.charAt(x.length - 1)) ;

// Task-5
// let sentence = "this is a bad day"
// console.log(sentence.replace("bad" , "good"))

// Task-6
// let sentence = "i love coding"
// let sentenceSpread = sentence.split(" ");
// let sentenceJoin = sentenceSpread.join("-")
// console.log(sentenceSpread)
// console.log(sentenceJoin)

// Task-7
// let text = "  nti egypt training   "
// result = ( console.log( text.trim().toUpperCase().replace("EGYPT", "CAIRO") ) )

//////////////////////////////////////////////////////////////////////////////////////////

// Task-8

// let number = parseFloat("45.8");
// console.log(number);

// Task-9
// let number  = 7.6;
// console.log(Math.round(number));
// console.log(Math.floor(number));
// console.log(Math.ceil(number));

// Task-10
// let nums = [12,5,28,9]
// console.log(Math.max(...nums));
// console.log(Math.max(...nums));

// Task-11
// let random = Math.floor(Math.random()* 20)
// console.log(random)

// Task-12

// let number  = 19.4567 ;
// console.log(number.toFixed(2))

// Task-13
// let nums = [] ;
// let sum = 0 ;
// for(var i = 1 ; i <= 5 ; i++){
//     var random = Math.floor(Math.random()* 50)
//     nums.push ( random )
//     sum += random
// }
// avg = (sum / nums.length)
// result = avg.toFixed(2)

// console.log(nums)
// console.log(Math.max(...nums))
// console.log(Math.min(...nums))
// console.log(result)

/////////////////////////////////////////////////////////////////////////////////////

// Task-14
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// Task 15

// for (let i = 1; i <= 15; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// Task 16

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// Task-17

// let names = ["Amr", "Ali", "Ahmed", "Mohamed", "Omar"];
// for( item of names){
//     console.log(item)
// }

// Task-18
// for(let i = 1 ; i <= 10 ; i++){
//     if(i == 7){
//         break ;
//     }
//     console.log(i)
// }

// Task-19
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i + " * " + j + " = " + (i * j));
//   }
// }

// Task-20
// for (let i = 1; i <= 30; i++) {
//     if(i % 3 == 0 ){
//         continue ;
//     }
//     if(i == 25){
//         break ;
//     }
//     console.log(i)
// }

///////////////////////////////////////////////////////////////////////////////////////////

// Task-21

// let word = "HELLO"

// for (let i= 0; i< word.length; i++ ) {

//     console.log(word[i])
// }

// Task-22

// let nums = [ 10 , 20 , 30 , 40 ]
// let sum = 0
// for(let i = 0 ; i< nums.length; i++ ){
//     sum += nums[i]
// }
// console.log("sum = " , sum)

// Task-23
// let sentence = "JavaScript is amazing and awesome";
// let count = 0;
// for(let i = 0 ; i< sentence.length; i++ ){
//     if( sentence[i]== 'a' || sentence[i] == 'A' ){
//         count++
//     }
// }
// console.log(count)

// Task-24
// let grades = [70, 85, 92, 60, 77, 88];
// for (let i = 0 ; i < grades.length ; i++) {
//     if (grades[i] % 2 == 0) {
//     console.log(grades[i]);
//     }
// }

// Task-25
// let result =""
// for( let i = 1 ; i <= 4 ; i++){
//     result += "*"
//     console.log(result)
// }

// Task-26

let names = ["ahmed", "sara", "omar", "laila", "hassan"];
let count = 0;
for (let i of names) {
    let upper = i.toUpperCase();
    if (upper.startsWith("A" ) || upper.startsWith("S")) {
        console.log(upper);
        count++;
    }
}
console.log(" count:", count);

