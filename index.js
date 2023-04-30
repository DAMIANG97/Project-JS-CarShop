const $OfferButtons = document.querySelectorAll(".OfferButtons");
const $fordMustang = document.getElementById("fordMustang");
const $audiTT = document.getElementById("audiTT");
const $audiA6 = document.getElementById("audiA6");
const $mercedesMaybach = document.getElementById("mercedesMaybach");

let mustang = {
  price: 50000,
  carName: "Ford Mustang",
  carImage: "assets/fordMustang.jpg",
};
let audiTT = {
  price: 15000,
  carName: "Audi TT",
  carImage: "assets/audiTT.png",
};
let audiA6 = {
  price: 50000,
  carName: "Audi A6",
  carImage: "assets/audiA6.png",
};
let maybach = {
  price: 350000,
  carName: "Mercedes Maybach",
  carImage: "assets/mercedesMAYBACH.png",
};

let carPrice = 0;
let wheelsAmount = 0;
let guaranteeYears = 0;
let carName;
let carImage;

///////////////////////////////////// go to purchase form
$OfferButtons.forEach((e2) => {
  e2.addEventListener("click", () => {
    window.location.href = "form.html";
  });
});
//////////////////////////////////// go to purchase form

///////////////////////////////////////////////////////////////////// follow price and name

$fordMustang.addEventListener("click", () => {
  carPrice = mustang.price;
  carName = mustang.carName;
  carImage = mustang.carImage;
  localStorage.setItem("carPrice", carPrice);
  localStorage.setItem("WheelsAmount", wheelsAmount);
  localStorage.setItem("GuaranteeYears", guaranteeYears);
  sessionStorage.setItem("CarName", carName);
  sessionStorage.setItem("CarImage", carImage);
});
$audiTT.addEventListener("click", () => {
  carPrice = audiTT.price;
  carName = audiTT.carName;
  carImage = audiTT.carImage;
  localStorage.setItem("carPrice", carPrice);
  localStorage.setItem("WheelsAmount", wheelsAmount);
  localStorage.setItem("GuaranteeYears", guaranteeYears);
  sessionStorage.setItem("CarName", carName);
  sessionStorage.setItem("CarImage", carImage);
});
$audiA6.addEventListener("click", () => {
  carPrice = audiA6.price;
  carName = audiA6.carName;
  carImage = audiA6.carImage;
  localStorage.setItem("carPrice", carPrice);
  localStorage.setItem("WheelsAmount", wheelsAmount);
  localStorage.setItem("GuaranteeYears", guaranteeYears);
  sessionStorage.setItem("CarName", carName);
  sessionStorage.setItem("CarImage", carImage);
});
$mercedesMaybach.addEventListener("click", () => {
  carPrice = maybach.price;
  carName = maybach.carName;
  carImage = maybach.carImage;
  localStorage.setItem("carPrice", carPrice);
  localStorage.setItem("WheelsAmount", wheelsAmount);
  localStorage.setItem("GuaranteeYears", guaranteeYears);
  sessionStorage.setItem("CarName", carName);
  sessionStorage.setItem("CarImage", carImage);
});

////////////////////////////////////////////////////////////////// follow price and name
