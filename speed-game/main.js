const circles = document.querySelectorAll(".light");
const over = document.querySelector(".result-over");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const closeBtn = document.getElementById("close");
let DELAY = 1000;
let score = document.querySelector(".score");
let display = document.querySelector(".result-display");
let count = 0;

const startGame = () => {
  startBtn.disabled = true;
  let currentLight, newLight;
  let timer = setTimeout(function pickNew() {
    newLight = Math.floor(Math.random() * 4);

    if (currentLight == newLight) {
      newLight != 3 ? newLight++ : (newLight = 0);
    }
    circles[newLight].classList.toggle("on"); // add classList

    if (currentLight != undefined) {
      circles[currentLight].classList.toggle("on"); //remove classList
    }
    currentLight = newLight;
    timer = setTimeout(pickNew, DELAY); //recursion to start looping
  }, DELAY);
  let clicked = false;
  circles.forEach((circle) => {
    circle.addEventListener("click", () => {
      if (circle.classList == "light on" && (clicked = true)) {
        count++;
        score.textContent = `Your score is: ${count}`;
      } else {
        clearGame();
      }
    });
  });



  function clearGame() {
    clearTimeout(timer);
    circles[newLight].classList.toggle("on");
    over.style.visibility = "visible";
  }
  stopBtn.addEventListener("click", clearGame);
};
startBtn.addEventListener("click", () => {
  console.log("Game started");
  startGame();
});
closeBtn.onclick = () => {
  window.location.reload();
};
