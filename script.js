const inputValue = document.querySelector('#user-input');
const cleanButton = document.querySelector('#clear-btn');
const checkButton = document.querySelector('#check-btn');
const results = document.querySelector('#results-div');

const validatePattern = () => {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
    return regex.test(inputValue.value);
}

const validateNumber = (str) => {
    if (inputValue.value === '') {
        alert('Please provide a phone number');
        return;
    }
    results.innerText = `${validatePattern(str) ? 'Valid' : 'Invalid'} US number: ${inputValue.value}`
}

const clearInput = () => {
    inputValue.value = '';
    results.innerText = '';
}

checkButton.addEventListener('click', () => {
    validateNumber(inputValue.value)
});

cleanButton.addEventListener('click', clearInput);