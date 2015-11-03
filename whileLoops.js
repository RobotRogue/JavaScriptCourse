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
}

// 
