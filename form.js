var price = sessionStorage.getItem("Price");
var carName = sessionStorage.getItem("CarName");
var carImage = sessionStorage.getItem("CarImage");
const backToList = document.getElementById("BackToList");

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
var $wheelsAmount = document.getElementById("wheelsAmount");
var $guaranteeYears = document.getElementById("guaranteeYears");

var wheelsAmount = 0;
var guaranteeYears = 0;

$price = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${price} PLN`;
$carName = document.getElementById("carChoose").innerHTML = "Wybrane auto: " + carName;

$price2 = document.getElementById("totalprice2").innerHTML = `Cena auta wraz z akcesoriami: ${price} PLN`;
$carName2 = document.getElementById("carChoose2").innerHTML = `Gratulujemy zakupu samochodu ${carName}!`;
document.getElementById("imgSummary2").src = carImage;

backToList.addEventListener("click", () => {
  window.location.href = "index.html";
});

////////////////////////////////////////////////////////////////// accesories

$wheelMinus.addEventListener("click", () => {
  price = price - 2000;
  $price = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${price} PLN`;

  wheelsAmount = wheelsAmount - 1;
  $wheelsAmount = document.getElementById("wheelsAmount").innerHTML = `Opony zimowe: ${wheelsAmount} szt`;
});

$wheelPlus.addEventListener("click", () => {
  price = price - -2000;
  $price = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${price} PLN`;

  wheelsAmount = wheelsAmount + 1;
  $wheelsAmount = document.getElementById("wheelsAmount").innerHTML = `Opony zimowe: ${wheelsAmount} szt`;
});

$guaranteeMinus.addEventListener("click", () => {
  price = price - 5000;
  $price = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${price} PLN`;

  guaranteeYears = guaranteeYears - 1;
  $guaranteeYears = document.getElementById("guaranteeYears").innerHTML = `Dodatkowy rok gwarancji ${guaranteeYears} lat`;
});

$guaranteePlus.addEventListener("click", () => {
  price = price - -5000;
  $price = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${price} PLN`;

  guaranteeYears = guaranteeYears + 1;
  $guaranteeYears = document.getElementById("guaranteeYears").innerHTML = `Dodatkowy rok gwarancji: ${guaranteeYears} lat`;
});

/////////////////////////////////////////////////////////////////// accesories

/////////////////////////////////////////////////////////////////// buy form

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
        $selectPay2 = document.getElementById("payChoose2").innerHTML = `Wybrana metoda płatności: ${radioButton.value}.`;
      }
    }
    $price2 = document.getElementById("totalprice2").innerHTML = `Cena auta wraz z akcesoriami: ${price} PLN`;
    $hiddeform.forEach((e2) => {
      e2.classList.toggle("hidden");
    });
    $hidden.forEach((e1) => {
      e1.classList.toggle("hidden");
    });
  }
});

///////////////////////////////////////////////////////////////////// buy form

$back.addEventListener("click", () => {
  wheelsAmount = 0;
  guaranteeYears = 0;
  $wheelsAmount = document.getElementById("wheelsAmount").innerHTML = `Opony zimowe: ${wheelsAmount} szt`;
  $guaranteeYears = document.getElementById("guaranteeYears").innerHTML = `Dodatkowy rok gwarancji: ${guaranteeYears} lat`;
  window.location.href = "index.html";
});
