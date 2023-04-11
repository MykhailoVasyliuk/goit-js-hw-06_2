const validationInputRef = document.querySelector("#validation-input");

validationInputRef.addEventListener("blur", toCheckInputLength);
function toCheckInputLength() {
    let length = Number(validationInputRef.dataset.length);
    let inputLength = Number(validationInputRef.value.length);

    console.log(length)
    console.log(length)

    if (length === inputLength) {
        validationInputRef.classList.remove('invalid');
        validationInputRef.classList.add('valid');
    } else {
        validationInputRef.classList.remove('valid');
        validationInputRef.classList.add('invalid');
    }
};
