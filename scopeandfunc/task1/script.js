(function () {
  console.log("hello");
})();
//The DOMContentLoaded fires when the DOM content is loaded, without waiting for images and stylesheets to finish loading.
//DOMContentLoaded event needed when JavaScript file is placed in the head of the page but referencing elements in the body.
//Bc the DOM hasnt been loaded when the JavaScript engine parses the script in the head, the button with the id btn doesnt exist
document.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", executeScript);
});

function executeScript() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(2);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.textContent = "1234567";
  cell2.textContent = "Yeehaw";
  cell3.textContent = "16";
}
