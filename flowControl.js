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


// Sneak preview: the switch statement
/*
As you might imagine, if you have a lot of choices you want to cover in a program, it might be annoying to type else if () ten times.
That's why JavaScript has the switch statement!

switch allows you to preset a number of options (called cases), then check an expression to see if it matches any of them.
If there's a match, the program will perform the action for the matching case; if there's no match, it can execute a default option.
*/

/* Instructions:
Take a look at the code below. Can you see how the switch statement works?
*/
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}


// Adding to an existing switch

// The switch statement is put together like this:

//  switch (/*Some expression*/) {
//      case 'option1':
//        // Do something
//        break;
//    case 'option2':
//        // Do something else
//        break;
//    case 'option3':
//        // Do a third thing
//        break;
//    default:
//        // Do yet another thing
//     }

/* JavaScript will try to match the expression between the switch() parentheses to each case.
It will run the code below each case if it finds a match, and will execute the default code if no match is found. */

/* Our switch statement needs a case for 'yellow'.
Add it in and make it log a string of your choice to the console (it should be different from the default string).

Don't forget to end your case with a break statement—otherwise, it will go on and execute the code for default, too! We don't want that. */

var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  case 'yellow':
    console.log("Really? Yellow? That's what you decided on? Well, okay then. Weirdo.");
    break;
  default:
    console.log("I don't think that's a primary color!");
}


// Practice with switch
// Now that you've added cases to an existing switch, let's practice adding a default block.

// Instructions: Add the default block at the bottom of the switch statement, then run the code a few times with different inputs. switch: super useful!

var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
  default:
    console.log("So, you like "+ candy +" eh? Not my first choice, I have to say.");
}


// More practice with switch
/* We've given you the empty skeleton of a switch statement.
Complete the existing case, then add at least one additional case and a default behavior with whatever console.log() calls you like. */

var answer = prompt("Who is your favorite Walking Dead character?", "Type your response here...");

switch(answer) {
  case 'Rick':
    console.log("Shit yeah! Rick Grimes is awesome!");
    break;
  case 'Michonne':
    console.log("Yeah, Michonne is pretty cool.");
    break;
  case 'Darryl':
    console.log("Darryl eh? Is it because he's all handsome and gruff?");
    break;
  case 'Carol':
    console.log("Yeah Carol! You have great taste!!");
    break;
  default:
    console.log("Well, I have to say, " + answer + " is not my favorite. But good for you.");
}


// Overview
/* So far we've seen how to control our programs given a single condition: whether one variable is equal to a certain value, for instance.
But what if we want to check more than one variable?

For this, we'll need logical operators. JavaScript has three: and (&&), or (||), and not (!).

Using these, we can check several variables at once! Check out the code in the editor. */

// Set the iLove... variables to true, run the script, and see what happens!

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}


// AND...

// The logical operator and is written in JavaScript like this: &&. It evaluates to true when both expressions are true; if they're not, it evaluates to false.
/*
true && true;    // => true
true && false;   // => false
false && true;   // => false
false && false;  // => false
*/

/* Create two variables, hungry and foodHere, and set them both equal to true.
Inside the eat function, create an if statement that returns true only if both hungry and foodHere are true, and false otherwise.
The function eat should take no input and hungry and foodHere should both be globals. */

var hungry = true;
var foodHere = true;

var eat = function() {
  if (hungry && foodHere) {
      return true;
      } else {
      return false;
    }
};


// Or
// The logical operator or is written in JavaScript like this: ||. It evaluates to true when one or the other or both expressions are true; if they're not, it evaluates to false.
/*
true || true;     // => true
true || false;    // => true
false || true;    // => true
false || false;   // => false
*/

// The or operator is written with two vertical bars ||. The vertical bar character is located right above the Enter key on your keyboard.

/* Create two variables, tired and bored, and set one equal to true and the other equal to false. (It doesn't matter which is which.)
Inside the nap function, create an if statement that returns true if either tired or bored (or both!) are true, and false otherwise. */

// Declare your variables here!
var tired = true;
var bored = false;

var nap = function() {
  if (tired || bored) {
    return true;
      } else {
        return false;
      }
};


// NOT!

/* The logical operator not is written in JavaScript like this: !. It makes true expressions false, and vice-versa.

!true;   // => false
!false;  // => true
*/

/* Declare a variable called programming and set it to false.
Then, write an if/else statement inside happy so that happy returns true if programming is false and false otherwise. */

// Declare your variables here!


// Declare your variables here!
var programming = false;

var happy = function() {
  if (!(programming)) {
      return true;
      } else {
        return false;
    }
};
