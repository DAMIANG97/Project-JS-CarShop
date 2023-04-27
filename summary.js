var price = sessionStorage.getItem("Price");
var carName = sessionStorage.getItem("CarName");
var carImage = sessionStorage.getItem("CarImage");
var selectPay = sessionStorage.getItem("SelectPay");
const backToList = document.getElementById("BackToList");

var $price = (document.getElementById("totalprice").innerHTML = `Cena auta wraz z akcesoriami: ${price} PLN`);
var $carName = (document.getElementById("carChoose").innerHTML = `Gratulujemy zakupu samochodu ${carName}!`);
var $selectPay = (document.getElementById("payChoose").innerHTML = `Wybrana metoda płatności: ${selectPay}.`);
document.getElementById("imgSummary").src = carImage;

backToList.addEventListener("click", () => {
  window.location.href = "index.html";
});
