let carName = sessionStorage.getItem("CarName");
let carImage = sessionStorage.getItem("CarImage");
const $backToList = document.querySelectorAll(".BackToList");

const $hiddeform = document.querySelectorAll(".hiddeForm");
const $hiddenSummary = document.querySelectorAll(".hiddenSummary");
const $buyButton = document.getElementById("buyButton");
const $errorMsg = document.getElementById("error-msg");
const $leasingRadio = document.getElementById("LeasingRadio");
const $cashRadio = document.getElementById("CashRadio");
const $wheelMinusBtn = document.getElementById("wheelMinusBtn");
const $wheelPlusBtn = document.getElementById("wheelPlusBtn");
const $guaranteeMinusBtn = document.getElementById("guaranteeMinusBtn");
const $guaranteePlusBtn = document.getElementById("guaranteePlusBtn");
let $wheelsAmount = document.getElementById("wheelsAmount");
let $guaranteeYears = document.getElementById("guaranteeYears");

document.getElementById("nameInput").value = getSavedValue("nameInput");
document.getElementById("placeInput").value = getSavedValue("placeInput");
document.getElementById("CashRadio").checked = getSavedValue("CashRadio");
document.getElementById("LeasingRadio").checked = getSavedValue("LeasingRadio");
document.getElementById("date").value = getSavedValue("date");

let wheelsAmount = localStorage.getItem("WheelsAmount");
let guaranteeYears = localStorage.getItem("GuaranteeYears");
let carPrice = localStorage.getItem("carPrice");
$carPrice = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${carPrice} PLN`;
$wheelsAmount = document.getElementById("wheelsAmount").innerHTML = `Opony zimowe: ${wheelsAmount} szt`;
$guaranteeYears = document.getElementById("guaranteeYears").innerHTML = `Dodatkowy rok gwarancji ${guaranteeYears} lat`;
$carName = document.getElementById("carChoose").innerHTML = "Wybrane auto: " + carName;

$priceSummary = document.getElementById("totalpriceSummary").innerHTML = `Cena auta wraz z akcesoriami: ${carPrice} PLN`;
$carNameSummary = document.getElementById("carChooseSummary").innerHTML = `Gratulujemy zakupu samochodu ${carName}!`;
document.getElementById("imgSummary").src = carImage;

let twoweeks = new Date();
twoweeks.setDate(twoweeks.getDate() + 14);
date.min = new Date(twoweeks).toISOString().split("T")[0];

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

function saveChecked(e) {
  let id = e.id;
  let checked = e.checked;
  localStorage.setItem(id, checked);
}

function getSavedChecked(v) {
  if (!localStorage.getItem(v)) {
    return "";
  }
  return localStorage.getItem(v);
}

////////////////////////////////////////////////////////////////// accesories

$wheelMinusBtn.addEventListener("click", () => {
  if (wheelsAmount > 0) {
    carPrice = carPrice - 2000;
    localStorage.setItem("carPrice", carPrice);
    $carPrice = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${carPrice} PLN`;

    wheelsAmount = wheelsAmount - 1;
    localStorage.setItem("WheelsAmount", wheelsAmount);
    $wheelsAmount = document.getElementById("wheelsAmount").innerHTML = `Opony zimowe: ${wheelsAmount} szt`;
  }
});

$wheelPlusBtn.addEventListener("click", () => {
  carPrice = carPrice - -2000;
  localStorage.setItem("carPrice", carPrice);
  $carPrice = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${carPrice} PLN`;

  wheelsAmount = wheelsAmount - -1;
  localStorage.setItem("WheelsAmount", wheelsAmount);
  $wheelsAmount = document.getElementById("wheelsAmount").innerHTML = `Opony zimowe: ${wheelsAmount} szt`;
});

$guaranteeMinusBtn.addEventListener("click", () => {
  if (guaranteeYears > 0) {
    carPrice = carPrice - 5000;
    $carPrice = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${carPrice} PLN`;
    localStorage.setItem("carPrice", carPrice);

    guaranteeYears = guaranteeYears - 1;
    localStorage.setItem("GuaranteeYears", guaranteeYears);
    $guaranteeYears = document.getElementById("guaranteeYears").innerHTML = `Dodatkowy rok gwarancji ${guaranteeYears} lat`;
  }
});

$guaranteePlusBtn.addEventListener("click", () => {
  carPrice = carPrice - -5000;
  $carPrice = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${carPrice} PLN`;
  localStorage.setItem("carPrice", carPrice);

  guaranteeYears = guaranteeYears - -1;
  localStorage.setItem("GuaranteeYears", guaranteeYears);
  $guaranteeYears = document.getElementById("guaranteeYears").innerHTML = `Dodatkowy rok gwarancji: ${guaranteeYears} lat`;
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
    $hiddeform.forEach((e2) => {
      e2.classList.toggle("hiddenSummary");
    });
    $hiddenSummary.forEach((e1) => {
      e1.classList.toggle("hiddenSummary");
    });
  }
});
///////////////////////////////////////////////////////////////////// buy button

///////////////////////////////////////////////////////////////////// back buttons
$backToList.forEach((e3) => {
  e3.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });
});
///////////////////////////////////////////////////////////////////// back buttons
