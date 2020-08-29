var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lastKnownButtonId = undefined;
var lastKnownButtonNumber = undefined;
var wait = false;
var matches = 0;

var buttons = document.querySelectorAll("button");

//code
numbers = getRandom(numbers, 8);
shuffle(numbers);
distributeNumbers();

for (i = 0; i < buttons.length; i++) {
  // buttons[i].setAttribute("onclick", getSound(buttons[i].dataset.number)); moved to distributeNumbers function
  buttons[i].addEventListener("click", function (e) {
    var turnable = e.target.dataset.turnable;

    //action for first click
    if (
      !wait &&
      lastKnownButtonId == undefined &&
      lastKnownButtonNumber == undefined &&
      turnable == "true"
    ) {
      e.target.dataset.turnable = "false";

      e.target.innerHTML = getgImage(event.target.dataset.number);
      e.target.style.backgroundColor = "orange";

      lastKnownButtonId = e.target.id;
      lastKnownButtonNumber = e.target.dataset.number;
    }

    //action for second click
    else if (
      !wait &&
      lastKnownButtonId != undefined &&
      lastKnownButtonNumber != undefined &&
      turnable == "true" &&
      e.target.id != lastKnownButtonId
    ) {
      e.target.dataset.turnable = "false";

      e.target.innerHTML = getgImage(event.target.dataset.number);

      //if its a match
      if (e.target.dataset.number == lastKnownButtonNumber) {
        e.target.style.backgroundColor = "green";
        document.getElementById(lastKnownButtonId).style.backgroundColor =
          "green";

        lastKnownButtonId = undefined;
        lastKnownButtonNumber = undefined;

        matches++;

        if (matches == 8) {
          showWinScreen();
        }
      }

      //if its not a match
      else {
        document.getElementById(lastKnownButtonId).style.backgroundColor =
          "red";
        e.target.style.backgroundColor = "red";
        wait = true;

        setTimeout(() => {
          e.target.dataset.turnable = "true";
          e.target.style.backgroundColor = "white";
          e.target.innerHTML = getgImage(0);

          var tempLastClickedButton = document.getElementById(
            lastKnownButtonId
          );

          tempLastClickedButton.dataset.turnable = "true";
          tempLastClickedButton.style.backgroundColor = "white";
          tempLastClickedButton.innerHTML = getgImage(0);

          lastKnownButtonId = undefined;
          lastKnownButtonNumber = undefined;
          wait = false;
        }, 1500);
      }
    }
  });
}

//functions

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

  document.getElementById("6").style.display = "none";
  document.getElementById("7").style.display = "none";
  document.getElementById("10").style.display = "none";
  document.getElementById("11").style.display = "none";
}

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

function playAudio(url) {
  new Audio(url).play();
}

function distributeNumbers() {
  for (i = 0; i < buttons.length; i++) {
    buttons[i].dataset.number = numbers[i];
    buttons[i].dataset.turnable = "true";
    buttons[i].setAttribute("onclick", getSound(buttons[i].dataset.number)); //getgsound(0)
  }
}

//get 8 random and double selected number in new array

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
