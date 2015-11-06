// You know this!

// You already know about arrays, so we won't spend a lot of time going over them. Go ahead and check out the past exercises on arrays if you need a refresher.

// Instructions
// Create an array called list in the editor. It can contain any data you want! Make sure it has at least three elements.

var list = ["Shorts","Shoes","Singlets"];


// Access by offset
// Good! Do you remember how to access an element of an array by offset (with the [] notation)? Check the Hint if you need help.

var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log (languages[2]);


// Array properties
// Good work! If you remember, arrays have a property in common with strings: they can both use .length.
// When you call .length on an array, it returns the number of elements that array has.
// Under your existing code, log the number of elements in languages to the console.

var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log (languages.length);


// Iterating over an array
// By combining all these ideas with a for loop, you can iterate over the languages array and print out each element in turn!
// Go ahead and use a for loop to log each element of the languages array to the console.

var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for (var i = 0; i < languages.length; i++) {
  console.log (languages[i]);
}


// Heterogeneous arrays
/*
Now that we've reviewed some array basics, it's time to cover a little new ground.

First, it's not necessary for you to put the same type of data in an array! For instance, you don't have to have

var pronouns = ["I", "you", "we"];
var numbers = [1, 2, 3];
You can have a heterogeneous array, which means a mixture of data types, like so:

var mix = [42, true, "towel"];
*/

// Instructions
// Create a heterogeneous array called myArray with at least three elements.
// The first element should be a number, the second should be a boolean (true or false), and the third should be a string.
// Feel free to add more elements of any type if you like!

var myArray = [42, true, "towel"];


// 
