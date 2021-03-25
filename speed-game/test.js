const circles = document.querySelectorAll(".light");
const over = document.querySelector(".result-over");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const closeBtn = document.getElementById("close");
let scoreDisplay = document.querySelector(".score");
let scoreResult = document.getElementById("score-result");

let DELAY = 1000;
let countBlinked = 0;
currentLight = 0;
score = 0;
counter = 0;
let missClicked = [];
let timer, newLight;
let clicked = false; // allow only one click on blink light

clickSound = new Audio("./sound/Stock.mp3");
mySound1 = new Audio("./sound/WOODY_05.mp3");
mySound2 = new Audio("./sound/HAMM_01.mp3");
mySound3 = new Audio("./sound/WOODY_12.mp3");

function pickNewLight() {
  newLight = pickRandom(currentLight); //step 1

  circles[newLight].classList.add("on"); // *stack 1st (step 5)
  circles[currentLight].classList.remove("on"); // *stack 2nd
  countBlinked++;
  missClicked.push(countBlinked);
  console.log(missClicked);

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
  console.log(DELAY);
  missClicked.length > 3 ? clearGame() : missClicked;
}

function checkClick() {
  circles.forEach((circle) => {
    circle.addEventListener("click", () => {
      if (circle.classList == "light on" && clicked == false) {
        score++;
        scoreDisplay.textContent = `SCORE ${score}`;
        clicked = true;
        clickSound.play();
        missClicked = [];
        DELAY -= 20;
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
  score <= 2 && score >= 0
    ? mySound3.play()
    : score <= 6 && score > 2
    ? mySound2.play()
    : mySound1.play();

  mySound3.currentTime > 0
    ? mySound3.pause()
    : mySound2.currentTime > 0
    ? mySound2.pause()
    : mySound1.currentTime > 0
    ? mySound1.pause()
    : "";

  scoreResult.innerHTML = `<h4>Your score ${score}</h4>
  `;
}

const startGame = () => {
  pickNewLight();
  checkClick();
};

startBtn.addEventListener("click", () => {
  startBtn.textContent = "STOP";
  counter++;
  counter > 1 ? clearGame() : startGame();
});

closeBtn.onclick = () => {
  window.location.reload();
};
