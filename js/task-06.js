const validationInputRef = document.querySelector("#validation-input");

validationInputRef.addEventListener("blur", toCheckInputLength);
function toCheckInputLength() {
    let length = Number(validationInputRef.dataset.length);
    let inputLength = Number(validationInputRef.value.length);
    const inputClass = validationInputRef.classList;
    if (length === inputLength) {
        inputClass.add('valid');

        if (inputClass.contains("invalid")) {
            inputClass.remove("invalid");
        }
    } else {
        inputClass.add('invalid');

        if (inputClass.contains("valid")) {
            inputClass.remove("valid");
        }
    }
};
