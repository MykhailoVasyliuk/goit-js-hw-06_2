const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("input");
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");

createBtnRef.addEventListener('click', () => {
  toCreateBoxes(Number(inputRef.value))
});
destroyBtnRef.addEventListener('click', toDestroyBoxes);


function toCreateBoxes(value) {

  let size = 30;
  const boxes = [];

  for (let index = 0; index < value; index++) {
    const box = document.createElement('div');

    box.style.height = `${size}px`;
    box.style.width = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  boxesRef.append(...boxes);
}

function toDestroyBoxes() {
  boxesRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}