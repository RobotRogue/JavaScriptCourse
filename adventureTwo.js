// Code Your Own Adventure 2

/* We told you this was just the beginning of our game empire!
Now that you know more about JavaScript, you'll be able to create a much richer "choose your own adventure" game. */

// Course Code:
/*
var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch (troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if (strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if (money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if (fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}
*/

// My Code:

var user = prompt ("Hey, I'm asking you a question here.", "Respond here, scumbag.");

// .toUpperCase() and .toLowerCase()

/* You may have noticed us use the .toUpperCase() function in the first exercise. We used it like this:

 var answer = prompt("Question to the user").toUpperCase();

This converted the user's answer to ALL CAPS before saving it in the answer variable.
This helps eliminate problems that might crop up if your program tests for 'YES' but your user typed in 'yes' or 'Yes'.
The input becomes all caps before we test, so we only have to test for all caps!

You can also use .toLowerCase(), which converts a string to all lower-case letters.*/

var user = prompt ("Hey, I'm asking you a question here.", "Respond here, scumbag.").toUpperCase();

// Switch!

/* After your prompt, add a switch statement that will test for several different cases (that is, different possible user inputs).
Create as many as you like! (Do at least three.)
Don't forget to include a default block at the end that will provide a response if the user's choice doesn't match one of your cases. */

var user = prompt ("You're trying to escape from some zombies, do you Fight them? Do you Hide? Or do you Run?", "Fight? Hide? Run?").toUpperCase();

switch (user) {
    case 'FIGHT':
        var item1 = prompt ("Do you have a weapon?").toUpperCase();
        var item2 = prompt ("Think you can destroy the brain?").toUpperCase();
        if (item1 === "YES" && item2 === "YES") {
                console.log ("Do you have a weapon - " + item1);
                console.log ("Do you think you can destroy the brain - " + item2);
                console.log ("You used your weapon and really messed that sucker up!");
            } else {
                console.log ("Do you have a weapon - " + item1);
                console.log ("Do you think you can destroy the brain - " + item2);
                console.log ("You tried to fight, but you lost - now you're a Zombie snack!");
            }
            break;

    case 'HIDE':
        var item3 = prompt ("Is there somewhere safe to hide?").toUpperCase();
        var item4 = prompt ("Can you get indoors and block the door?").toUpperCase();
        if (item3 === "YES" || item4 === "YES") {
                console.log ("Do you think there is somewhere safe to hide - " + item3);
                console.log ("Do you think you can get indoors and block the door - " + item4);
                console.log ("You dive for cover, and the zombie loses track of you and ambles away! ");
            } else {
                console.log ("Do you think there is somewhere safe to hide - " + item3);
                console.log ("Do you think you can get indoors and block the door - " + item4);
                console.log ("Not very good at this 'survival' thing, are ya?");
            }
            break;

    case 'RUN':
        var item5 = prompt ("Have you kept up on your cardio?").toUpperCase();
        var item6 = prompt ("Are you wearing good shoes?").toUpperCase();
        if (item5 === "YES" && item6 === "YES") {
                console.log ("Do you think you have kept up with your cardio - " + item5);
                console.log ("Do you think you are wearing good shoes - " + item6);
                console.log ("You make a break for it, and outrun that zombie with ease!");
            } else if (item5 === "NO" && item6 === "YES") {
                console.log ("Do you think you have kept up with your cardio - " + item5);
                console.log ("Do you think you are wearing good shoes - " + item6);
                console.log ("You're lucky you've got good shoes on, you barely outrun Mr. Zombie!");
            } else if (item5 === "YES" && item6 === "NO"){
                console.log ("Do you think you have kept up with your cardio - " + item5);
                console.log ("Do you think you are wearing good shoes - " + item6);
                console.log ("You barely got away, but your feet won't last forever.");
            } else {
                console.log ("Do you think you have kept up with your cardio - " + item5);
                console.log ("Do you think you are wearing good shoes - " + item6);
                console.log("Should have planned ahead! You're dead meat!");
            }
            break;

    default:
        console.log ("You didn't choose correctly, now you're zombie dinner!");
    }

// Have fun playing the game!!
