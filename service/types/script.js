let distance = document.getElementById("distance");
let totalPrice = document.getElementById("total-price");
function showDistance(dis) {
  let disInKm = (dis * 1.60934).toFixed(2); // in KM
  console.log(disInKm);
  let total = (disInKm * 11.5).toFixed(0);
  distance.setAttribute("value", `${disInKm} KM`);
  totalPrice.setAttribute("value", `Rs ${total}`);
}

function calDistance(from, to) {
  let url = `http://www.mapquestapi.com/directions/v2/alternateroutes?key=ZxdHO5ZpZ7R90j7CYnlXb1HA0vlWQClW&from=${from},Uttarakhand&to=${to},Uttarakhand&maxRoutes=2&timeOverage=100`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDistance(data.route.distance));
}

let name = document.getElementById("name");
let phone = document.getElementById("phone");
let pickup = document.getElementById("pickup");
let drop = document.getElementById("drop");
let seat = document.getElementById("seat-select");
let date = document.getElementById("date");
let time = document.getElementById("time");
let economical = document.getElementById("economical");
let luxury = document.getElementById("luxury");

function getUserData() {
  console.log(name.value);
  console.log(phone.value);
  console.log(pickup.value);
  console.log(drop.value);
  console.log(seat.value);
  console.log(date.value);
  console.log(time.value);
  console.log(economical.checked);
  console.log(luxury.checked);

  distance.setAttribute("value", `0 KM`);
  totalPrice.setAttribute("value", `Rs 0`);
  calDistance(pickup.value, drop.value);
}

document.getElementById("detail-form").addEventListener("submit", (e) => {
  e.preventDefault();
  getUserData();
});
