function numbCheck() {
  let result = document.getElementById("result");
  let numb = document.querySelector("#number").value;
  event.preventDefault();
  if (numb > 0 && numb % 2 == 0) {
    console.log(numb);
    result.textContent = `${numb} is an even number`;
  } else if (numb < 0) {
    result.textContent = `${numb} is a negative number`;
  } else {
    result.textContent = `${numb} is an odd number`;
  }
}
