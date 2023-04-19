const submitButton = document.getElementById('submit-btn');
let allInfo = document.getElementById('main-form');

function getUserValue(event) {
  event.preventDefault();
  allInfo.innerHTML = allInfo.value;
}
submitButton.addEventListener('click', getUserValue);

function changeButton() {
  const checkAgreement = document.getElementById('agreement');
  if (checkAgreement.checked) {
    submitButton.removeAttribute('disabled');
  }
  if (!checkAgreement.checked) {
    submitButton.setAttribute('button', 'disabled');
  }
}
document.getElementById('agreement').addEventListener('change', changeButton);
