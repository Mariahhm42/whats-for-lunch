const whatToDoForLunch = function(hungry, availableTime) {
  console.log("I don't know what to do!");
  if (!hungry)
    console.log("Go back to work, you're not hungry!")
  
  else 
    if (availableTime < 20)
      console.log ("Pick something else and eat it in the lab")
  
    else if (availableTime >= 20 && availableTime <= 30)
      console.log("Try a new place nerarby")
    else {
        console.log ("You're in a Bootcamp, reconsider how much time ou have to spare")
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

//Output I'm hungry and I have 20 minutes for lunch.
// I don't know what to do!
// Try a new place nerarby
// ---
// I'm hungry and I have 50 minutes for lunch.
// I don't know what to do!
// You're in a Bootcamp, reconsider how much time ou have to spare
// ---
// I'm not hungry and I have 30 minutes for lunch.
// I don't know what to do!
// Go back to work, you're not hungr!
// ---
// I'm hungry and I have 15 minutes for lunch.
// I don't know what to do!
// Pick something else and eat it in the lab
