// What you'll be building
/*
In this project, you'll be writing a short program that checks a block of text for your name.
Specifically, it will check the text for the first letter of your name, then push (add) the
number of characters equal to your name's length to an array. By inspecting the array, you'll
be able to see if your name was mentioned! Once you've got the hang of loops, arrays, and
if statements, we'll talk about ways this project could be improved.
*/

/*jshint multistr:true */

text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}

// Declare your variables
/* We'll start by declaring the three variables we'll be using: text, myName, and hits.

Since text could be quite long, you can use a backslash (\) at the end of each line to make your string "wrap" to the next line, like this:

var text = "Hey, how are you \
doing? My name is Emily.";
In this way, using backlashes (\) is useful because you can avoid really long lines!

You can ignore the /*jshint... line for now. All that does is tell the console to stop worrying about our use of backslash characters for wrapping long lines of text. */

// Ok, let's get coding!
/*
Declare and set the following three variables:

text, and make it a string containing some text. Place your name in there a couple of times!
myName, and make it a string containing just your name.
hits, and make it an empty array.
*/

/*jshint multistr:true */

var text = "This is some text. \ Nelson really likes text. \ Sara does too. \ But Nelson likes it more so we are coding this way. \ Also they wanted me to use my name which is Nelson.";
var myName = "Nelson";
var hits = [];


// Ok, let's add that FOR loop!
/*
Below your existing code, create a for loop that starts at 0, continues until it reaches the end of text, and increments by 1 each time.
(This means it will check each character in the string.) There's no need to write anything between the {}s of your loop just yet.
*/

var text = "This is some text. \ Nelson really likes text. \ Sara does too. \ But Nelson likes it more so we are coding this way. \ Also they wanted me to use my name which is Nelson.";
var myName = "Nelson";
var hits = [];

for(var i = 0; i < text.length; i++) {
    // Nothing To do yet
    };


// The IF statement:
/*
We'll want to place the if statement inside our for loop to make sure the program checks the if statement each time it moves forward through the loop.
Essentially, the for loop is saying: "Hey program! Go through every letter in 'text'." The if statement will say: if you see something interesting,
push that text into an array!"

You can treat a string like an array of characters. For instance, you know that
*/
var myArray = ['hello', 'world'];
myArray[0];    // equals 'hello'

// But this also works on strings!

var myName = 'Eric';
myName[0];    // equals 'E'
*/

// Now get coding!!
/*
Add your if statement in the body of your for loop. It should check to see whether the current letter is equal to the first letter of your name. (Capitalization counts!)

There's no need to put anything between the {}s of your if just yet.
*/

/*jshint multistr:true */

var text = "This is some text. \ Nelson really likes text. \ Sara does too. \ But Nelson likes it more so we are coding this way. \ Also they wanted me to use my name which is Nelson.";
var myName = "Nelson";
var hits = [];

for(var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        //CODEBLOCK
        };
    };


// Ok that was hard...
// Your second "for" loop
/*
Okay! Last loopy step: add another for loop, this time inside the body of your if statement (between the if's {}s).

This loop will make sure each character of your name gets pushed to the final array. The if statement says: "If we find the first letter of the name, start the second for loop!" This loop says: "I'm going to add characters to the array until I hit the length of the user's name." So if your name is 11 letters long, your loop should add 11 characters to hits if it ever sees the first letter of myName in text.

For your second for loop, keep the following in mind:

First, you'll want to set your second loop's iterator to start at the first one, so it picks up where that one left off. If your first loop starts with
*/
for(var i = 0; // rest of loop setup

// your second should be something like

for(var j = i; // rest of loop setup

/* Second, think hard about when your loop should stop. Check the Hint if you get stuck!

Finally, in the body of your loop, have your program use the .push() method of hits. Just like strings and arrays have a .length method, arrays have a .push() method that adds the thing between parentheses to the end of the array. For example, */

newArray = [];
newArray.push('hello');
newArray[0];   // equals 'hello'

// Now, add that second for loop inside the body of your if statement:

/*jshint multistr:true */

var text = "This is some text. \ Nelson really likes text. \ Sara does too. \ But Nelson likes it more so we are coding this way. \ Also they wanted me to use my name which is Nelson.";
var myName = "Nelson";
var hits = [];

for(var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        for(var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
            };
        };
    };


// Logging Your Results
/*
You've now got the engine of your search program running. It will:

Loop through the array,
Compare each letter to the first letter of your name, and if it sees that letter:
It will push that letter and all the letters that follow it to an array, stopping when the number of letters it pushes are equal to the number of letters in your name.
*/

/*jshint multistr:true */

var text = "This is some text. \ Nelson really likes text. \ Sara does too. \ But Nelson likes it more so we are coding this way. \ Also they wanted me to use my name which is Nelson.";
var myName = "Nelson";
var hits = [];

for(var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        for(var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
            };
        };
    };
if (hits.length <= 0) {
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
}


// Victory!!
/*
You've done it! Nice work.

Now, as we mentioned, this system isn't perfect.
For instance, if the paragraph contains both "Eric" and "Eddie", we'll see this in our hits array:

['E','r','i','c','E','d','d','i','e'];

Think about how you might fine-tune this program to make sure it only finds exact matches for your name.
Search the Internet to see if there are any built-in JavaScript string methods that can help!
*/

// Next Lesson: WhileLoops
