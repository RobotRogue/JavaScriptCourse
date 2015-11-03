// What you'll be building
/* Now that you know how to use while loops, we'll combine them with some other
control flow statements (like if/else) to create a dragon slaying mini game.

In this game, you’ll battle a dragon. It will take 4 hits to slay the dragon,
and if you miss even one hit, the dragon will defeat you! */

/* Check out the code below. Do you understand how it works?
(No worries if not—we'll go through it step-by-step!)

Run it a few times to see how you fare against the dragon! */

var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;

    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}

// ...
