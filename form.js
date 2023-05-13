let carName = sessionStorage.getItem("CarName");
let carImage = sessionStorage.getItem("CarImage");
const $backToList = document.querySelectorAll(".BackToList");

const $plusMinusBt = document.querySelectorAll(".plusMinusBt");
const $hiddeform = document.querySelectorAll(".hiddeForm");
const $hiddenSummary = document.querySelectorAll(".hiddenSummary");
const $buyButton = document.getElementById("buyButton");
const $errorMsg = document.getElementById("error-msg");
const $leasingRadio = document.getElementById("LeasingRadio");
const $cashRadio = document.getElementById("CashRadio");
const $radioButtons = document.getElementsByName("payChoose");
const $selectedValue = localStorage.getItem("selectedRadioButton");
const $wheelMinusBtn = document.getElementById("wheelMinusBtn");
const $wheelPlusBtn = document.getElementById("wheelPlusBtn");
const $guaranteeMinusBtn = document.getElementById("guaranteeMinusBtn");
const $guaranteePlusBtn = document.getElementById("guaranteePlusBtn");

document.getElementById("nameInput").value = getSavedValue("nameInput");
document.getElementById("placeInput").value = getSavedValue("placeInput");
document.getElementById("date").value = getSavedValue("date");

let wheelsAmount = localStorage.getItem("WheelsAmount");
let guaranteeYears = localStorage.getItem("GuaranteeYears");
let carPrice = localStorage.getItem("carPrice");
let $carPrice = (document.getElementById("totalprice").innerHTML = `Cena całkowita: ${carPrice} PLN`);
let $wheelsAmount = (document.getElementById("wheelsAmount").innerHTML = `Opony zimowe: ${wheelsAmount} szt`);
let $guaranteeYears = (document.getElementById("guaranteeYears").innerHTML = `Dodatkowy rok gwarancji ${guaranteeYears} lat`);
let $carName = (document.getElementById("carChoose").innerHTML = "Wybrane auto: " + carName);

let $priceSummary = (document.getElementById("totalpriceSummary").innerHTML = `Cena auta wraz z akcesoriami: ${carPrice} PLN`);
let $carNameSummary = (document.getElementById("carChooseSummary").innerHTML = `Gratulujemy zakupu samochodu ${carName}!`);
document.getElementById("imgSummary").src = carImage;

////////////////////////////////////////////////////////////////// form date
let twoweeks = new Date();
twoweeks.setDate(twoweeks.getDate() + 14);
date.min = new Date(twoweeks).toISOString().split("T")[0];
////////////////////////////////////////////////////////////////// form date

////////////////////////////////////////////////////////////////// localStorage for form (date & text)
function saveValue(e) {
  let id = e.id;
  let val = e.value;
  localStorage.setItem(id, val);
}

function getSavedValue(v) {
  if (!localStorage.getItem(v)) {
    return "";
  }
  return localStorage.getItem(v);
}
////////////////////////////////////////////////////////////////// localStorage for form (date & text)

////////////////////////////////////////////////////////////////// localStorage for form (radioButtons)
if ($selectedValue) {
  for (let i = 0; i < $radioButtons.length; i++) {
    if ($radioButtons[i].value === $selectedValue) {
      $radioButtons[i].checked = true;
      break;
    }
  }
}

for (let i = 0; i < $radioButtons.length; i++) {
  $radioButtons[i].addEventListener("change", function () {
    localStorage.setItem("selectedRadioButton", this.value);
  });
}
////////////////////////////////////////////////////////////////// localStorage for form (radioButtons)

////////////////////////////////////////////////////////////////// accesories
$plusMinusBt.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonID = button.id;

    if (wheelsAmount > 0) {
      if (buttonID === "wheelMinusBtn") {
        carPrice = carPrice - 2000;
        wheelsAmount = wheelsAmount - 1;
      }
    }

    if (buttonID === "wheelPlusBtn") {
      carPrice = carPrice - -2000;
      wheelsAmount = wheelsAmount - -1;
    }

    if (guaranteeYears > 0) {
      if (buttonID === "guaranteeMinusBtn") {
        carPrice = carPrice - 5000;
        guaranteeYears = guaranteeYears - 1;
      }
    }

    if (buttonID === "guaranteePlusBtn") {
      carPrice = carPrice - -5000;
      guaranteeYears = guaranteeYears - -1;
    }

    localStorage.setItem("carPrice", carPrice);
    $carPrice = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${carPrice} PLN`;
    localStorage.setItem("WheelsAmount", wheelsAmount);
    $wheelsAmount = document.getElementById("wheelsAmount").innerHTML = `Opony zimowe: ${wheelsAmount} szt`;
    localStorage.setItem("GuaranteeYears", guaranteeYears);
    $guaranteeYears = document.getElementById("guaranteeYears").innerHTML = `Dodatkowy rok gwarancji ${guaranteeYears} lat`;
  });
});
/////////////////////////////////////////////////////////////////// accesories

/////////////////////////////////////////////////////////////////// buy button

$buyButton.addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput").value.trim();
  const placeInput = document.getElementById("placeInput").value.trim();
  const dateInput = document.getElementById("date").value;

  if (nameInput.length === 0 || placeInput.length === 0 || dateInput.length === 0) {
    $errorMsg.textContent = "Błąd: Należy wypełnić wszystkie pola!";
  } else if (nameInput.split(" ").length !== 2) {
    $errorMsg.textContent = "Błąd: Pole Imię i nazwisko musi zawierać imię i nazwisko odzielone spacją!";
  } else if (!$leasingRadio.checked && !$cashRadio.checked) {
    $errorMsg.textContent = "Błąd: Proszę wybrać metodę płatności!";
  } else {
    $errorMsg.textContent = "";
    const $radioButtons = document.querySelectorAll('input[name="payChoose"]');
    for (const radioButton of $radioButtons) {
      if (radioButton.checked) {
        $selectPaySummary = document.getElementById("payChooseSummary").innerHTML = `Wybrana metoda płatności: ${radioButton.value}.`;
      }
    }
    $priceSummary = document.getElementById("totalpriceSummary").innerHTML = `Cena auta wraz z akcesoriami: ${carPrice} PLN`;
    $hiddeform.forEach((e) => {
      e.classList.toggle("hiddenSummary");
    });
    $hiddenSummary.forEach((e) => {
      e.classList.toggle("hiddenSummary");
    });
  }
});
///////////////////////////////////////////////////////////////////// buy button

///////////////////////////////////////////////////////////////////// back buttons
$backToList.forEach((e) => {
  e.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "index.html";
  });
});
///////////////////////////////////////////////////////////////////// back buttons
