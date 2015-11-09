// Why Use FOR loops?

// First for loop
// Instead of manually typing in console.log five times, we can use a for loop to do this.
//The aim of this exercise is just to show you how a for loop looks, and demonstrate how useful it is.
// Subsequent exercises will

// a. walk you through the syntax bit by bit
// b. explain how the computer thinks as it executes a for loop.

// Example of a for loop:

for (var counter = 1; counter < 6; counter++) {
	console.log(counter);
}

// Below is the general syntax of the for loop.

for (var i = 1; i < 11; i = i + 1) {
    /* your code here */
}

// Every for loop makes use of a counting variable. Here, our variable is called i (but it can have any name).
// The variable has many roles. The first part of the for loop tells the computer to start with a value of 1 for i.
// It does this by declaring the variable called i and giving it a value of 1.

// When the for loop executes the code in the code block—the bit between { }—it does so by starting off where i = 1.

// Change where the for loop starts.
// This for loop starts off at 1 and will end at 10.
// Change the for loop such that it will start off at 5!

for (var i = 5; i < 11; i = i + 1){
	console.log(i);
}


// Ending the for loop
// We know how to control where the for loop starts. How do we control where it ends? Well, the second part of the for loop determines that.

for (var i = 1; i < 11; i = i + 1) {
        //code code code;
    }
// Above - Here, this for loop will keep running until i = 10 ( i.e. while i < 11).
// So when i = 2, or i = 9, the for loop will run. But once i is no longer less than 11, the loop will stop.

// Edit this for loop
// We know this for loop counts from 1 to 10.
// Change this for loop such that it starts at 4.
// Change this for loop such that it counts up to and including 23. ( i.e. we do NOT want 24 to be printed out!)
// Run your for loop and see it count from 4 to 23!

for (var i = 4; i <= 23; i = i + 1) {
	console.log(i);
}


// Controlling the for loop
// We can now control where the for loop starts and ends. What about controlling what happens in between?
// The examples we've looked at have used i = i + 1. This has meant we have incremented (increased) the variable i by 1 each time.

// Rules to learn

// a. A more efficient way to code to increment up by 1 is to write i++.
// b. We decrement down by 1 by writing i--.
// c. We can increment up by any value by writing i += x, where x is how much we want to increment up by. e.g., i += 3 counts up by 3s.
// d. We can decrement down by any value by writing i -= x. (See the Hint for more.)
// e. Be very careful with your syntax—if you write a loop that can't properly end, it's called an infinite loop. It will crash your browser!

// Edit this for loop!
// This code counts every number from 0 to 35.
// Make it start counting from 5. Please!
// Stop the counting when it prints out 50.
// Only count every fifth number. So we want to increment i by 5.

for (var i = 5; i <= 50; i += 5) {
	console.log(i);
}


// How does it work?
// We've gone through the three bits of syntax for a for loop. But how exactly does it work?
// Let's imagine the steps the computer takes to run the for loop below:

// Example for loop

for (var i = 2 ; i < 13; i++) {
	console.log(i);
}

// It starts off with i = 2
// It then asks: Is i currently less than 13? Because i = 2, this is true and we continue.
// We do NOT increment now. Instead, if the condition is met, we run the code block.
// Here, the code block prints out the value of i. It is currently 2 so 2 will be printed out.
// Once the code block is finished, the for loop then increments / decrements. Here, we add 1.
// Now i = 3. We check if it is less than 13. If it is true, we run the code block.
// The code block runs, and then we increment.
// We repeat these steps until the condition i < 13 is no longer true.

// Now to make some changes:
// Make the computer start counting at 8.
// Keep counting while i < 120.
// Count up by increments of 12.

for (var i = 8 ; i < 120; i+=12) {
	console.log(i);
}


// Practice counting down
// for loops only run when the condition is true.

// Example of infinite loop. THIS WILL CRASH YOUR
// BROWSER. Don't run the code without changing it!

for (var i = 1; i >= 1; i++) {
	console.log(i);
}

// DO NOT RUN THAT CODE. IT WILL CRASH YOUR BROWSER!!!

