const $offer = document.querySelectorAll(".offer");
// const $tak = document.getElementById("tak");
// const $goback = document.getElementById("goback");
const $hidden2 = document.querySelectorAll(".hidden2");
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

// localStorage.setItem("hiddenClass", $oferta);
//  $oferta = localStorage.getItem("hiddenClass");

// $tak.addEventListener("click", () => {
//   $oferta.forEach((e1) => {
//     e1.classList.toggle("hidden");
//   });
// });
