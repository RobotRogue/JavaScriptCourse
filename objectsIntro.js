// Instruction to Objects

// We've come a long, long...

/* If yellow triangle warnings appear in the editor next to any code we provide in any exercise, it is fine to ignore them.

The very basic building block of JavaScript are primitive data types. We know of three primitives:

strings (e.g. "dogs go woof!")
numbers (e.g. 4, 10)
booleans (e.g. false, 5 > 4)

We learned about the use of comparators (eg. >, <=, !==, etc.). One really important thing to note is that any time comparisons are made, a Boolean value is returned. */

// Instructions

/* There is a long and ugly expression in the editor. Overall, it evaluates to a Boolean (i.e., either the entire statement is true, or it is false).

What does this expression in the editor evaluate to?

Declare a variable named answer. Assign to it the Boolean value that the expression evaluates to. Delete the default code in the editor and run your code. */

(((3 * 90) === 270) || !(false && (!false)) || "bex".toUpperCase() === "BEX");

var answer = true;


// Through the hard times...
/* We know two ways of storing data types. We can use variables or arrays.
We use variables to store data (like strings or numbers) that we’d later want to access.

An array is exactly the same as a variable in that it stores data.
The difference is that an array can store many more values while a variable can only store one.

To access arrays, we use bracket notation and remember that arrays use 0-based indexing (i.e., the first value in an array is at position 0). */

// Instructions
/* Look at the array multiplesOfEight, and find the one that doesn't fit.

Replace X in line 6 such that the variable answer is assigned the Boolean value of true. */

// Here is an array of multiples of 8. But is it correct?
var multiplesOfEight = [8,16,24,32,40,58];

// Test to see if a number from the array is NOT a true
// multiple of eight. Real multiples will return false.
var answer = multiplesOfEight[6] % 8 !== 0;


// ...And the good!
/* We're going to play a game of FizzBuzz. The rules are simple. We want to count from 1 to 20. But if the number is divisible by 3, we're going to print "Fizz". And if the number is divisible by 5 we're going to print "Buzz".

What will we print if the number is divisible by 3 AND 5? That's right! "FizzBuzz"!

There are many ways to do this, but we'd like you to use a nested conditional in this exercise. */

// Instructions
/* Print out the numbers from 1 - 20.
The rules:
For numbers divisible by 3, print out "Fizz".
For numbers divisible by 5, print out "Buzz".
For numbers divisible by both 3 and 5, print out "FizzBuzz" in the console.
Otherwise, just print out the number. */

for (var i = 1; i < 21; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// I have to celebrate you baby
/* This exercise has lots of movies and reviews to type in. You might wonder, "Is this teaching coding or typing?!"

But there's a reason why there are so many cases to deal with. We want to show that if we used if-else statements, it would be inefficient.
What alternative to if / else can we use? */

// Instructions
/* Imagine you have a movie collection, and you want to write code that returns your review for each one. Here are the movies and your reviews:

"Toy Story 2" - "Great story. Mean prospector."
"Finding Nemo" - "Cool animation, and funny turtles."
"The Lion King" - "Great songs."

Write a function named getReview that takes in a movie name and returns its review based on the information above.
If given a movie name not found just return "I don't know!". Use a structure learned in an earlier lesson (NOT if/else statements) to write this function. */

var getReview = function (movie) {
    switch(movie) {
      case 'Toy Story 2':
        return("Great story. Mean prospector.");

      case 'Finding Nemo':
        return("Cool animation, and funny turtles.");

      case 'The Lion King':
        return("Great songs.");

      default:
        return("I don't know!");
    }
};


// What's an Object?
/*
We have discussed four data types: numbers, strings, booleans and arrays.

In this lesson, we focus on a fifth data type: objects. This data type is a little bit more complex.
Objects allow us to represent in code real world things and entities (such as a person or bank account).
We do this by storing all relevant information in one place—an object.

How do we create an object? Like declaring a variable, or defining a function, we use var, followed by the name of the object and an equals sign. Each object then:

1) starts with {
2) has information inside
3) ends with };
*/

// Instructions
// Create an object called bob that has no information inside the brackets.

var bob = {};


// Properties
/* Let's review what we previously covered. Each piece of information we include in an object is known as a property.
Think of a property like a category label that belongs to some object.
When creating an object, each property has a name, followed by : and then the value of that property.
For example, if we want Bob's object to show he is 34, we'd type in age: 34.

age is the property, and 34 is the value of this property. When we have more than one property, they are separated by commas.
The last property does not end with a comma. */

// Instructions
// See the console for the object I have created about myself. Can you create an object called me that describes your age and which country you live in?

var Spencer = {
  age: 22,
  country: "United States"
};

var me = {
    age: 37,
    country: "Canada"
};


// Accessing Properties
/* Now that we know how to make objects with properties, let's look at how we actually use them!

Notice our example objects bob and susan. In this case both bob and susan each have two properties, name and age.

After creating our objects we have added code to access these properties.
Notice that we save bob's name, "Bob Smith", into the global variable name1. We do this in line 10. */

// Instructions
// Finish the exercise by filling in the code in lines 13 and 14 to access the name and age for susan and save those into the given global variables.

var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};
// here we save Bob's information
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information
var name2 = susan.name;
var age2 = susan.age;


