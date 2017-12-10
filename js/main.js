/*
EVENT LISTENER
IN BUTTONS
*/

//SUBMIT ANSWER BUTTON
var guessSubmit = document.querySelector('#guessSubmit'); // access to user answer input in the form
guessSubmit.addEventListener('click', userAnswer); // listening the event of click on the submit button of the answer


//SAVE NAME AND TRIALS BUTTON
var userNameSubmit = document.getElementById("saveName");
userNameSubmit.addEventListener('click', trackScore);


/*
DEFINING
VARIABLES
*/
var trials = 0;
var trialsDisplay = document.querySelector('#trials');
var feedback = document.querySelector("#feedBack");
feedback.innerHTML = "Escribe un número del 1 al 100 y dale a prueba!";
var score = document.querySelector(".score");
var upper = 100;
var randomNumber = generateRandomNumber(100);
var historyGame = [];




/*
FUNCTIONS
*/

//GENERATE RANDOM NUMBER
function generateRandomNumber(upper) {
  var getRandomNumber = Math.ceil ( Math.random() * upper ) + 1; // Variable only works inside function,if variable is outside is executed automatically
  return getRandomNumber;
}


// TRACK AND SHOW NUMBER OF TRIALS
function trialInformation () {
  trials += 1;
  trialsDisplay.innerHTML = trials;
}


// DISABLE GUESS BUTTON, SHOW INPUT FOR NAME
function buttonDisable () {
  //Disable guess submit form
  document.getElementById("guessSubmit").disabled = true;

  //Show name submit form
  document.getElementById("nameSubmit").style.display = "inline";
  document.getElementById("saveName").style.display = "inline";

}


// ENABLE GUESS BUTTON, HIDE INPUT FOR NAME
function buttonEnable () {
  document.getElementById("guessSubmit").disables = false; // enable submit button per deffect
  document.getElementById("guessSubmit").disabled = false;
  document.getElementById("nameSubmit").style.display = "none";
  document.getElementById("saveName").style.display = "none";
  document.getElementById("guessInput").elements[2].value = '';
}


//RESTART GAME

function restartGame () {
  document.getElementById("guessInput").elements[0].value = "";
  randomNumber = Math.ceil(Math.random() * 100) + 1;
  buttonEnable ();
  trials = 0;
  trialsDisplay.innerHTML = "";
  feedback.style.color = "#016FB9";
  feedback.innerHTML = "Escribe un número del 1 al 100 y dale a prueba!";


}



// Showing the user messages depending on his answer
function userAnswer () {
  var input = document.getElementById("guessInput").elements[0].value;

  if (isNaN(input)) { // para indicar al usuario que no se ha equivocado intruduciendo letras
    feedback.style.color = "#F34213";
    feedBack.innerHTML = input + "no es un número, por favor introduzca un número del 1 al 100";

    document.getElementById("guessInput").elements[0].value = "";
    throw new Error ("This is not a number"); // cuando ponemos esto se para el programa
  }

  else if (parseInt(input) === randomNumber ) {
    feedback.style.color = "green";
    feedBack.innerHTML = "Felicidades has acertado .Número random es: " + randomNumber;
    document.getElementById("guessInput").elements[0].value = "";
    trialInformation ();
    buttonDisable();


  } else if (parseInt(input) > randomNumber) {
    feedback.style.color = "#F34213";
    feedBack.innerHTML= "El número introducido es menor. Random es: "+ randomNumber;
    document.getElementById("guessInput").elements[0].value = "";
    trialInformation ();


  } else {
    feedback.style.color = "#F34213";
    feedBack.innerHTML = "El número introducido es mayor. random es: "+ randomNumber;
    document.getElementById("guessInput").elements[0].value = "";
    trialInformation ();
  }
}


// Saving the name and score of the user and restarting game

function trackScore() {
  var userName = document.getElementById("guessInput").elements[2].value;
  var trackGameList = {
    name: userName,
    trials: trials,
  }
  historyGame.push(trackGameList);
  var list = '';
  for (var i = 0; i < historyGame.length; i++) {
    list += '<li>' + historyGame[i].name + ' - ' + historyGame[i].trials +
            ' intento' + ((historyGame[i].trials > 1) ? 's' : '') + '</li>';
            // la version cortita para no liarlo mucho con una pijollada
  }
  score.innerHTML = list;
  restartGame();
};
