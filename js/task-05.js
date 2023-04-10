const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');


nameInputRef.addEventListener('input', toChangeOutput);

function toChangeOutput(event) {
    if (event.currentTarget.value === "") {
        nameOutputRef.textContent = "Anonymous";
    } else {
        nameOutputRef.textContent = event.currentTarget.value;
    }
};