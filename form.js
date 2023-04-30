var carName = sessionStorage.getItem("CarName");
var carImage = sessionStorage.getItem("CarImage");
const $backToList = document.querySelectorAll(".BackToList");

const $hiddeform = document.querySelectorAll(".hiddeForm");
const $hidden = document.querySelectorAll(".hidden");
const $buy = document.getElementById("buy");
const $errorMsg = document.getElementById("error-msg");
const $leasingRadio = document.getElementById("LeasingRadio");
const $cashRadio = document.getElementById("CashRadio");
const $back = document.getElementById("back");
const $wheelMinus = document.getElementById("wheelMinus");
const $wheelPlus = document.getElementById("wheelPlus");
const $guaranteeMinus = document.getElementById("guaranteeMinus");
const $guaranteePlus = document.getElementById("guaranteePlus");
let $wheelsAmount = document.getElementById("wheelsAmount");
let $guaranteeYears = document.getElementById("guaranteeYears");

document.getElementById("name").value = getSavedValue("name");
document.getElementById("place").value = getSavedValue("place");
document.getElementById("CashRadio").checked = getSavedValue("CashRadio");
document.getElementById("LeasingRadio").checked = getSavedValue("LeasingRadio");
document.getElementById("date").value = getSavedValue("date");

let wheelsAmount = localStorage.getItem("WheelsAmount");
let guaranteeYears = localStorage.getItem("GuaranteeYears");
let price = localStorage.getItem("Price");
$price = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${price} PLN`;
$wheelsAmount = document.getElementById("wheelsAmount").innerHTML = `Opony zimowe: ${wheelsAmount} szt`;
$guaranteeYears = document.getElementById("guaranteeYears").innerHTML = `Dodatkowy rok gwarancji ${guaranteeYears} lat`;
$carName = document.getElementById("carChoose").innerHTML = "Wybrane auto: " + carName;

$priceSummary = document.getElementById("totalpriceSummary").innerHTML = `Cena auta wraz z akcesoriami: ${price} PLN`;
$carNameSummary = document.getElementById("carChooseSummary").innerHTML = `Gratulujemy zakupu samochodu ${carName}!`;
document.getElementById("imgSummary").src = carImage;

function saveValue(e) {
  var id = e.id;
  var val = e.value;
  localStorage.setItem(id, val);
}

function getSavedValue(v) {
  if (!localStorage.getItem(v)) {
    return "";
  }
  return localStorage.getItem(v);
}

function saveChecked(e) {
  var id = e.id;
  var checked = e.checked;
  localStorage.setItem(id, checked);
}

function getSavedChecked(v) {
  if (!localStorage.getItem(v)) {
    return "";
  }
  return localStorage.getItem(v);
}

////////////////////////////////////////////////////////////////// accesories

$wheelMinus.addEventListener("click", () => {
  price = price - 2000;
  localStorage.setItem("Price", price);
  $price = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${price} PLN`;

  wheelsAmount = wheelsAmount - 1;
  localStorage.setItem("WheelsAmount", wheelsAmount);
  $wheelsAmount = document.getElementById("wheelsAmount").innerHTML = `Opony zimowe: ${wheelsAmount} szt`;
});

$wheelPlus.addEventListener("click", () => {
  price = price - -2000;
  localStorage.setItem("Price", price);
  $price = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${price} PLN`;

  wheelsAmount = wheelsAmount - -1;
  localStorage.setItem("WheelsAmount", wheelsAmount);
  $wheelsAmount = document.getElementById("wheelsAmount").innerHTML = `Opony zimowe: ${wheelsAmount} szt`;
});

$guaranteeMinus.addEventListener("click", () => {
  price = price - 5000;
  $price = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${price} PLN`;
  localStorage.setItem("Price", price);

  guaranteeYears = guaranteeYears - 1;
  localStorage.setItem("GuaranteeYears", guaranteeYears);
  $guaranteeYears = document.getElementById("guaranteeYears").innerHTML = `Dodatkowy rok gwarancji ${guaranteeYears} lat`;
});

$guaranteePlus.addEventListener("click", () => {
  price = price - -5000;
  $price = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${price} PLN`;
  localStorage.setItem("Price", price);

  guaranteeYears = guaranteeYears - -1;
  localStorage.setItem("GuaranteeYears", guaranteeYears);
  $guaranteeYears = document.getElementById("guaranteeYears").innerHTML = `Dodatkowy rok gwarancji: ${guaranteeYears} lat`;
});
/////////////////////////////////////////////////////////////////// accesories

/////////////////////////////////////////////////////////////////// buy button
$buy.addEventListener("click", () => {
  const nameInput = document.getElementById("name").value.trim();
  const placeInput = document.getElementById("place").value.trim();
  const dateInput = document.getElementById("date").value;

  if (nameInput.length === 0 || placeInput.length === 0 || dateInput.length === 0) {
    $errorMsg.textContent = "Error: All fields are required!";
  } else if (nameInput.split(" ").length !== 2) {
    $errorMsg.textContent = "Error: Name field must contain two strings separated by a space!";
  } else if (!$leasingRadio.checked && !$cashRadio.checked) {
    $errorMsg.textContent = "Error: Please select a payment method!";
  } else {
    $errorMsg.textContent = "";
    const $radioButtons = document.querySelectorAll('input[name="payChoose"]');
    for (const radioButton of $radioButtons) {
      if (radioButton.checked) {
        $selectPaySummary = document.getElementById("payChooseSummary").innerHTML = `Wybrana metoda płatności: ${radioButton.value}.`;
      }
    }
    $price2 = document.getElementById("totalpriceSummary").innerHTML = `Cena auta wraz z akcesoriami: ${price} PLN`;
    $hiddeform.forEach((e2) => {
      e2.classList.toggle("hidden");
    });
    $hidden.forEach((e1) => {
      e1.classList.toggle("hidden");
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
