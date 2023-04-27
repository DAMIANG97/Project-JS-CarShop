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

const $back = document.getElementById("back");
var $wheelMinus = document.getElementById("wheelMinus");
var $wheelPlus = document.getElementById("wheelPlus");
var $guaranteeMinus = document.getElementById("guaranteeMinus");
var $guaranteePlus = document.getElementById("guaranteePlus");
var $wheelsAmount = document.getElementById("wheelsAmount");
var $guaranteeYears = document.getElementById("guaranteeYears");

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

var price;
var wheelsAmount = 0;
var guaranteeYears = 0;
var carName;
var carImage;
///////////////////////////////////////////////////////////////////// follow price and name

$fordMustang.addEventListener("click", () => {
  price = mustang.price;
  carName = mustang.carName;
  carImage = mustang.carImage;
  $price = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${price}  PLN`;
  $carName = document.getElementById("carChoose").innerHTML = "Wybrane auto: " + carName;
});
$audiTT.addEventListener("click", () => {
  price = audiTT.price;
  carName = audiTT.carName;
  carImage = audiTT.carImage;
  $price = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${price} PLN`;
  $carName = document.getElementById("carChoose").innerHTML = "Wybrane auto: " + carName;
});
$audiA6.addEventListener("click", () => {
  price = audiA6.price;
  carName = audiA6.carName;
  carImage = audiA6.carImage;
  $price = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${price} PLN`;
  $carName = document.getElementById("carChoose").innerHTML = "Wybrane auto: " + carName;
});
$mercedesMaybach.addEventListener("click", () => {
  price = maybach.price;
  carName = maybach.carName;
  carImage = maybach.carImage;
  c$price = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${price} PLN`;
  $carName = document.getElementById("carChoose").innerHTML = "Wybrane auto: " + carName;
});

$back.addEventListener("click", () => {
  wheelsAmount = 0;
  guaranteeYears = 0;
  $wheelsAmount = document.getElementById("wheelsAmount").innerHTML = `Opony zimowe: ${wheelsAmount} szt`;
  $guaranteeYears = document.getElementById("guaranteeYears").innerHTML = `Dodatkowy rok gwarancji: ${guaranteeYears} lat`;
});

////////////////////////////////////////////////////////////////// follow price and name

////////////////////////////////////////////////////////////////// accesories

$wheelMinus.addEventListener("click", () => {
  price = price - 2000;
  $price = document.getElementById("totalprice").innerHTML = `Cena całkowita: ${price} PLN`;

  wheelsAmount = wheelsAmount - 1;
  $wheelsAmount = document.getElementById("wheelsAmount").innerHTML = `Opony zimowe: ${wheelsAmount} szt`;
});

$wheelPlus.addEventListener("click", () => {
  price = price + 2000;
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
  price = price + 5000;
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
  } else if (!leasingRadio.checked && !cashRadio.checked) {
    $errorMsg.textContent = "Error: Please select a payment method!";
  } else {
    sessionStorage.setItem("Price", price);
    sessionStorage.setItem("CarName", carName);
    sessionStorage.setItem("CarImage", carImage);
    window.location.href = "summary.html";
    $errorMsg.textContent = "";
    const $radioButtons = document.querySelectorAll('input[name="payChoose"]');
    for (const radioButton of $radioButtons) {
      if (radioButton.checked) {
        selectedPay = radioButton.value;
        sessionStorage.setItem("SelectPay", selectedPay);
      }
      break;
    }
  }
});

///////////////////////////////////////////////////////////////////// buy form

// localStorage.setItem("hiddenClass", $oferta);
//  $oferta = localStorage.getItem("hiddenClass");

// $tak.addEventListener("click", () => {
//   $oferta.forEach((e1) => {
//     e1.classList.toggle("hidden");
//   });
// });
