function userCar(licence, brand, model, price, color) {
  this.licence = document.getElementById("licence").value;
  this.brand = document.getElementById("brand").value;
  this.model = document.getElementById("model").value;
  this.price = document.getElementById("price").value;
  this.color = document.getElementById("color").value;
}
document.getElementById("submit-btn").addEventListener("click", userCar);
/* let text = document.querySelector("p");

let car = {
  type: "Audi",
  year: 2020,
  owner: "TNA",
  city: "Hel",
  calAge: function () {
    this.age = 2021 - this.year;
    return this.age;
  },
};
console.log(car.type);
console.log(car.calAge());
text.textContent = `Your car is ${car.calAge()}year old`;

function Bike(brand, price, color, year) {
  this.brandName = brand;
  this.sellingPrice = price;
  this.color = color;
  this.yearProduction = year;
}

let myBike = new Bike("Banana", 1200, "black", 2020);
let myAnotherBike = new Bike("Apple", 1000, "white", 2021);
console.log(myBike, myAnotherBike);
 */
