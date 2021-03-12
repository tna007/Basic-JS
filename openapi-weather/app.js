/* const api = {
  key: "fa799ef40abb0d87c993a99c71f70b04",
  base: "https://api.openweathermap.org/data/2.5/",
}; */

const baseAPI = config.MY_base;
const keyAPI = config.MY_key;

let result = document.getElementsByClassName("result");
let searchInput = document.querySelector(".search-text");
let cityName = document.getElementById("result-city");
let temp = document.querySelector(".result-temperature");
let stat = document.querySelector(".result-status");

searchInput.addEventListener("keypress", getVal);

//get input value after Enter
function getVal(e) {
  if (e.keyCode == 13) {
    // keyCode 13 is Enter key on the keyboard
    console.log(searchInput.value);
    getWeather(searchInput.value);
  }
}

function getWeather(location) {
  fetch(`${baseAPI}weather?q=${location}&appid=${keyAPI}`)
    .then((resp) => resp.json()) //Promise pending stage
    .then(displayWeather);
}

function displayWeather(data) {
  console.log(data); //access json file
  cityName.textContent = data.name;
  temp.innerHTML = `${Math.floor(data.main.temp)}<span>F</span>`;
  stat.textContent = data.weather[0].description;
}
