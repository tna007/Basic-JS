const circles = document.querySelectorAll(".light");
const over = document.querySelector(".result-over");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const closeBtn = document.getElementById("close");
let scoreDisplay = document.querySelector(".score");

let DELAY = 1000;
let countBlinked = 0;
currentLight = 0;
score = 0;
let missClicked = [];
let timer, newLight, clickSound, mySound;
let clicked = false; // allow only one click on blink light

function audio(src) {
  this.audio = document.createElement("audio");
  this.audio.src = src;
  this.audio.style.display = "none";
  this.audio.preload = "auto";
  document.body.appendChild(this.audio);
  this.play = function () {
    this.audio.play();
  };
  this.stop = function () {
    this.audio.pause();
  };
}

clickSound = new audio("./sound/Stock.mp3");
mySound1 = new audio("./sound/WOODY_05.mp3");
mySound2 = new audio("./sound/HAMM_01.mp3");
mySound3 = new audio("./sound/WOODY_12.mp3");

function pickNewLight() {
  newLight = pickRandom(currentLight); //step 1

  circles[newLight].classList.add("on"); // *stack 1st (step 5)
  circles[currentLight].classList.remove("on"); // *stack 2nd

  countBlinked++;
  missClicked.push(countBlinked);
  missClicked.length > 3 ? clearGame() : missClicked;

  currentLight = newLight; // *stack 3rd

  function pickRandom(currentLight) {
    //step 2
    newLight = Math.floor(Math.random() * 4); //step 3
    clicked = false;
    if (newLight != currentLight) {
      //step 4
      return newLight; // return back to execute stack in order
    } else {
      return pickRandom(currentLight); //recursion
    }
  }
  timer = setTimeout(pickNewLight, DELAY); //final step
}

function checkClick() {
  circles.forEach((circle) => {
    circle.addEventListener("click", () => {
      if (circle.classList == "light on" && clicked == false) {
        score++;
        scoreDisplay.textContent = `Your score ${score}`;
        clicked = true;
        clickSound.audio.play();
        missClicked = [];
        DELAY -= 10;
      } else {
        score = score;
        clearGame();
      }
    });
  });
}

function clearGame() {
  clearTimeout(timer);
  circles[newLight].classList.remove("on");
  over.style.visibility = "visible";
  if (score <= 3) {
    mySound3.play();
  } else if (score <= 7 && score > 3) {
    mySound2.play();
  } else if (score > 7) {
    mySound1.play();
  }
  if (mySound1.currentTime > 0) {
    mySound1.stop();
  } else if (mySound2.currentTime > 0) {
    mySound2.stop();
  } else if (mySound3.currentTime > 0) {
    mySound3.stop();
  }
}

stopBtn.addEventListener("click", () => {
  clearGame;
});

startBtn.addEventListener("click", () => {
  console.log("Game started");
  pickNewLight();
  checkClick();
});

closeBtn.onclick = () => {
  window.location.reload();
};
