let operation = document.querySelectorAll(".operators > div");

for (let i = 0; i < operation.length; i++) {
  operation[i].onclick = function () {
    clicked(i);
  };
}

function clicked(i) {
  switch (i) {
    case "+":
      operation = "plus";
      break;
    case "-":
      operation = "minus";
      break;
    case "*":
      operation = "multiply";
      break;
    case "/":
      operation = "divide";
      break;
  }
}
