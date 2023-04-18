const submitButton = document.getElementById('submit-btn');
const clearButton = document.getElementById('clear-btn');
let allInfo = document.getElementById('main-form');
let checkAgreement = document.getElementById('agreement');
function getUserValue(event) {
    event.preventDefault();
    allInfo.innerHTML = allInfo.value;
}
submitButton.addEventListener('click', getUserValue);
function clearValues() {
    allInfo;
}
clearButton.addEventListener('click', clearValues());
function changeButton() {
    if (checkAgreement.checked) {
        clearButton.removeAttribute('disabled');
    }
    if (!checkAgreement.checked) {
        clearButton.setAttribute('button', 'disabled');
    }
}
checkAgreement.addEventListener('change', changeButton());
