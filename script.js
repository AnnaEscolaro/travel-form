const submitButton = document.getElementById('submit-btn');
const clearButton = document.getElementById('clear-btn');
let allInfo = document.getElementById('main-form');

function getUserValue(event) {
    event.preventDefault();
    allInfo.innerHTML = allInfo.value;
}
submitButton.addEventListener('click', getUserValue);

function clearValues() {
    allInfo;
}
clearButton.addEventListener('click', clearValues);