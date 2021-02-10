const numberOfBulb = 20;
const DELAY = 500;
const winBulbIndex = 7;

let count = 0;
let arrayOfBulb = [];

document.getElementById("start-btn").addEventListener("click", () => {
  const userInput = document.getElementById("speed").value,
    blinkSpeed = userInput ? userInput : DELAY,
    totalBulb = document.getElementById("total").value;

  console.log(totalBulb, blinkSpeed);

  // creating the bulb
  while (count < totalBulb) {
    const newEl = document.createElement("div");
    newEl.className = "bulb";
    document.getElementById("bulbs").appendChild(newEl);

    arrayOfBulb[count] = false; // switched off bulb
    count++;
  }

  // reset the pointer back to the first bulb
  count = 0;
  arrayOfBulb[count] = true; // switched on bulb
  document.getElementsByClassName("bulb")[count].classList.add("active");
  document.getElementsByClassName("bulb")[winBulbIndex].classList.add("chosen");

  const timer = setInterval(() => {
    // switch off the current bulb
    arrayOfBulb[count] = false;
    document.getElementsByClassName("bulb")[count].classList.remove("active");
    // unless it's the last bulb
    if (count < totalBulb - 1) {
      count++; // get the next bulb in array
    } else {
      count = 0; // reset
    }
    arrayOfBulb[count] = true;
    document.getElementsByClassName("bulb")[count].classList.add("active");
  }, blinkSpeed);

  document.getElementById("stop-btn").addEventListener("click", () => {
    clearInterval(timer);

    if (count === winBulbIndex) {
      alert("win");
    } else {
      alert("no");
    }
  });

  const arrangeBulbsInACircle = (nodes) => {
    const radius = "12em",
      start = -90,
      $els = [...nodes], // turn nodelist into a real array
      numberOfEls = $els.length,
      slide = 360 / numberOfEls,
      index = 0;

    $els.forEach((el, index) => {
      const rotate = slide * index + start;
      const rotateReverse = rotate * -1;

      el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
    });
  };

  // invoke the fn on the class bulb elements to create the effect
  arrangeBulbsInACircle(document.getElementsByClassName("bulb"));
});
