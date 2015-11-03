// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(6);


// Calling Functions!!

// Below is the greeting function!
// See line 7
// We can join strings together using the plus sign (+)
// See the hint for more details about how this works.

var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

// On line 11, call the greeting function!
greeting("Nelson");


// How to structure a function

var functionName = function() {
  // your codeblock;
  // more of your codeblock;
  // end each line with a semicolon or else;
};

// The VAR keyword declares a variable called functionName
// The keyword FUNCTION tellse the computer that FUNCTIONNAME is an actual FUNCTION not a variable
// Parameters that get fed in to the function go between the partentheses ()
// The code block is the reudable code that is between the mustache brackets {}
// The entire function will end in a semicolon {};
// To call a function, you type the function name, and pass a parameter in parentheses, followed with a semicolon
// Like this:
// greeting("nelson");


// How does a function work?

// Write your foodDemand function below.
// Last hint: In your reusable block of code, end each line
// with a semicolon (;)

var foodDemand = function(food) {
    console.log("I want to eat " + food);
};

foodDemand("Pizza");


// About Formatting

// Do I have to put a semi-colon at the end of each line of code in the reusable block? And at the end of the entire function?

// Yes. At the end of each line of code (within the { }) and after the entire function (after the { }), please put a semi-colon.
// The semi-colon acts like a period in a sentence. It helps the computer know where there are stopping points in the code.


// Try to follow best practices when formatting your code to make it easier to read by others and give you less headaches when debugging
// A good example of code formatted properly is:

var calculate = function (number) {
    var val = number * 10;
    console.log(val);
};


// So what was that about debugging??
// Nicely written function:
var calculate = function (number) {
    var val = number * 10;
    console.log(val);
};

// Badly written function with syntax errors!
// Crap code below: (commented so it wouldn't run)
// greeting var func{name}(console.log(name)))}


// Fixed code below:

var greeting = function(name) {
    console.log(name);
};

greeting("Nelson");


// Alrighty... Now for reusing code:
// You are a creature of habit. Every week you buy 5 oranges. But orange prices keep changing!

// You want to declare a function that calculates the cost of buying 5 oranges.
// You then want to calculate the cost of the 5 all together.
// Write a function that does this called orangeCost().
// It should take a parameter that is the cost of an orange, and multiply it by 5.
// It should log the result of the multiplication to the console.
// Call the function where oranges each cost 5 dollars.

var orangeCost = function(price) {
    price = (price * 5);
    console.log(price);
};

orangeCost(5);


// And then... RETURN
// Or, the RETURN keyword..

// when we call a function, we don't always want to just print stuff.
// Sometimes, we just want it to return a value.
// We can then use that value (ie. the output from the function) in other code.

// The return keyword simply gives the programmer back the value that comes out of the function.
// So the function runs, and when the return keyword is used, the function will immediately stop running and return the value.

// In this example we have a function called timesTwo() that takes in a number and returns the number multiplied by two.

// After the equals sign, for var newNumber, call the function timesTwo with any parameter you want
// It then prints out newNumber. Notice how the value we return from timesTwo() is automatically assigned into newNumber.


// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(18);
console.log(newNumber);


// And... now some practice:

// Define a function called quarter which has a parameter called number.
// This function returns a value equal to one quarter of the parameter. (i.e. number / 4;)
// Call the function inside the if statement's condition (and put in a parameter value!) such that "The statement is true" is printed to the console.

// Define quarter here.

var quarter = function(number) {
    return number/4;
};

if (quarter(60) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}


// Functions can support multiple values, here's an example:

// Write a function called perimeterBox that returns the perimeter of a rectangle.
// It should have two parameters.
// One formula for perimeter is length + length + width + width;
// Call the function and pass in any value for length and width you like.

var perimeterBox = function(lng, wid) {
    return(lng + lng + wid + wid);
};

perimeterBox(2,4)


// GLOBAL vs. LOCAL VARIABLES

// Let's talk about an important concept: scope. Scope can be global or local.
// Variables defined outside a function are accessible anywhere once they have been declared. They are called global variables and their scope is global.
// For example:
var globalVar = "hello";

var foo = function() {
    console.log(globalVar);  // prints "hello"
}

// The variable globalVar can be accessed anywhere, even inside the function foo.

// Variables defined inside a function are local variables. They cannot be accessed outside of that function.
// For example:
var bar = function() {
    var localVar = "howdy";
}

console.log(localVar);  // error

// The variable localVar only exists inside the function bar. Trying to print localVar outside the function gives a error.

// Now check out this code here:
var my_number = 7; //this has global scope

var timesTwo = function(number) {
    my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
};

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);

// The var keyword creates a new variable in the current scope.
// That means if var is used outside a function, that variable has a global scope.
// If var is used inside a function, that variable has a local scope.
// For my_number we have not used the var keyword, so when we log my_number to the console outside of the function, it will be 14.

// Using my_number without the var keyword refers to the global variable that has already been declared outside the function in line 1.
// However, if you use the var keyword inside a function, it declares a new local variable that only exists within that function.


// A quick recap on functions and returning a result:

// Write a function called nameString()
// It should take name as a parameter.
// The function returns a string equal to "Hi, I am" + " " + name.
// Call nameString() by passing it your name, and use console.log to print the output.
var nameString = function(name) {
	return("Hi, I am " + name);
};

console.log(nameString("Nelson"));


// Functions & if / else
// An especially useful application of reusable code is if/else statements. These can be very wordy, and a pain to type repeatedly.

// We are going to write a function that checks how many hours of sleep a night you're getting.
// Inside the function will be an if/else statement.
// We want the function to check many different numbers of hours to see whether a person is getting enough sleep.

// Write a function named sleepCheck that takes the parameter numHours
// Inside the function, write an if statement where if the number of hours of sleep is greater than or equal to 8,
// the computer will return "You're getting plenty of sleep! Maybe even too much!";.
// Otherwise (else) if the number of hours of sleep is less than 8, have the computer return "Get some more shut eye!";
// Then call the function with different hours of sleep

// TESTS
// Call the function with 10 hours of sleep, like this: sleepCheck(10);
// Call the function with 5 hours of sleep.
// Call the function with 8 hours of sleep

// Write your function below.
// Don't forget to call your function!

var sleepCheck = function(numHours) {
    if (numHours >= 8)
    return "You're getting plenty of sleep! Maybe even too much!";
    else
    return "Get some more shut eye!";
};

console.log(sleepCheck(10));


// OKAY! Next lesson - THE GAME
