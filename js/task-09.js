const bodyRef = document.querySelector("body");
const changeColorButtonRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");

changeColorButtonRef.addEventListener('click', toChangeColor)

function toChangeColor() {
  const currentColor = getRandomHexColor();
  bodyRef.style.backgroundColor = currentColor;
  colorRef.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
