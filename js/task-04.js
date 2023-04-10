const incremenntBtnRef = document.querySelector('button[data-action="increment"]');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const counterValueRef = document.querySelector('#value');
let counterValue = 0;

const toIncrementValue = () => {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
};

const toDecrementValue = () => {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
};

incremenntBtnRef.addEventListener('click', toIncrementValue);
decrementBtnRef.addEventListener('click', toDecrementValue);
