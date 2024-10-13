const whatToDoForLunch = function(hungry, availableTime) {
  if (!hungry)
    console.log("Go back to work, you're not hungry!");
  else 
    if (availableTime < 20)
      console.log ("Pick something else and eat it in the lab");

    else if (availableTime >= 20 && availableTime <= 30)
      console.log("Try a new place nearby")
    else {
        console.log ("You're in a Bootcamp, reconsider how much time you have to spare");
      }
};

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);

//Output 
// I'm hungry and I have 20 minutes for lunch.
// Try a new place nearby
// ---
// I'm hungry and I have 50 minutes for lunch.
// You're in a Bootcamp, reconsider how much time you have to spare
// ---
// I'm not hungry and I have 30 minutes for lunch.
// Go back to work, you're not hungry!
// ---
// I'm hungry and I have 15 minutes for lunch.
// Pick something else and eat it in the lab
