function agecalculator() {
  let age = Number(document.querySelector("#age").value);

  let answer = document.getElementById("answer");
  let text;

  if (age > 55) {
    text = "too aged";
  } else if (age > 41) {
    text = "backup";
  } else if (age > 27) {
    text = "reserve";
  } else if (age > 18) {
    text = "bingo";
  } else {
    text = "too young";
  }

  answer.textContent = text;
}
