const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener('input', toChangeText);

function toChangeText() {
    textRef.style.fontSize = `${inputRef.value}px`;
};