// Accessing Properties, Part 2
/* In the last exercise, we accessed properties using what is known as dot notation.
Good name, right? So to access a property, we use ObjectName.PropertyName (e.g., bob.name)

In addition to dot notation, we can also access properties using bracket notation.
In this case we use ObjectName["PropertyName"] to access the desired property.
Note, we need " " around the property's name.

Take a look at our next example object called dog.
Notice on line 8 how we save the dog's species into a variable by accessing the species property of dog using bracket notation. */

// Instructions
// Use bracket notation to save the dog's weight and age into variables as well.

// Take a look at our next example object, a dog
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
// fill in the code to save the weight and age using bracket notation
var weight = dog["weight"];
var age = dog["age"];


// Another Way to Create
/* The method we've used to create objects uses object literal notation—that is, creating a new object with { } and defining properties within the brackets.

Another way of creating objects without using the curly brackets { } is to use the keyword new. This is known as creating an object using a constructor.

The new keyword creates an empty object when followed by Object(). The general syntax is: */

var objectName = new Object();

/* We then have to fill this object with properties and labels. How do we do that?
Check out the creation of the object bob to see what we do. We create the name property for the object bob by using bob.name and assigning that to a value.
Contrast this to how we define properties in lines 6-7 for the susan1 object. */

// Instructions
/* Inspect the susan1 object carefully and note the use of object literal notation.

Use constructor notation to create susan2, which should have the same properties and values as susan1. */

// Our bob object again, but made using a constructor this time
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead
var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2.age = 24;


// Putting it all together
/* We've learned how to make objects in two different ways. Both are valid, and you can use which one you prefer.

Let's practice how to use both one more time. */

//Instructions
/* Use literal notation to finish the snoopy object.
Remember literal notation is the one where we fill in { } with separate properties and values with colons.
Each property is separated by a comma.

snoopy should have two properties, a species of "beagle" and age of 10.

Then make buddy, a 5 year-old golden retriever, using constructor notation.
This notation involves using the key word new to create an empty object.
Then we fill it in using dot notation. */

// help us make snoopy using literal notation
// Remember snoopy is a "beagle" and is 10 years old.
var snoopy = {
  species: "beagle",
  age: 10
};

// help make buddy using constructor notation
// buddy is a "golden retriever" and is 5 years old
var buddy = new Object();
buddy.species = "golden retriever";
buddy.age = 5;


// More Practice Making Objects
// Nice job! Let's do one more example to get the hang of making objects with desired properties.

// Instructions
/* Create an object named 'bicycle' that has 3 properties:

a speed of 0
a gear of 1
a frame_material of "carbon fiber" */

var bicycle= {
  speed: 0,
  gear: 1,
  frame_material: "carbon fiber"
};


// The Object Constructor
/* We mentioned the term constructor back in section one, when we talked about making an object using the keyword new.
A constructor is a way to create an object.

When we write bob = new Object( ); we are using a built-in constructor called Object.
This constructor is already defined by the JavaScript language and just makes an object with no properties or methods.

This means we have to add our properties one at a time, just like we've been doing.
To review, we've created bob using the constructor and defined the name property for you. */

// Instructions
// Finish making bob by defining the age property and setting it equal to 20

// here we make bob using the Object constructor
var bob = new Object();
bob.name = "Bob Smith";
// add bob's age here and set it equal to 20
bob.age = 20;


// Custom Constructors
/* But this approach of adding in properties one at a time for every object is tedious!
Instead of always using the boring Object constructor, we can make our own constructors.

This way we can set the properties for an object right when it is created.
So instead of using the Object constructor which is empty and has no properties, we can make our own constructors which have properties.

To see how this works, look at our Person constructor in lines 1–4.
This constructor is used to make Person objects.
Notice it uses the keyword this to define the name and age properties and set them equal to the parameters given.

Now we can use this constructor to make our good friends bob and susan in only one line each!
Look at lines 7–8: once we have the constructor, it's way easier to make people because we can
include their name and age as arguments to their respective constructors. */

// Instructions
// Practice using the constructor to make a new Person called george, whose full name is "George Washington" and age is 275.

function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);


// Try it Out!
