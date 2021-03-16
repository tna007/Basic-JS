const circles = document.querySelectorAll(".light");
const over = document.querySelector(".result-over");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const closeBtn = document.getElementById("close");
let DELAY = 1000;
let score = document.querySelector(".score");
let display = document.querySelector(".result-display");
let count = 0;
currentLight = 0;
let timer;
newLight;

function pickNewLight() {
  newLight = pickRandom(currentLight); //step 1

  circles[newLight].classList.add("on"); // *stack 1st (step 5)
  circles[currentLight].classList.remove("on"); // *stack 2nd

  currentLight = newLight; // *stack 3rd

  function pickRandom(currentLight) {
    //step 2
    newLight = Math.floor(Math.random() * 4); //step 3

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
      if (circle.classList == "light on") {
        count++;
        score.textContent = count;
      } else {
        clearGame();
      }
    });
  });
}

function clearGame() {
  clearTimeout(timer);
  circles[newLight].classList.remove("on");
  over.style.visibility = "visible";
}
stopBtn.addEventListener("click", clearGame);

startBtn.addEventListener("click", () => {
  console.log("Game started");
  pickNewLight();
  checkClick();
});
closeBtn.onclick = () => {
  window.location.reload();
};
