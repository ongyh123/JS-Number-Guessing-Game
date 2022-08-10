const prompt = require('prompt-sync')({sigint: true});

const userName = prompt('What is your name? ') ; 
console.log('Hello ' + userName + ", Let's try to guess a number in my mind. ")
 
// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1;

//To check
//console.log(numberInMind);

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;

while (!foundCorrectNumber) {
  // Step 1: Get user input (don't forget that the input is a string)
  // Step 2: Compare the guess to the secret answer and
  // let the user know the feedback (too large, too small, correct).
  
  const userNumber = prompt ('I have a number in my mind. It is between 0-100, guess it. ');
 
  if (numberInMind == userNumber) {
    console.log("You got it right!");
    foundCorrectNumber = true;
    numberInMind = Math.floor(Math.random() * 100) + 1;

    //To check
    //console.log(numberInMind);

  }

  else if (numberInMind > userNumber) {
    console.log("It's too small. Next guess?");
  }
  
  else if (numberInMind < userNumber) {
    console.log("It's too large. Next guess?");
  }

  else{
    console.log ("That's not a number. Next guess?");
  }

  // Bonus Point: prompt user and provide option for user to start a new game after winning

  if (foundCorrectNumber == true){
      let anotherGame = prompt ('Do you want to play one more time? (Y/N)');
     
      if (anotherGame == "Y"){
          foundCorrectNumber = false;
        }
      else {
          foundCorrectNumber = true;
        } 
      }
}
