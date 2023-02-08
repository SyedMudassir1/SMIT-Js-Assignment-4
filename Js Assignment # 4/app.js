
// *************** Assignment # 9-10 Jawascript **************

//Question no 01
// var city = "karachi";
// var city = prompt("Enter your city?");
// if (city == "karachi") {
//     alert("Welcome to city of light.");
// }

//Question no 02
// var gender = "male";
// var gender = "female";
// var gender = prompt("Enter your gender?");
// if(gender == "male") {
//     alert("Good Morning Sir");
// }
// if(gender == "female") {
//    alert("Good Morning Ma'am");
// }

//Question no 03
// var signalColor = "message";
// var signalColor1 = "Red";
// var signalColor2 = "Yellow";
// var signalColor3 = "Green";

// var message1 = "Must stop";
// var message2 = "Ready to move";
// var message3 = "Move now";

// var signalColor = prompt("Traffic signal color");
// if(signalColor == "Red") {
//     alert("Must Stop");
// }
// if(signalColor == "Yellow") {
//      alert("Ready to move");
// }
// if(signalColor == "Green") {
//     alert("Move now");
// }
// document.write("<h1>Signal-Color ---------------- Message</h1>");
// document.write("<h2>----Red--------------------------------------Must stop</h2>");
// document.write("<h2>----Yellow-------------------------------Ready to move</h2>");
// document.write("<h2>----Move now-----------------------------Move now");

//Question no 04

// var fuel = "1.5 litre";
// var fuel = prompt("Enter the fuel");
// if(fuel < "0.25 liter") {
//     alert("Please refill the fuel in your car");
// }

//Question no 05

//a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//d
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//e
//  if (true){
// alert("True");
// }
// if (false){
// alert("false");
// }
//f
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//  }

//Question no 06

// var totalMark = 300;
// alert(totalMark);
// var obtainMark = prompt("Enter your obtain mark");
// var percentage = obtainMark / totalMark * 100;
// alert(percentage);
// document.write("<h1>Marks sheet</h1>");
// if(percentage >= "80") {
//     document.write("<h2>Total-Mark = 300</h2>");
//     document.write("<h2>Obtain-Mark:" +  obtainMark);
//     document.write("<h2>Grade: A1</h2>");
//     document.write("<h2>Remark: Exellent</h2>");
// }
//else if(percentage >= "70") {
//     document.write("<h2>Total-Mark = 300</h2>");
//     document.write("<h2>Obtain-Mark:" +  obtainMark);
//     document.write("<h2>Grade: A</h2>");
//     document.write("<h2>Remark: Good</h2>");
// }

//else if(percentage < "60") {   
//     document.write("<h2>Total-Mark = 300</h2>");
//     document.write("<h2>Obtain-Mark:" +  obtainMark);
//     document.write("<h2>Grade: Fail</h2>");
//     document.write("<h2>Remark: Sorry better luck next time</h2>");
// }

//Question no 07

//a
// var number = "x";
// var guessNumber = 5;
// var nearNumber1 = 6;
// var nearNumber2 = 4;
// var number = prompt("Enter the secret number from 0 to 10?");
// if(number == guessNumber) {
//     alert("Congratulations! Correct Answer.");
// }
// else if(number == nearNumber1) {
//     alert("Close enough to the correct answer.");
// }
// else if(number == nearNumber2) {
//     alert("Close enough to the correct answer.");
// }
// else {
//     alert("Retry!");
// }

//Question no 08

// var number = "x";
// var number = prompt("Enter any number?");
// if(number % 3 == 0) {
//     alert("The number is divisible by 3.");
// }
// else{
//     alert("The number is not divisible by 3.");
// }

//Question no 09

// var number = "x";
// var number = prompt(" Enter any number?");
// if(number % 2 == 0) {
//     alert("The number is even.");
//     document.write("<h1>The number is even.</h1>");
// }
// else{
//     alert("The number is odd.");
//     document.write("<h1>The number is odd.</h1>");
// }

//Question no 10

