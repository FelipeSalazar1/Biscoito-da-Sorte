const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const buttonStart = document.querySelector("#buttonStart")
const buttonReset = document.querySelector("#buttonReset")

//Eventos
buttonStart.addEventListener("click", handleStartClick)
buttonReset.addEventListener("click", handleResetClick)

//Funções

function handleStartClick(event) {
  event.preventDefault();
  toogleScreen();
}

function handleResetClick() {
  toogleScreen();
}

function toogleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}