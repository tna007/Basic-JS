let result = document.getElementById("result");
let start = document.getElementById("start");
let end = document.getElementById("end");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  event.preventDefault();
  let date1 = Date.parse(start.value);
  let date2 = Date.parse(end.value);
  console.log(date1, date2);
  result.textContent = `There are ${
    (date2 - date1) / (1000 * 3600 * 24)
  } days left`;
});