// var temperature = "x";
// var temperature = prompt("Enter the temperature?");
// if(temperature > 40) {
//     alert("It is too hot outside.");
// }
// else if(temperature > 30) {
//     alert("The wheather is normal.");
// }
// else if(temperature > 20) {
//     alert("Today's weather is cool.");
// }
// else if(temperature > 10) {
//     alert("OMG, weather is too cool.");
// }
// else{
//     alert("Too Cool");
// }

//Question no 11

// var firstNumber = "x";
// var secondNumber = "y";

// var operator = "z";
// var result1 = firstNumber + secondNumber;
// var result2 = firstNumber - secondNumber;
// var result3 = firstNumber * secondNumber;
// var result4 = firstNumber / secondNumber;
// var result5 = firstNumber % secondNumber;
// var result = result1;
// result = result2;
// result = result3;
// var firstNumber = prompt("Enter the first number?");
// var operator = prompt("Enter the operator?");
// var secondNumber = prompt("Enter the second number?");

// if(firstNumber + secondNumber) {
//    alert(result);
// }
// else if(firstNumber - secondNumber) {
//    alert(result);
// }
// else if(firstNumber * secondNumber) {
//    alert(result);
// }
// else if(firstNumber / secondNumber) {
//     alert(result4);
// }
// else if(firstNumber % secondNumber) {
//    alert(result5);
// }
//else{
//    alert("invalid");
// }

// ************ chp 12 - 13 *****************//
//Question no 01

// var alphabet = "x";
// var range1 = "A";
// var range2 = "Z";
// var range3 = "a";
// var range4 = "z";
// var alphabet = prompt("Enter the Alphabet?");
// if(alphabet >= range1 && alphabet <= range2) {
//     alert("The alphabet is uppercase.");
// }
// else if(alphabet >= range3 && alphabet <= range4) {
//     alert("The alphabet is lowercase.");
// }
// else {
//     alert("invalid");
// }

//Question no 2

// var int1 = 8;
// var int2 = 11;
// var int1 = prompt("Enter the integer1?");
// var int2 = prompt("Enter the integer2?");
// if(int1 > int2) {
//     alert(int1);
// }
// else if(int1 < int2) {
//     alert(int2);
// }
// else {
//     alert("Numbers are equal.");
// }

//Question no 03

// var number = "x";
// var number = prompt("Enter the number?");
// if(number > 0) {
//     alert("Number is positive.");
// }
// else if(number < 0) {
//     alert("Number is negative.");
// }
// else {
//    alert("Number is equal to 0.");
// }

//Question no 04

// var character = "x";
// var vowel1 = "a";
// var vowel2 = "e";
// var vowel3 = "i";
// var vowel4 = "o";
// var vowel5 = "u";
// var character = prompt("Enter the character?");
// if(character == vowel1) {
//     alert("The character is vowel.");
// }
// else if(character == vowel2) {
//     alert("The character is vowel.");
// }
// else if(character == vowel3) {
//     alert("The character is vowel.");
// }
// else if(character == vowel4) {
//     alert("The character is vowel.");
// }
// else if(character == vowel5) {
//     alert("True! the character is vowel.");
// }
// else {
//    alert("False! not a vowel.");
// }

//Question no 05

// var password = "x";
// var password1 = 54776;
// var password = prompt("Enter the password?");
// if(password == password1) {
//     alert("“Correct! The password you entered matches the original password”.");
// }
// else {
//     alert("Incorrect Password.");
// }

//Question no  06

// var hour = 13;
// var hour = prompt("Enter the hour?");
// if (hour < 18) {
// alert(greeting = "Good day");
// }
// else {
// alert(greeting = "Good evening");
// }

//Question no 07

// var time = 1900;
// var hour = "x";
// var time1 = "7pm";
// time = time1;
// var time = prompt("Enter the hour?");
// if(time >= 0000 && time < 1200) {
//     alert("Good Morning!");
// }
// else if(time >= 1200 && time < 1700) {
//     alert("Good AfterNoon!");
// }
// else if(time >= 1700 && time < 2100) {
//     alert("Good Evening!");
// }
// else if(time >= 2100 && time <= 2359) {
//     alert("Good Night!");
// }
// else {
//     alert("Invalid.");
// }

// ========================= THE END ============================ //



