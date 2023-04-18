const $offer = document.querySelectorAll(".offer");

const $hidden2 = document.querySelectorAll(".hidden2");
const $fordMustang = document.getElementById("fordMustang");
const $audiTT = document.getElementById("audiTT");
const $audiA6 = document.getElementById("audiA6");
const $mercedesMaybach = document.getElementById("mercedesMaybach");
const $buy = document.getElementById("buy");
const $errorMsg = document.getElementById("error-msg");
const leasingRadio = document.getElementById("leasing-radio");
const cashRadio = document.getElementById("cash-radio");

const $wheelMinus = document.getElementById("wheelMinus");
const $wheelPlus = document.getElementById("wheelPlus");
const $guaranteeMinus = document.getElementById("guaranteeMinus");
const $guaranteePlus = document.getElementById("guaranteePlus");
const $wheelsAmount = document.getElementById("wheelsAmount");
const $guaranteeYears = document.getElementById("guaranteeYears");

///////////////////////////////////// go to purchase form
$offer.forEach((e2) => {
  e2.addEventListener("click", () => {
    $offer.forEach((e1) => {
      e1.classList.toggle("hidden");
    });
    $hidden2.forEach((e1) => {
      e1.classList.toggle("hidden");
    });
  });
});
//////////////////////////////////// go to purchase form
ljk;
const mustang = "Ford Mustang";
const audiTT = "Audi TT";
const audiA6 = "Audi A6";
const maybach = "Mercedes Maybach";
var priceMustang = 50000;
var priceTT = 15000;
var priceA6 = 50000;
var priceMaybach = 350000;
var price;
var wheelsAmount = 0;
var guaranteeYears = 0;

///////////////////////////////////////////////////////////////////// follow price and name

$fordMustang.addEventListener("click", () => {
  price = priceMustang;
  const $price = (document.getElementById(
    "totalprice"
  ).innerHTML = `Cena całkowita: ${price}  PLN`);
  const $carName = (document.getElementById("carChoose").innerHTML =
    "Wybrane auto: " + mustang);
});
$audiTT.addEventListener("click", () => {
  price = priceTT;
  const $price = (document.getElementById(
    "totalprice"
  ).innerHTML = `Cena całkowita: ${price} PLN`);
  const $carName = (document.getElementById("carChoose").innerHTML =
    "Wybrane auto: " + audiTT);
});
$audiA6.addEventListener("click", () => {
  price = priceA6;
  const $price = (document.getElementById(
    "totalprice"
  ).innerHTML = `Cena całkowita: ${price} PLN`);
  const $carName = (document.getElementById("carChoose").innerHTML =
    "Wybrane auto: " + audiA6);
});
$mercedesMaybach.addEventListener("click", () => {
  price = priceMaybach;
  const $price = (document.getElementById(
    "totalprice"
  ).innerHTML = `Cena całkowita: ${price} PLN`);
  const $carName = (document.getElementById("carChoose").innerHTML =
    "Wybrane auto: " + maybach);
});

////////////////////////////////////////////////////////////////// follow price and name

////////////////////////////////////////////////////////////////// accesories

$wheelMinus.addEventListener("click", () => {
  price = price - 2000;
  const $price = (document.getElementById(
    "totalprice"
  ).innerHTML = `Cena całkowita: ${price} PLN`);

  wheelsAmount = wheelsAmount - 1;
  const $wheelsAmount = (document.getElementById(
    "wheelsAmount"
  ).innerHTML = `Opony zimowe: ${wheelsAmount} szt`);
});

$wheelPlus.addEventListener("click", () => {
  price = price + 2000;
  const $price = (document.getElementById(
    "totalprice"
  ).innerHTML = `Cena całkowita: ${price} PLN`);

  wheelsAmount = wheelsAmount + 1;
  const $wheelsAmount = (document.getElementById(
    "wheelsAmount"
  ).innerHTML = `Opony zimowe: ${wheelsAmount} szt`);
});

$guaranteeMinus.addEventListener("click", () => {
  price = price - 5000;
  const $price = (document.getElementById(
    "totalprice"
  ).innerHTML = `Cena całkowita: ${price} PLN`);

  guaranteeYears = guaranteeYears - 1;
  const $guaranteeYears = (document.getElementById(
    "guaranteeYears"
  ).innerHTML = `Dodatkowy rok gwarancji ${guaranteeYears} lat`);
});

$guaranteePlus.addEventListener("click", () => {
  price = price + 5000;
  const $price = (document.getElementById(
    "totalprice"
  ).innerHTML = `Cena całkowita: ${price} PLN`);

  guaranteeYears = guaranteeYears + 1;
  const $guaranteeYears = (document.getElementById(
    "guaranteeYears"
  ).innerHTML = `Dodatkowy rok gwarancji: ${guaranteeYears} lat`);
});

/////////////////////////////////////////////////////////////////// accesories

$buy.addEventListener("click", () => {
  const nameInput = document.getElementById("name").value.trim();
  const placeInput = document.getElementById("place").value.trim();
  const dateInput = document.getElementById("date").value;

  if (
    nameInput.length === 0 ||
    placeInput.length === 0 ||
    dateInput.length === 0
  ) {
    $errorMsg.textContent = "Error: All fields are required!";
  } else if (nameInput.split(" ").length !== 2) {
    $errorMsg.textContent =
      "Error: Name field must contain two strings separated by a space!";
  } else if (!leasingRadio.checked && !cashRadio.checked) {
    $errorMsg.textContent = "Error: Please select a payment method!";
  } else {
    $errorMsg.textContent = "";
  }
});

// localStorage.setItem("hiddenClass", $oferta);
//  $oferta = localStorage.getItem("hiddenClass");

// $tak.addEventListener("click", () => {
//   $oferta.forEach((e1) => {
//     e1.classList.toggle("hidden");
//   });
// });
