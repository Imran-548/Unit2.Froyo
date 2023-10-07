// Prompt the user for a list of flavors separated by commas.
const userInputString = prompt(
  "Please enter your flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

const choices = [];
for (let i = 0; i < stringArray.length; i++) {
  choices.push(stringArray[i]);
}

const flavors = { vanilla: 0, strawberry: 0, coffee: 0 };

function countorders(choices) {
  for (let i = 0; i < choices.length; i++) {
    if (choices[i] == vanilla) {
      flavors.vanilla += 1;
    } else if (choices[i] == strawberry) {
      flavors.strawberry += 1;
    } else if (choices[i] == coffee) {
      flavors.coffee += 1;
    }
  }
  return flavors;
}
console.log(choices);
console.log(flavors);
console.log(`You have given ${countorders(choices)} numbers.`);
