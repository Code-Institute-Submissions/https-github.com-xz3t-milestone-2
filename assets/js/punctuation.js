var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var lastKnownButtonId = undefined;
var lastKnownButtonNumber = undefined;
var wait = false;
var matches = 0;

const buttons = document.querySelectorAll("button");

// run intialization script
function initGame() {
  numbers = getRandom(numbers, 8); //get 8 random numbers from 0-9
  shuffle(numbers);
  distributeNumbers();

  for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
      let turnable = e.target.dataset.turnable;

      if (
        !wait &&
        lastKnownButtonId == undefined &&
        lastKnownButtonNumber == undefined &&
        turnable == "true"
      ) {
        executeOnFirstClick(e); //
      }

      //action for second click
      else if (
        !wait &&
        lastKnownButtonId != undefined &&
        lastKnownButtonNumber != undefined &&
        turnable == "true" &&
        e.target.id != lastKnownButtonId
      ) {
        executeOnSecondClick(e);
      }
    });
  }
}

function executeOnFirstClick(e) {
  e.target.dataset.turnable = "false"; //set turnable false so this card cant be clicked again

  e.target.innerHTML = getgImage(event.target.dataset.number); //turn the image
  e.target.style.backgroundColor = "orange"; // change background to orange

  lastKnownButtonId = e.target.id;
  lastKnownButtonNumber = e.target.dataset.number; // save turned card for matching on executeOnSecondClick function
}

function executeOnSecondClick(e) {
  e.target.dataset.turnable = "false"; //set turnable false so this card cant be clicked again

  e.target.innerHTML = getgImage(event.target.dataset.number); //turn the image

  if (e.target.dataset.number == lastKnownButtonNumber) {
    executeOnMatch(e);
  } else {
    executeOnMismatch(e);
  }
}

function executeOnMatch(e) {
  e.target.style.backgroundColor = "green"; //set 2nd turned card green background
  document.getElementById(lastKnownButtonId).style.backgroundColor = "green"; // set 1st turned card green background

  lastKnownButtonId = undefined;
  lastKnownButtonNumber = undefined;

  matches++;

  if (matches == 8) {
    showWinScreen(); // when 8 matches show win screen with reset button
  }
}

function executeOnMismatch(e) {
  document.getElementById(lastKnownButtonId).style.backgroundColor = "red"; //set 1st turned card red background
  e.target.style.backgroundColor = "red"; //set 2nd turned card red background
  wait = true;

  //create a delay between clicking on cards (delay also needed for sound to play for the card)
  setTimeout(() => {
    e.target.dataset.turnable = "true";
    e.target.style.backgroundColor = "white";
    e.target.innerHTML = getgImage(0);

    let tempLastClickedButton = document.getElementById(lastKnownButtonId);

    tempLastClickedButton.dataset.turnable = "true";
    tempLastClickedButton.style.backgroundColor = "white";
    tempLastClickedButton.innerHTML = getgImage(0);

    lastKnownButtonId = undefined;
    lastKnownButtonNumber = undefined;
    wait = false;
  }, 1500);
}

function reset() {
  lastKnownButtonId = undefined;
  lastKnownButtonNumber = undefined;
  wait = false;
  shuffle(numbers);
  distributeNumbers();
  matches = 0;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = getgImage(0);
    buttons[i].style.backgroundColor = "white";

    document.querySelector(".win-container").style.display = "none";

    document.getElementById("6").style.display = "block";
    document.getElementById("7").style.display = "block";
    document.getElementById("10").style.display = "block";
    document.getElementById("11").style.display = "block";
  }
}

// showWinScreen();

function showWinScreen() {
  document.querySelector(".win-container").style.display = "flex";

  // hide cards to display win screen
  document.getElementById("6").style.display = "none";
  document.getElementById("7").style.display = "none";
  document.getElementById("10").style.display = "none";
  document.getElementById("11").style.display = "none";
}

// return an image for each number

