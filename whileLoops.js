// *While* we're at it...

//As a reminder, for loop syntax looks like this:

for (var i = start; i < end; i++) {
  // do something
}

/* The counter variable i starts at "start", and stops looping when it reaches "end."

But what if you didn't know ahead of time when to stop looping?
Say, for example, you wanted to keep choosing playing cards from a deck until you get a spade.
You don't know how many cards you'll need to choose, so a for loop won't work.

In situations like these where you don't know in advance when to stop looping, we can use a while loop. */

// What does the below code do? Can you guess?

var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");


// While syntax
/* The while loop is ideal when you want to use a loop, but you don't know how many times you'll have to execute that loop.

In the example you just saw, the computer was randomly flipping a coin: while the coin came up heads (when coinFace equalled 0),
it would flip again, and it would stop flipping once it got tails (when coinFace was 1). Since the flip was random,
we didn't know ahead of time how many loops we'd need.

The syntax looks like this: */

while(condition){
    // Do something!
}

/* As long as the condition evaluates to true, the loop will continue to run. As soon as it's false, it'll stop.
(When you use a number in a condition, as we did earlier, JavaScript understands 1 to mean true and 0 to mean false.)

Since you've already mastered for loops, this simpler syntax should be a breeze for you. */

// Try it yourself
/* complete the while loop in the editor so it will print out "I'm learning while loops!".
Do this by adding the condition between the parentheses—don't change understand=false;, or you could get an infinite loop! */

var understand = true;

while(understand === true) {
	console.log("I'm learning while loops!");
	understand = false;
}


// A fellow of infinite loops
/*
We mentioned infinite loops in the previous exercise. If you give a while loop a condition that is true and you don't build in a way for that condition to possibly become false, the loop will go on forever and your program will crash. No good!

To prevent this from happening, you always need a way to ensure the condition between your while parentheses can change.

You'll see the same code from the last exercise in the editor to the right, only we've taken out the part that changes the loop's condition.
*/

understand = true;

while(understand){
	console.log("I'm learning while loops!");
	//Change the value of 'understand' here!
  understand = false;
}

// Brevity is the soul of programming
/* You may have noticed that when we give a variable the boolean value true, we check that variable directly—we don't bother with ===.
For instance, */

var bool = true;
while(bool){
    //Do something
}

// is the same as...

var bool = true;
while(bool === true){
    //Do something
}

/* but the first one is faster to type. Get in the habit of typing exactly as much as you need to, and no more!

If you happen to be using numbers, as we did earlier, you could even do: */

var myNumber = 1;
while(myNumber) {
    // Do something!
}

// So how would you clean up this code:
/*
var bool = true;

while(bool === true){
    console.log("Less is more!");
    bool = false;
}
*/

var bool = true;

while(bool){
    console.log("Less is more!");
    bool = false;
}


// Practice makes perfect (or at least Better)
/* Okay. Time for you to create a while loop from scratch!

We've set up a function, loop, for you to write your while loop in, as well as created the empty loop.

Remember to set up the condition you're checking outside the loop—if you do it in the loop, it will keep resetting and the loop could go on forever! */

//Remember to set your condition outside the loop!


var loop = function(yourNumber){
	while(yourNumber < 3){
		console.log("I'm looping!");
		yourNumber = yourNumber + 1;
	}
};

loop(0);


// Solo flight
// Great work! Let's try another. This time, no help at all! (Well, some help—check the Hint if you get stuck.)

//Remember to make your condition true outside the loop!

//Remember to make your condition true outside the loop!

var soloLoop = function(theLoop){
  while (theLoop < 1) {
      console.log("Looped once!");
      theLoop = theLoop + 1;
  }
};

soloLoop(0);


// When to 'while' and when to 'for'
/* As we mentioned, for loops are great for doing the same task over and over when you know ahead of time how many times you'll have to repeat the loop.
On the other hand, while loops are ideal when you have to loop, but you don't know ahead of time how many times you'll need to loop.

As you saw, however, you can combine a while loop with a counter variable to do the same kind of work a for loop does. In these cases, it's often a matter of preference. */

// The 'do' / 'while' loop
/* Sometimes you want to make sure your loop runs at least one time no matter what.
When this is the case, you want a modified while loop called a do/while loop.

This loop says: "Hey! Do this thing one time, then check the condition to see if we should keep looping."
After that, it's just like a normal while: the loop will continue so long as the condition being evaluated is true. */

var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
} while (loopCondition);

// To learn it, you gotta 'do' it
/* Your turn! Now that you've seen how do/while loops work, you can easily write your own. (Check the Hint if you need a syntax refresher!)

Your loop should print a string of your choice to the editor one time. Remember: make sure you give your while condition a way to become false, or it'll loop forever!

Write a do/while loop inside the function we've created for you, getToDaChoppa. The function should log a string of your choice to the console. do it now!*/

var getToDaChoppa = function(){
  var loopCondition = false;
  do {
      console.log("Ruuun! Goooo! Get to da choppaaaaaaaaaah!");
  } while (loopCondition);

};

getToDaChoppa();


// Next up: dragonSlayer!
