(function () {
  console.log("hello");
})();

/**
 * ********** PART ONE **********
 * 1.Create an index.html, and include a script.js upon pageload
 * 2.Content of the script.js should be wrapped within a self-executed anonymous function to avoid polluting the page global scope
 * 3.Add to the index.html a table element with 3 columns and 2 rows, first row is the header row that contains the table headings (studentNo, name, age), second row contains your own studentNo, name, and age
 * 4.Create a function name executeScript. Function executeScript should add a new row to the table that contains a test user studentNo, name, and age (maybe 123, test user name, 999) when called. Remember to invoke executeScript function
 * 5.Move the script.js injection to the header part of your index.html, is your code still working?
 * 6.Update your code so that executeScript only gets invoked when the DOMContentLoaded event is detected. Is the testUser now getting added to the table? Why?
 * >>>>> The HTML document is loaded from top to bottom. If the script is loaded before the HTML document, the script will not be able to find the table element which is why executeScript needs to happen after the DOMContentLoaded.
 * //The DOMContentLoaded fires when the DOM content is loaded, without waiting for images and stylesheets to finish loading. DOMContentLoaded event needed when JavaScript file is placed in the head of the page but referencing elements in the body. Bc the DOM hasnt been loaded when the JavaScript engine parses the script in the head, the button with the id btn doesnt exist. */
document.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", executeScript);
});

function executeScript() {
  var table = document.getElementById("myTable");
  var row = table.insertRow();
  var cellStudentNum = row.insertCell();
  var cellName = row.insertCell();
  var cellAge = row.insertCell();
  cellStudentNum.textContent = "1234567";
  cellName.textContent = "Yeehaw";
  cellAge.textContent = "16";
}

/*** ********** PART TWO **********
 * The following function will always return an array of 5 objects containing information of 5 test users to your code, add more if you want
 */
const getUsers = () => [
  {
    studentNo: 123,
    name: "harry",
    age: 15,
  },
  {
    studentNo: 234,
    name: "Ron",
    age: 26,
  },
  {
    studentNo: 135,
    name: "Hermione",
    age: 17,
  },
  {
    studentNo: -1,
    name: "Snape",
    age: 55,
  },
  {
    studentNo: -1,
    name: "Hagrid",
    age: 65,
  },
];
// Q2+Q5.Create a new function addUser that expects a single object of userInfo as parameter & add it to the table
function addUser(userInfo) {
  var newRow = document.createElement("tr");
  var cellIsStaff = ""; // var cellIsStaff = newRow.insertCell();
  userInfo.studentNo < 0
    ? (cellIsStaff = "Staff") //(cellIsStaff.textContent = "Staff")
    : (cellIsStaff = "Student"); //(cellIsStaff.textContent = "Student");
  newRow.innerHTML = `<td>${userInfo.studentNo}</td>
    <td>${userInfo.name}</td>
    <td>${userInfo.age}</td>
    <td>${cellIsStaff}</td>`; //{cellIsStaff.textContent}
  document.querySelector("tbody").appendChild(newRow);
}
// Q3.Iterate through the array of 5 users, call addUser on each iteration
const users = getUsers();
users.forEach((user) => {
  addUser(user);
});

// Q4.Add a new function getOldest() that expects an array of userObject as parameter, when getOldest() is called, it iterates through the array of objects, and return the oldest person in the array according to the age, do NOT use .find() or filter() method or array methods
/* function getOldest(a, b) {
    let comparison = 0;
    if (a.age > b.age) {
      comparison = 1;
    } else if (a.age < b.age) {
      comparison = -1;
    }
    return comparison * -1;
  }
  users.sort(getOldest);
  console.log(users[0]); */
const getOldest = (userObject) => {
  let i = 0;
  for (j = 1; j < userObject.length; j++) {
    userObject[i].age < userObject[j].age ? (i = j) : "";
  }
  return userObject[i];
};

// Q5.Create a new column to the table name isStaff, update your code so that each row in the table will also display an information if the person is a staff or a student. A student always has a non-negative student number, otherwise it is a staff
/* function checkStat(obj) {
    //var columnIsStaff = document.createElement("tr");
    var cell = columnIsStaff.insertCell();
    document.getElementById("myTable").appendChild(columnIsStaff);// 
    var tbHead = document.getElementById("tHead");
    for (var h = 0; h < tbHead.length; h++) {
      var newTH = document.createElement("th");
      tbHead[h].appendChild(newTH);
      newTH.textContent = "Status";
    }
    var tbBody = document.getElementById(obj).tBodies[0];
    for (var i = 0; i < tbBody.rows.length; i++) {
      var newCell = tbBody.rows[i].insertCell();
      tbBody.rows[i].appendChild(newCell);
      obj.studentNo < 0
        ? (newCell.textContent = "Staff")
        : (newCell.textContent = "Student");
    }
  } */
// Q6.Create a button that will sort the list of users according to their age descendingly and re-render the table with sorted content upon click. Do NOT use .sort() method
function sortTbl() {
  for (let i = 1; i < users.length; i++) {
    for (let j = 0; j < i; j++) {
      if (users[i].age > users[j].age) {
        // Swap item position at "i" with "j". Splice to delete item at "i" position and add the item to variable user
        const [user] = users.splice(i, 1);
        // Splice item at "j" position and insert variable user
        users.splice(j, 0, user);
      }
    }
  }
  console.log(users);

  // Clear the table first
  while (myTable.rows.length > 1) {
    myTable.deleteRow(myTable.rows.length - 1);
  }
  // Then re-render sorted table
  users.forEach((user) => addUser(user));
}
document.getElementById("sort").addEventListener("click", sortTbl);
