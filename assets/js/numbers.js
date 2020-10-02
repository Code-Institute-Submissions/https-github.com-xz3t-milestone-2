var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lastKnownButtonId = undefined;
var lastKnownButtonNumber = undefined;
var wait = false;
var matches = 0;
var playSound = false;

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
      return '<img src="assets/images/card_0.jpg">';
    case "1":
      return '<img src="assets/images/card_1.jpg">';
    case "2":
      return '<img src="assets/images/card_2.jpg">';
    case "3":
      return '<img src="assets/images/card_3.jpg">';
    case "4":
      return '<img src="assets/images/card_4.jpg">';
    case "5":
      return '<img src="assets/images/card_5.jpg">';
    case "6":
      return '<img src="assets/images/card_6.jpg">';
    case "7":
      return '<img src="assets/images/card_7.jpg">';
    case "8":
      return '<img src="assets/images/card_8.jpg">';
    case "9":
      return '<img src="assets/images/card_9.jpg">';
    default:
      return '<img src="assets/images/card_back.jpg">';
  }
}

//return a sound for each number

function getSound(number) {
  switch (number) {
    case "0":
      return "playAudio('assets/sounds/0_number_morse_code.mp3')";
    case "1":
      return "playAudio('assets/sounds/1_number_morse_code.mp3')";
    case "2":
      return "playAudio('assets/sounds/2_number_morse_code.mp3')";
    case "3":
      return "playAudio('assets/sounds/3_number_morse_code.mp3')";
    case "4":
      return "playAudio('assets/sounds/4_number_morse_code.mp3')";
    case "5":
      return "playAudio('assets/sounds/5_number_morse_code.mp3')";
    case "6":
      return "playAudio('assets/sounds/6_number_morse_code.mp3')";
    case "7":
      return "playAudio('assets/sounds/7_number_morse_code.mp3')";
    case "8":
      return "playAudio('assets/sounds/8_number_morse_code.mp3')";
    case "9":
      return "playAudio('assets/sounds/9_number_morse_code.mp3')";
    default:
      return " ";
  }
}
function mute(){
	playSound = false;
}

function unMute(){
	playSound = true;
}


function playAudio(url) {
	if (playSound  == true) {
 	 new Audio(url).play();
	}
	else { 
	playSound == false
}
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
  let m = n * 2;
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }

  //create new array with double the size of initial array
  let i,
    j = 0;
  let resultDouble = new Array(m);
  for (i = 0; i < result.length; i++) {
    resultDouble[j] = result[i];
    resultDouble[j + 1] = result[i];
    j = j + 2;
  }
  return resultDouble;
}

//shuffle the array
function shuffle(array) {
  let j, x, i;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
}

