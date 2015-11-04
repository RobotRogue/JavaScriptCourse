// More on Control Flow in JS

// If / else
/* You've learned about if and else, and how they control what your program does. */

/* Write an if / else statement inside the isEven function.
It should return true; if the number it receives is evenly divisible by 2.
Otherwise (else), it should return false;.

Make sure to return - don't use console.log()! */

var isEven = function(number) {
  if (number % 2 === 0) {
      return true;
  } else {
      return false;
  }
};

// If / else if / else

/*
Good! Let's also get some practice in with else if, as well as learn about a fancy new function: isNaN.

If you call isNaN on something, it checks to see if that thing is not a number. So:

isNaN('berry'); // => true
isNaN(NaN); // => true
isNaN(undefined); // => true
isNaN(42);  // => false
Be careful: if you call isNaN on a string that looks like a number, like '42', JavaScript will try to help by automatically converting the string '42' to the number 42 and return false (since 42 is a number).

Note that you can't just do

isNaN(unicorns);
unless you've already defined the variable unicorns. You can, however, do

isNaN("unicorns"); // => true
*/

// Try This:
/* Add an else if branch to your existing if/else statement.
If the number put into the function is not a number at all, instead of return true; or return false;,
the function should return a string that tells the user that their input isn't a number.
(This string can say whatever you like.) */

/* Test Code:
var isEven = function(number) {
  if (number % 2 === 0) {
      return true;
  } else {
      return false;
  }
};
*/

//My code:
var isEven = function(number) {
  if (number % 2 === 0) {
      return true;
  } else if (isNaN(number)) {
      return ("Nope. Not a number, bro.");
  } else {
      return false;
  }
};

isEven(2);
