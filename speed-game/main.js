let circles = document.querySelectorAll(".light");
let over = document.querySelector(".result-over");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let closeBtn = document.getElementById("close");
let score = document.querySelectorAll("#result-score");
let count = 0;

for (let i = 0; i < circles.length; i++) {
  circles[i].onclick = () => {
    clicked(i);
  };
  const clicked = (i) => {
    console.log("clicked", i);
    count++;
    score.innerText = `Your score is ${count}`;
  };
}

let timer;
const startGame = () => {
  startBtn.disabled = true;
  let active, nextActive;
  timer = setTimeout(function pickNew() {
    nextActive = Math.floor(Math.random() * 4);
    timer = setTimeout(pickNew, 1000);
    console.log(nextActive);

    if (active != null) {
      circles[active].classList.remove("active");
    }
    circles[nextActive].classList.add("active");
    active = nextActive;
  }, 1000);
};
startBtn.addEventListener("click", () => {
  console.log("Game started");
  startGame();
});
stopBtn.onclick = () => {
  clearTimeout(timer);
  over.style.visibility = "visible";
};
closeBtn.onclick = () => {
  window.location.reload();
};