function getgImage(number) {
  switch (number) {
    case "0":
      return '<img src="assets/images/card_Ampersand.jpg">';
    case "1":
      return '<img src="assets/images/card_Apostrope.jpg">';
    case "2":
      return '<img src="assets/images/card_At.jpg">';
    case "3":
      return '<img src="assets/images/card_Colon.jpg">';
    case "4":
      return '<img src="assets/images/card_Comma.jpg">';
    case "5":
      return '<img src="assets/images/card_Dollar.jpg">';
    case "6":
      return '<img src="assets/images/card_Equals.jpg">';
    case "7":
      return '<img src="assets/images/card_Exclamation.jpg">';
    case "8":
      return '<img src="assets/images/card_Hyphen.jpg">';
    case "9":
      return '<img src="assets/images/card_ParanthesisClose.jpg">';
    case "10":
      return '<img src="assets/images/card_ParanthesisOpen.jpg">';
    case "11":
      return '<img src="assets/images/card_Period.jpg">';
    case "12":
      return '<img src="assets/images/card_Plus.jpg">';
    case "13":
      return '<img src="assets/images/card_Question.jpg">';
    case "14":
      return '<img src="assets/images/card_Quotation.jpg">';
    case "15":
      return '<img src="assets/images/card_Slash.jpg">';
    case "16":
      return '<img src="assets/images/card_Underscore.jpg">';
    default:
      return '<img src="assets/images/card_back.jpg">';
  }
}

//return a sound for each number

function getSound(number) {
  switch (number) {
    case "0":
      return "playAudio('assets/sounds/Morse_Code_-_Ampersand.mp3')";
    case "1":
      return "playAudio('assets/sounds/Morse_Code_-_Apostrope.mp3')";
    case "2":
      return "playAudio('assets/sounds/Morse_Code_-_At_(Commercial_At).mp3')";
    case "3":
      return "playAudio('assets/sounds/Morse_Code_-_Colon.mp3')";
    case "4":
      return "playAudio('assets/sounds/Morse_Code_-_Comma.mp3')";
    case "5":
      return "playAudio('assets/sounds/Morse_Code_-_Dollar_Sign.mp3')";
    case "6":
      return "playAudio('assets/sounds/Morse_Code_-_Equals.mp3')";
    case "7":
      return "playAudio('assets/sounds/Morse_Code_-_Exclamation_Point.mp3')";
    case "8":
      return "playAudio('assets/sounds/Morse_Code_-_Hyphen,_Minus.mp3')";
    case "9":
      return "playAudio('assets/sounds/Morse_Code_-_Parenthesis_(Close).mp3')";
    case "10":
      return "playAudio('assets/sounds/Morse_Code_-_Parenthesis_(Open).mp3')";
    case "11":
      return "playAudio('assets/sounds/Morse_Code_-_Period.mp3')";
    case "12":
      return "playAudio('assets/sounds/Morse_Code_-_Plus.mp3')";
    case "13":
      return "playAudio('assets/sounds/Morse_Code_-_Question_Mark.mp3')";
    case "14":
      return "playAudio('assets/sounds/Morse_Code_-_Quotation_Mark.mp3')";
    case "15":
      return "playAudio('assets/sounds/Morse_Code_-_Slash.mp3')";
    case "16":
      return "playAudio('assets/sounds/Morse_Code_-_Underscore.mp3')";
    default:
      return " ";
  }
}

function playAudio(url) {
  new Audio(url).play();
}

//set the sound and images for each card

function distributeNumbers() {
  for (i = 0; i < buttons.length; i++) {
    buttons[i].dataset.number = numbers[i];
    buttons[i].dataset.turnable = "true"; // change to true so card can be turned again
    buttons[i].setAttribute("onclick", getSound(buttons[i].dataset.number)); // asign sounds to each card
  }
}

//get array of 0-9 numbers and pick 8 numbers
function getRandom(arr, n) {
  var m = n * 2;
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }

  //create new array with double the size of initial array
  var i,
    j = 0;
  var resultDouble = new Array(m);
  for (i = 0; i < result.length; i++) {
    resultDouble[j] = result[i];
    resultDouble[j + 1] = result[i];
    j = j + 2;
  }
  return resultDouble;
}

//shuffle the array
function shuffle(array) {
  var j, x, i;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
}