// We can make changes to the code to make it not loop for infinity...
// Change this code such that it starts counting from 10.
// We want it to stop once it gets to 0.
// We want it to count down by 1.
// In the end, the numbers 10..0 inclusive, should be printed.

for (var i = 10; i >= 0; i--) {
	console.log(i);
}


// Last Practice FOR Loop
// Once more, for practice: write a for loop that gets the computer to count down from 100 until 0 by 5.
// This time, make sure not to print 0.

for (var i = 100; i >= 1; i -= 5) {
	console.log(i);
}


// Meet arrays!
// Variables can store numbers or strings. But so far, we've only been able to store ONE number or ONE string. Good thing we have arrays. Arrays:
// a. store lists of data
// b. can store different data types at the same time
// c. are ordered so the position of each piece of data is fixed

// EXAMPLE:

var names = ["Mao","Gandhi","Mandela"];

var sizes = [4, 6, 3, 2, 1, 9];

var mixed = [34, "candy", "blue", 11];

// Syntax:
var arrayName = [data, data, data];

// NOTE! Any time you see data surrounded by [ ], it is an array.

// Make your own array called junk. Put 4 bits of data in it (first 2 strings, then 2 numbers).
// Declare it using var.
// Put [ ] around your data.
// Separate each bit of data with a comma.
// End it with a semi-colon.
// Use console.log to print out junk.

var junk = ["Tires","Spare Engine Parts",5,150];
console.log(junk);


// Array positions
/*
It's nice that we can put a list of data into an array. But now we need to learn how to get access to the data inside the array.

The position of things in arrays is fixed. So we just need to know the array name (here, it is junkData), and the position of the data we want, and we're done.

Small complication: the position (or the index) of each bit of data is counted starting from 0, not 1.

First element in the array: junkData[0]
Third element in the array: junkData[2]
Arrays have 0-based indexing, so we start counting the positions from 0.
*/

// Practice array!
/* Print out the fourth element of the array.
1. Start with figuring out how to express what the fourth element in the array is.
2. Then use console.log() to print things out! */

var junkData = ["Eddie Murphy", 49, "peanuts", 31];
console.log(junkData[3]);


// Loops and arrays I

/* Awesome job! You've now learned about arrays, and how to access one element of the array. But what if there were 100 elements in the array?
For arrays, a useful way to systematically access every element in the array is to use a for loop! */

// Let's print out every element of an array using a for loop

var cities = ["Melbourne", "Amman", "Helsinki", "NYC"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

// ABOVE: How does it work?
/*
1. Line 3 declares the array. It has 4 elements.
2. We then start the for loop on line 5.
3. We see i starts off at value 0.
4. The for loop runs until i < 4 (because cities.length equals 4. The array cities has 4 elements in it; see the Hint for more.)
5. We will increment i by 1 each time we loop over.
6. We print out cities[0], which is "Melbourne".
7. We then start the loop again. Except now i = 1.
8. It will print out cities[1], which is "Amman".
9. This continues until i is no longer less than cities.length.
*/

// Make some changes: Change the elements in the cities array. You can put in as many elements as you like. Run the for loop and see them all printed out!

var cities = ["Melbourne","Amman","Helsinki","NYC","Vancouver","Brockville","Tokyo","Reykjavik","Stockholm","Frankfurt"];
for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}


// Loops and arrays II
/* It's time for you to write your own array and loop over the array. Remember to:

Put commas between each element in the array.
Put semi-colons between each bit of the for loop.
We suggest you use i as the iterator.
Beware of infinite loops!
Enjoy yourself while smashing through this coding! */

// Practice!!
/*
Create an array called names filled with 5 names.
Write a for loop that prints "I know someone called " followed by names[i]. Make sure there's a space between "called" and the name!
Run your code and the five sentences should print out.
Click "Stuck? Get a hint!" for an example of how to write a for loop.
*/

var names = ["Sara","Nelson","Liam","Agnes","Squeaky"];
for (var i = 0; i < names.length; i++) {
    console.log("I know someone called " + names[i]);
}


// Conclusion
/* You've done an awesome job! Loops are always a little tricky when you first meet them. But they are worth learning because they are really useful.

What now? You have so many useful tricks up your sleeve:

a. if / else statements
b. functions
c. for loops
d. booleans, arrays, variables, etc. */
