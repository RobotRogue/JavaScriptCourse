// The Game
// Rock paper scissors is a classic 2 player game. Each player chooses either rock, paper or scissors. The possible outcomes:

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// Our code will break the game into 3 phases:
// a. User makes a choice
// b. Computer makes a choice
// c. A compare function will determine who wins

var userChoice = prompt("Do you choose rock, paper or scissors?");

// Awesome! We now need the computer to make a choice.
// The game is only going to be fun if the computer chooses randomly.
// Luckily JavaScript has something that can help with this.
// If we declare a variable and make it equal to Math.random(),
// that variable will equal a number between 0 and 1.

var computerChoice = Math.random();

// Might as well see what the computer choice ends up being, so print to the console to see

console.log(computerChoice)

// Now we have to make the Math.random map to a value of Rock, Paper, or Scissors
// We can use IF, ELSE IF, and ELSE statements to make this work

// If computerChoice is between 0 and 0.33, make computerChoice equal to "rock".
// If computerChoice is between 0.34 and 0.66, make computerChoice equal to "paper".
// If computerChoice is between 0.67 and 1, make computerChoice equal to "scissors".

if (computerChoice <= 0.33) {
    computerChoice = "rock";
    console.log(computerChoice);
}
else if (computerChoice >= 0.67) {
    computerChoice = "scissors";
    console.log(computerChoice);
}
else {
    computerChoice = "paper";
    console.log(computerChoice);
}

// Notice how we didn't have to include the paper values/range? That cut out unnecessary code.
// The project opted for even simpler code, shown below:

/*var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
computerChoice = "scissors";
} console.log("Computer: " + computerChoice);*/

// Now comes the fun part! We need to create a function.
// It will take two parameters (ie. the two choices made) and then return the winning choice.
// When programming a game like this, you have to first figure out all the various outcomes.
// One outcome is that the choice the user makes is equal to the choice the computer makes.

// We carried over the code from the previous section, but it is a comment. Leave it there for now.
// Below the comment, declare a function called compare.
// It takes two parameters, choice1 and choice2.
// Inside the function, write an if statement. If choice1 === choice2, then return "The result is a tie!"

var compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    return("The result is a tie!");
  }
};

// So far so good...
// But... What if choice1 is rock?
// Now we consider the other scenarios. Let's break the problem down a little. What if choice1 is "rock"? Given choice1 is "rock",
// a. if choice2 === "scissors", then "rock" wins.
// b. if choice2 === "paper", then "paper" wins.
// How do we structure this? It's a bit different from what we have already seen. We will first have an if statement. And then the code inside that if statement will be... another if statement!

// Let's code our outline from above:
// Inside the compare() function under the existing code, write an else if statement where the condition is choice1 === "rock".
// Inside this else if statement, write an if / else statement. If choice2 === "scissors", return "rock wins". Else, return "paper wins".

/*var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);*/

var compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    return("The result is a tie!");
  }
  else if (choice1 === "rock") {
    if (choice2 === "scissors")
    return "rock wins"
    else
    return "paper wins"
  }
};

// Ok now... What if choice1 is paper?
// Now what if choice1 is "paper"? Given choice1 is "paper",
// a. if choice2 === "rock", then "paper" wins.
// b. if choice2 === "scissors", then "scissors" wins.

// Inside the compare() function under the existing code, write another else if statement where the condition is choice1 === "paper".
// Inside this else if statement, write an if / else statement. If choice2 === "rock", return "paper wins". Else, return "scissors wins".

/*var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);*/

var compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    return("The result is a tie!");
  }
  else if (choice1 === "rock") {
    if (choice2 === "scissors")
    return "rock wins"
    else
    return "paper wins"
  }
  else if (choice1 === "paper") {
    if (choice2 === "rock")
    return "paper wins"
    else
    return "scissors wins"
  }
};

// Lastly, what if choice1 is "scissors"? Given choice1 is "scissors",
// a. if choice2 === "rock", then "rock" wins.
// b. if choice2 === "paper", then "scissors" wins.

// Under your old code, use the same structure as the past two exercises and finish off your function.
// We need to use the variables userChoice and computerChoice.
// Uncomment the first lines of the code by deleting /* on line 1 and */ on line 9, the variables are now active and can be called.
// Call your function and pass in userChoice and computerChoice as your two arguments.
// Press Save & Submit Code and your game should work! Congratulations!

// Here's what the completed code will look like in the end:

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    return("The result is a tie!");
  }
  else if (choice1 === "rock") {
    if (choice2 === "scissors")
    return "rock wins"
    else
    return "paper wins"
  }
  else if (choice1 === "paper") {
    if (choice2 === "rock")
    return "paper wins"
    else
    return "scissors wins"
  }
  else if (choice1 === "scissors") {
    if (choice2 === "rock")
    return "rock wins"
    else
    return "scissors wins"
  }
};

compare(userChoice, computerChoice);

// Submitting that thru the interpereter, by calling the function 'compare'
// and passing in the varibles for userChoice and computerChoice as values/parameters will net the result

// Next lesson - FOR loops
