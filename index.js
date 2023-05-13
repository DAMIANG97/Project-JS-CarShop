const $carsContainer = document.getElementById("carsContainer");

////////////////////////////////////////// car objects
let cars = {
  fordMustang: {
    price: 50000,
    carName: "Ford Mustang",
    carImage: "assets/fordMustang.jpg",
    carPower: 300,
    carDate: 2015,
    carTravelkm: 113000,
  },
  audiTT: {
    price: 15000,
    carName: "Audi TT",
    carImage: "assets/audiTT.png",
    carPower: 180,
    carDate: 1999,
    carTravelkm: 259000,
  },
  audiA6: {
    price: 50000,
    carName: "Audi A6",
    carImage: "assets/audiA6.png",
    carPower: 280,
    carDate: 2018,
    carTravelkm: 120000,
  },
  mercedesMaybach: {
    price: 350000,
    carName: "Mercedes Maybach",
    carImage: "assets/mercedesMAYBACH.png",
    carPower: 530,
    carDate: 2015,
    carTravelkm: 56641,
  },
};
////////////////////////////////////////// car objects

let carPrice = 0;
let wheelsAmount = 0;
let guaranteeYears = 0;
let carName;
let carImage;

////////////////////////////////////////// create cars div in html
Object.keys(cars).forEach((carId) => {
  const car = cars[carId];
  const carDiv = document.createElement("div");
  carDiv.innerHTML = `
<button id="${carId}" class="OfferButtons">
  <img src="${car.carImage}" />
  <b>${car.carName}</b>
  <a>${car.carDate}, ${car.carTravelkm} km</a>
  <a>${car.carPower} KM</a>
  <p></p>
  <b>${car.price} PLN</b>
  <p></p>
</button>
`;
  $carsContainer.appendChild(carDiv);
});
////////////////////////////////////////// create cars div in html

const $offerButtons = document.querySelectorAll(".OfferButtons");

////////////////////////////////////////// storage and next page
$offerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const car = cars[button.id];
    carPrice = car.price;
    carName = car.carName;
    carImage = car.carImage;
    localStorage.setItem("carPrice", carPrice);
    localStorage.setItem("WheelsAmount", wheelsAmount);
    localStorage.setItem("GuaranteeYears", guaranteeYears);
    sessionStorage.setItem("CarName", carName);
    sessionStorage.setItem("CarImage", carImage);
    window.location.href = "form.html";
  });
});
////////////////////////////////////////// storage and next page
