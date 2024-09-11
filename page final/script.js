const atelerDiv = document.querySelector("#atelier");

atelerDiv.addEventListener("click", atelierDivClickOn);

function atelierDivClickOn() {
  if (atelerDiv.classList == "grid") {
    atelerDiv.classList.replace("grid", "absolute");
  } else {
    atelerDiv.classList.replace("absolute", "grid");
  }
}
